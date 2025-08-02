export const dynamic = 'force-static';
import { getAllData, getDataByID } from "@/app/lib/data";
import { IArticle } from "@/app/types/article";
import clsx from "clsx";
import Title from "@/app/component/title";
import Mdx from "@/app/component/markdown/mdx/mdx";
import { routing } from "@/i18n/routing";
import NotFound from "../../not-found";
import { setRequestLocale } from "next-intl/server";


// type of id must be string
export default async function CArticle({
  params
} : {
  params: Promise<{
    locale: string,
    id: string
  }>
}) {
  const { locale, id } = await params;
  const data = await getDataByID("article", locale, id);

  if (data === undefined) {
    return NotFound();
  }

  setRequestLocale(locale);

  return (
    <div className="container">
      <div className={clsx("flex flex-col justify-center gap-1")}>
        <Title title={data.title} />

        {/* body */}
        <div className={clsx(
          "flex flex-col justify-center gap-2",
          "p-3 circled"
        )}>
          <Mdx content={data.content || ""} />
        </div>
      </div>
    </div>
  )
}


// https://nextjs.org/docs/app/api-reference/functions/generate-static-params#all-paths-at-build-time
export async function generateStaticParams() {
  const locales = routing.locales;
  const list: IArticle[][] = await Promise.all(
    locales.map(locale => getAllData("article", locale))
  );
  return list.flatMap((avec: IArticle[], index: number) => 
    avec.map((a: IArticle) => ({
      locale: locales[index],
      id: a.id.toString(),
    }))
  )
}