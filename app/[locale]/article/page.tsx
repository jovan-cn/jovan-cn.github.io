import { getAllArticles } from "@/app/lib/data";
import { IArticle } from "@/app/types/article";
import ArticleList from "@/app/[locale]/article/article-list";

export default async function PageArticle() {
  const all: IArticle[] = await getAllArticles();

  return (
    <div className="container">
      <ArticleList list={all} />
    </div>
  )
}