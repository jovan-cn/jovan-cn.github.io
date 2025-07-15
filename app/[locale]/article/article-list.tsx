'use client'
import { IArticle } from "@/app/types/article"
import { useSearchBarStore } from "@/app/store/useSearch";
import clsx from "clsx";
import Link from "next/link";
import { DynamicPath } from "@/app/lib";
import NotFound from "@/app/not-found";

export default function ArticleList({
  list
} : {
  list: IArticle[]
}) {
  const { searchContent } = useSearchBarStore();

  const datas = list.filter(d => (
    searchContent 
      ? d.content?.includes(searchContent) || d.meta.title.includes(searchContent)
      : true
  ));

  if (datas.length === 0) {
    return NotFound();
  }

  return (
    <div className={clsx("list")}>
      {datas.map((a: IArticle, i: number) => {
        return (
          <Link key={i}
            href={DynamicPath(['article', encodeURIComponent(a.meta.created)])}
            className={clsx("h-20 sm:h-24 litem")}
          >
            <div className="flex flex-col items-between gap-2">
              <div>
                {a.meta.title}
              </div>
              <div className={clsx("text-sm")}>
                {a.meta.abstract}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
