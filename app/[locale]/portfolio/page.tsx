export const dynamic = 'force-static';
import clsx from "clsx";
import { getAllData} from "@/app/lib/data";
import { IPortfolio } from "@/app/types/portfolio";
import { Chip } from "@mui/joy";
import { Lang, OuterLink } from "@/app/types";
import IconLinker from "@/app/component/icon-linker";
import Link from "next/link";
import { DynamicPath } from "@/app/lib";
import Mdx from "@/app/component/markdown/mdx/mdx";
import { getLocale } from "next-intl/server";

export default async function PagePortfolio() {
  const locale = await getLocale();
  const datas: IPortfolio[] = await getAllData("portfolio", locale);

  return (
    <div className="container">
      <div className={clsx( "flex flex-wrap gap-2 justify-center")}>
        {datas.map((a: IPortfolio, i: number) => {
          return (
            <div key={i} className={clsx(
                "circled h-80 sm:w-72 w-full",
            )}>
              <div className="flex flex-col w-full h-full">
                {/* top */}
                <Link href={DynamicPath(['portfolio', encodeURIComponent(a.id)])}
                  className={clsx(
                    "h-3/5 rounded-t overflow-hidden bg-slate-700",
                )}>
                  {a.cover && <img src={a.cover} alt="cover" className={clsx(
                    "w-full h-full"
                  )} />}
                </Link>

                {/* bottom */}
                <div className={clsx(
                  "flex-1 flex flex-col gap-1 px-2 py-1",
                  "dark:bg-slate-800",
                  "rounded-b"
                )}>

                  <h3 className="text-center">
                    {a.title}
                  </h3>
                  <div className="flex-1 text-sm">
                    <Mdx content={a.desc} />
                  </div>
                  <div className="flex flex-row justify-between items-center gap-1">
                    <div>
                      {a.language?.map((l: Lang, i: number) => (
                        <Chip key={i} variant="soft" >
                          {l}
                        </Chip>
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      {a.links?.map((link: OuterLink, i: number) => {
                        return <IconLinker key={i} data={link} />
                      })}
                    </div>
                  </div>

                </div> 
              </div>

            </div>
          )
        })}
      </div>
    </div>  )
}