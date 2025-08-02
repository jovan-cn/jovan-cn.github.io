export const dynamic = 'force-static';
import { getAllData } from "@/app/lib/data";
import { IArticle } from "@/app/types/article";
import ArticleList from "@/app/[locale]/article/article-list";
import { setRequestLocale } from "next-intl/server";

export default async function PageArticle({
  params
} : {
  params: Promise<{
    locale: string
  }>
}) {
  const { locale } = await params;
  const all: IArticle[] = await getAllData("article", locale);

  setRequestLocale(locale);

  return (
    <div className="container">
      <ArticleList list={all} />
    </div>
  )
}