export const dynamic = 'force-static';
import { getAllData } from "@/app/lib/data"
import { IRepository } from "@/app/types/repository"
import RepositoryList from "./repository-list";
import { getLocale, setRequestLocale } from "next-intl/server";

export default async function PageRepository({
  params
} : {
  params: Promise<{
    locale: string,
    id: string
  }>
}) {
  const { locale } = await params;
  const repositories: IRepository[] = await getAllData("repository", locale);

  setRequestLocale(locale);

  return (
    <div className="container">
      <RepositoryList list={repositories} />
    </div>
  )
}