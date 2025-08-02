export const dynamic = 'force-static';
import IconLinker from "@/app/component/icon-linker";
import Title from "@/app/component/title";
import { getAllData, getDataByID } from "@/app/lib/data";
import NotFound from "@/app/[locale]/not-found";
import { Lang, OuterLink } from "@/app/types";
import { IRepository } from "@/app/types/repository";
import { Chip } from '@mui/joy';
import clsx from "clsx";
import Mdx from "@/app/component/markdown/mdx/mdx";
import ZoomImg from "@/app/component/markdown/mdx/image";
import { routing } from "@/i18n/routing";


export default async function CRepository({
  params
} : {
  params: Promise<{
    locale: string,
    id: string
  }>
}) {
  const { locale, id } = await params;
  const r = await getDataByID("repository", locale, id);

  if (r === undefined) {
    return NotFound();
  }

  return (
    <div className={clsx("flex flex-col justify-center gap-1")}>
      <Title title={r.title} />

      {/* body */}
      <div className={clsx(
        "flex flex-col items-center justify-center gap-2",
        "p-1 circled space-y-2"
      )}>
        <div className={clsx("w-full flex items-center justify-between")}>
          {/* Author  */}
          <div className="flex items-center gap-1">
            <img src={r.avatar} alt={r.author}
              className="w-4 h-4 rounded-full"
            />
            <h4>{r.author}</h4>
          </div>

          <div className="flex items-center gap-1">
            {r.links.map((link: OuterLink, i: number) => {
              return <IconLinker key={i} data={link} />
            })}
          </div>
        </div>

        {/* Description */}
        <div className="w-full">
          {r.desc}
        </div>

        {/* Cover */}
        <ZoomImg children={r.cover} />

        {/* Evaluate */}
        <div className="w-full text-sm">
          <Mdx content={r.content || ""} />
        </div>

        {/* language & license */}
        <div className="flex items-center justify-between w-full">
          <div className={clsx("")}>
            {r.language.map((lang: Lang) => (
              <Chip key={lang} variant="soft" >
                {lang}
              </Chip>
            ))}
          </div>

          <div className="flex flex-wrap gap-1">
            <Chip variant="outlined" color="neutral">
              {r.license}
            </Chip>
          </div>
        </div>
      </div>
      
    </div>
  )
}


// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const locales = routing.locales;
  const repos: IRepository[][] = await Promise.all(
    locales.map(locale => getAllData("repository", locale))
  );

  return repos.flatMap((rvec: IRepository[], index: number) => 
    rvec.map(r => ({
      locale: locales[index], // required
      id: r.id.toString(),
    }))
  )
}