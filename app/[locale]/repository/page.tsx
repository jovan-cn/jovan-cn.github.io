export const dynamic = 'force-static';
import { getAllData } from "@/app/lib/data"
import { IRepository } from "@/app/types/repository"
import RepositoryList from "./repository-list";
import { getLocale } from "next-intl/server";

export default async function PageRepository() {
  const locale = await getLocale();
  const repositories: IRepository[] = await getAllData("repository", locale);

  return (
    <div className="container">
      <RepositoryList list={repositories} />
    </div>
  )
}