export const dynamic = 'force-static';
import clsx from "clsx";
import { getAllData } from "@/app/lib/data"
import { ITutorial } from "@/app/types/tutorial";
import Link from "next/link";
import { DynamicPath } from "@/app/lib";
import { Chip } from "@mui/joy";
import { getLocale } from "next-intl/server";


export default async function PageTutorial() {
  const locale = await getLocale();
  const datas: ITutorial[] = await getAllData("tutorial", locale);

  return (
    <div className="container">
      <div className={clsx("list")}>
        {datas.map((a: ITutorial, i: number) => {
          return (
            <Link key={i}
              href={DynamicPath(['tutorial', a.id.toString()])}
              className={clsx("h-20 sm:h-24 litem")}
            >
              <div className="flex flex-col justify-between">
                <div>
                  {a.title}
                </div>
                <div className="text-sm">
                  {a.abstract}
                </div>
                <div>
                  {a.tags?.map((t: string, i:number) => (
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