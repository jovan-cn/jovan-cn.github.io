import { getAllTutorials, getTutorialByCreatime } from "@/app/lib/data";
import Marked from "@/app/component/marked";
import { ITutorial } from "@/app/types/tutorial";
import clsx from "clsx";
import Title from "@/app/component/title";
import NotFound from "@/app/not-found";


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
      <Title title={data.meta.title} />

      {/* body */}
      <div className={clsx(
        "flex flex-col justify-center gap-2",
        "p-3 circled"
      )}>
        <Marked content={data.content || ""} />
      </div>
      
    </div>
  )
}


// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const datas: ITutorial[] = await getAllTutorials();
  return datas.map((a: ITutorial) => ({
    id: a.meta.created.toString(),
  }))
}