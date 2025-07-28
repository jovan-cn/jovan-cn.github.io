import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter';
import { IRepository } from '@/app/types/repository';
import { IArticle } from '../types/article';
import { IPortfolio} from '../types/portfolio';
import { ITutorial} from '../types/tutorial';
import { BaseMatter } from '../types';
import dayjs from 'dayjs';
import { IQuote} from '../types/quote';



// server side only 
async function getAllJsonFiles(node: string[]) {
  const dir = path.join(...node);
  const filenames = await fs.readdir(dir);
  
  const lists = await Promise.all(
    filenames.map(async (filename: string) => {
      const filePath = path.join(dir, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      return JSON.parse(fileContents);
    })
  )
  return lists;
}

async function getMdData(filename: string[]) {
  const fullPath = path.join(...filename);
  return fs.readFile(fullPath, 'utf8');
}




async function getAllMdFiles(dirs: string[]) {
  const dir = path.join(...dirs);
  const filenames = await fs.readdir(dir);
  
  const lists = await Promise.all(
    filenames.map(async (filename: string) => {
      const filePath = path.join(dir, filename);

      try {
        const [fileContent, stats] = await Promise.all([
          fs.readFile(filePath, 'utf8'),
          fs.stat(filePath),
        ]);
        const { data, content } = matter(fileContent);

        return {
          data: {
            ...data,
            created:  dayjs(stats.birthtime).unix(),
            modified: dayjs(stats.mtime).unix(),
            accessed: dayjs(stats.atime).unix(),
          },
          content: content || '',
        };
      } catch (error) {
        console.error(`Error processing file ${filename}:`, error);
      }
    })
  );

  return lists.filter(item => item !== null) as Array<{
    data: any;
    content: string;
  }>;
}

async function getContentByType<T extends BaseMatter>(
  dirs: string[],
) {
  const list = await getAllMdFiles(dirs);
  return list
    .map((v) => ({
      content: v.content,
      ...v.data,
    }))
    .sort((a, b) => {
      return b.modified - a.modified;
    })
  
}

type ContentTypeMap = {
  repository: IRepository;
  article: IArticle;
  tutorial: ITutorial,
  portfolio: IPortfolio,
  quotes: IQuote,
};

export type ContentType = keyof ContentTypeMap;


export async function getAllData<T extends ContentType>(
  type: T,
  locale: string,
): Promise<ContentTypeMap[T][]> {
  return getContentByType<ContentTypeMap[T]>([process.cwd(), "data", type]);
}

//////          Repository

export async function getRepositoryByName(n: string) {
  const repos = await getAllData("repository", "zh");
  return repos.find(r => r.title == n);
}


//////          Article


export async function getArticleByName(name: string) {
  const articles = await getAllData("article", "zh");
  return articles.find(a => a.title === name);
}
export async function getArticleByCreatime(ts: string) {
  const articles = await getAllData("article", "zh");
  return articles.find(a => a.created.toString() === ts);
}

////////             Tutorial
export async function getTutorialByName(name: string) {
  const tutorials = await getAllData("tutorial", "zh");
  return tutorials.find(a => a.title === name);
}
export async function getTutorialByCreatime(ts: string) {
  const tutorials = await getAllData("tutorial", "zh");
  return tutorials.find(a => a.created.toString() === ts);
}

////////             Portfolio
export async function getPortfolioByName(n: string) {
  const repos = await getAllData("portfolio", "zh");
  return repos.find(r => r.title == n);
}


////////             TODO
export async function getTODO() {
  return await getMdData([process.cwd(), "TODO"]);
}
