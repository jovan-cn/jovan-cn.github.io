import Title from "@/app/component/title";
import { getAllPortfolio, getPortfolioByName } from "@/app/lib/data";
import NotFound from "@/app/[locale]/not-found";
import { IPortfolio } from "@/app/types/portfolio";
import clsx from "clsx";
import Mdx from "@/app/component/markdown/mdx/mdx";


export default async function CPortfolio({
  params
} : {
  params: {id: string}
}) {
  const name = decodeURIComponent(params.id);
  const data = await getPortfolioByName(name);

  if (data === undefined) {
    return NotFound();
  }

  return (
    <div className={clsx("w-full flex flex-col justify-center gap-1")}>
      <Title title={data.meta.title} />

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
  const list: IPortfolio[] = await getAllPortfolio();
  return list.map((a: IPortfolio) => ({
    id: a.meta.title,
  }))
}