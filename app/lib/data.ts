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
  return getContentByType<ContentTypeMap[T]>([process.cwd(), "data", locale, type]);
}

export async function getDataByID<T extends ContentType>(
  type: T,
  locale: string,
  id: string,
): Promise<ContentTypeMap[T] | undefined> {
  const lists = await getAllData(type, locale);
  return lists.find(d => d.id.toString() === id);
}

//////          Repository

export async function getRepositoryByName(locale: string, n: string) {
  const repos = await getAllData("repository", locale);
  return repos.find(r => r.title == n);
}


//////          Article


export async function getArticleByName(locale: string, name: string) {
  const articles = await getAllData("article", locale);
  return articles.find(a => a.title === name);
}
export async function getArticleByCreatime(locale: string, ts: string) {
  console.log(locale, ts);
  const articles = await getAllData("article", locale);
  return articles.find(a => a.created.toString() === ts);
}

////////             Tutorial
export async function getTutorialByName(locale: string, name: string) {
  const tutorials = await getAllData("tutorial", locale);
  return tutorials.find(a => a.title === name);
}
export async function getTutorialByCreatime(locale: string, ts: string) {
  console.log(locale);
  const tutorials = await getAllData("tutorial", locale);
  return tutorials.find(a => a.created.toString() === ts);
}

////////             Portfolio
export async function getPortfolioByName(locale: string, n: string) {
  const repos = await getAllData("portfolio", locale);
  return repos.find(r => r.title == n);
}


////////             TODO
export async function getTODO() {
  return await getMdData([process.cwd(), "TODO"]);
}
