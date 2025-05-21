import ArticleList from "@/app/(pages)/article/article-list"
import { getAllArticles } from "@/app/lib/data";
import { IArticle } from "@/app/types/article";

export default async function PageArticle() {
  const all: IArticle[] = await getAllArticles();

  return (
    <div className="container">
      <ArticleList list={all} />
    </div>
  )
}