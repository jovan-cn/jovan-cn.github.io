export const dynamic = 'force-static';
import Title from "@/app/component/title";
import { getAllData, getDataByID } from "@/app/lib/data";
import NotFound from "@/app/[locale]/not-found";
import { IPortfolio } from "@/app/types/portfolio";
import clsx from "clsx";
import Mdx from "@/app/component/markdown/mdx/mdx";
import { routing } from "@/i18n/routing";


export default async function CPortfolio({
  params
} : {
  params: Promise<{
    locale: string,
    id: string
  }>
}) {
  const { locale, id } = await params;
  const data = await getDataByID("portfolio", locale, id);

  if (data === undefined) {
    return NotFound();
  }

  return (
    <div className={clsx("w-full flex flex-col justify-center gap-1")}>
      <Title title={data.title} />

      {/* body */}
      <div className={clsx(
        "flex flex-col justify-center gap-2 ",
        "p-2 circled",
      )}>
        <Mdx content={data.content || ""} />
      </div>
      
    </div>
  )
}


export async function generateStaticParams() {
  const locales = routing.locales;
  const list: IPortfolio[][] = await Promise.all(
    locales.map(l => getAllData("portfolio", l))
  );
  return list.flatMap((pvec: IPortfolio[], index: number) => 
    pvec.map(p => ({
      locale: locales[index], // required
      id: p.id.toString(),
    }))
  )
}