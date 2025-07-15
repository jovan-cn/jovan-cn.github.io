import { getAllArticles, getArticleByCreatime } from "@/app/lib/data";
import Marked from "@/app/component/marked";
import { IArticle } from "@/app/types/article";
import clsx from "clsx";
import { notFound } from "next/navigation";
import Title from "@/app/component/title";


// type of id must be string
export default async function CArticle({
  params
} : {
  params: Promise<{id: string}>
}) {
  const { id } = await params;
  const data = await getArticleByCreatime(id);

  if (data === undefined) {
    return notFound();
  }

  return (
    <div className="container">
      <div className={clsx("flex flex-col justify-center gap-1")}>
        <Title title={data.meta.title} />

        {/* body */}
        <div className={clsx(
          "flex flex-col justify-center gap-2",
          "p-3 circled"
        )}>
          <Marked content={data.content || ""} />
        </div>
      </div>
    </div>
  )
}


// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const list: IArticle[] = await getAllArticles();
  return list.map((a: IArticle) => ({
    id: a.meta.created.toString(),
  }))
}