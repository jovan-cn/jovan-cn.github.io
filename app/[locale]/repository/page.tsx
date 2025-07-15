import { getAllRepository } from "@/app/lib/data"
import { IRepository } from "@/app/types/repository"
import RepositoryList from "./repository-list";

export default async function PageRepository() {
  const repositories: IRepository[] = await getAllRepository();

  return (
    <div className="container">
      <RepositoryList list={repositories} />
    </div>
  )
}