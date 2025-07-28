import { getAllData } from "@/app/lib/data";
import { IArticle } from "@/app/types/article";
import ArticleList from "@/app/[locale]/article/article-list";
import { getLocale } from "next-intl/server";

export default async function PageArticle() {
  const locale = await getLocale();
  const all: IArticle[] = await getAllData("article", locale);

  return (
    <div className="container">
      <ArticleList list={all} />
    </div>
  )
}