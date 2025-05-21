import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter';
import { IRepository, IRepositoryFrontMatter } from '@/app/types/repository';
import { IArticleFrontMatter } from '../types/article';
import { IPortfolioFrontMatter } from '../types/portfolio';
import { ITutorialFrontMatter } from '../types/tutorial';
import { BaseMatter } from '../types';
import dayjs from 'dayjs';
import { IQuote, IQuoteMatter } from '../types/quote';



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
      meta: v.data as T,
      content: v.content,
    }))
    .sort((a, b) => {
      return b.meta.modified - a.meta.modified;
    })
  
}


//////          Repository

export async function getAllRepository(): Promise<IRepository[]> {
  return getContentByType<IRepositoryFrontMatter>([process.cwd(), "data", "repository"]);
}

export async function getRepositoryByName(n: string) {
  const repos = await getAllRepository();
  return repos.find(r => r.meta.title == n);
}


//////          Article

export async function getAllArticles() {
  return getContentByType<IArticleFrontMatter>([process.cwd(), "data", "article"]);
}

export async function getArticleByName(name: string) {
  const articles = await getAllArticles();
  return articles.find(a => a.meta.title === name);
}
export async function getArticleByCreatime(ts: string) {
  const articles = await getAllArticles();
  return articles.find(a => a.meta.created.toString() === ts);
}

////////             Tutorial
export async function getAllTutorials() {
  return getContentByType<ITutorialFrontMatter>([process.cwd(), "data", "tutorial"]);
}

export async function getTutorialByName(name: string) {
  const tutorials = await getAllTutorials();
  return tutorials.find(a => a.meta.title === name);
}
export async function getTutorialByCreatime(ts: string) {
  const tutorials = await getAllTutorials();
  return tutorials.find(a => a.meta.created.toString() === ts);
}

////////             Portfolio

export async function getAllPortfolio() {
  return getContentByType<IPortfolioFrontMatter>([process.cwd(), "data", "portfolio"]);
}

export async function getPortfolioByName(n: string) {
  const repos = await getAllPortfolio();
  return repos.find(r => r.meta.title == n);
}


////////            Quotes
export async function getAllQuotes(): Promise<IQuote[]> {
  return getContentByType<IQuoteMatter>([process.cwd(), "data", "home", "quotes"]);
}

////////             TODO
export async function getTODO() {
  return await getMdData([process.cwd(), "TODO"]);
}
