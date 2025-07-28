import { getAllData, getTutorialByCreatime } from "@/app/lib/data";
import { ITutorial } from "@/app/types/tutorial";
import clsx from "clsx";
import Title from "@/app/component/title";
import NotFound from "@/app/[locale]/not-found";
import Mdx from "@/app/component/markdown/mdx/mdx";
import { routing } from "@/i18n/routing";


export default async function CTutorial({
  params
} : {
  params: Promise<{id: string}>
}) {
  const { id } = await params;
  const data = await getTutorialByCreatime(id);

  if (data === undefined) {
    return NotFound();
  }

  return (
    <div className={clsx("flex flex-col justify-center gap-1 w-full")}>
      <Title title={data.title} />

      {/* body */}
      <div className={clsx(
        "flex flex-col justify-center gap-2",
        "p-3 circled"
      )}>
        <Mdx content={data.content || ""} />
      </div>
      
    </div>
  )
}


// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const locales = routing.locales;
  const datas: ITutorial[][] = await Promise.all(
    locales.map(l => getAllData("tutorial", l))
  );
  return datas.flatMap((tvec: ITutorial[]) =>
    tvec.map(t => ({
      id: t.created.toString(),
    }))
  )
}