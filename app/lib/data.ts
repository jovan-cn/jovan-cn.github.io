import { promises as fs } from 'fs'
import path from 'path'
import { IRepository } from '@/app/types/repository';


// server side only 
async function getAllFiles(node: string[]) {
  const dir = path.join(...node);
  const filenames = await fs.readdir(dir);
  
  const lists = await Promise.all(
    filenames.map(async (filename: string) => {
      const filePath = path.join(dir, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      return JSON.parse(fileContents)
    })
  )
  return lists;
}


export async function getAllRepository() {
  const split_list: IRepository[][] = await getAllFiles([process.cwd(), "data", "repository"]);
  const repositories: IRepository[] = split_list.flat();
  return repositories.sort((a: IRepository, b: IRepository) => a.create_time - b.create_time);
}

export async function getRepositoryByName(n: string) {
  const repos = await getAllRepository();
  return repos.find(r => r.title == n);
}