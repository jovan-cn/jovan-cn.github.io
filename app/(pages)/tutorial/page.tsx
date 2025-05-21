import clsx from "clsx";
import { getAllTutorials } from "@/app/lib/data"
import { ITutorial } from "@/app/types/tutorial";
import Link from "next/link";
import { DynamicPath } from "@/app/lib";
import { Chip } from "@mui/joy";


export default async function PageTutorial() {
  const datas: ITutorial[] = await getAllTutorials();

  return (
    <div className="container">
      <div className={clsx("list")}>
        {datas.map((a: ITutorial, i: number) => {
          return (
            <Link key={i}
              href={DynamicPath(['tutorial', a.meta.created.toString()])}
              className={clsx("h-20 sm:h-24 litem")}
            >
              <div className="flex flex-col justify-between">
                <div>
                  {a.meta.title}
                </div>
                <div className="text-sm">
                  {a.meta.abstract}
                </div>
                <div>
                  {a.meta.tags?.map((t: string, i:number) => (
                    <Chip key={i}>{t}</Chip>
                  ))}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}