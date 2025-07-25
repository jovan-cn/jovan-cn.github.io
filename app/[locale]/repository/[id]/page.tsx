import IconLinker from "@/app/component/icon-linker";
import Title from "@/app/component/title";
import { getAllRepository, getRepositoryByName } from "@/app/lib/data";
import NotFound from "@/app/[locale]/not-found";
import { Lang, OuterLink } from "@/app/types";
import { IRepository } from "@/app/types/repository";
import { Chip } from '@mui/joy';
import clsx from "clsx";
import Mdx from "@/app/component/markdown/mdx/mdx";


export default async function CRepository({
  params
} : {
  params: Promise<{id: string}>
}) {
  const { id } = await params;
  const r = await getRepositoryByName(id);

  if (r === undefined) {
    return NotFound();
  }

  return (
    <div className={clsx("flex flex-col justify-center gap-1")}>
      <Title title={r.meta.title} />

      {/* body */}
      <div className={clsx(
        "flex flex-col items-center justify-center gap-2",
        "p-1 circled space-y-2"
      )}>
        <div className={clsx("w-full flex items-center justify-between")}>
          {/* Author  */}
          <div className="flex items-center gap-1">
            <img src={r.meta.avatar} alt={r.meta.author}
              className="w-4 h-4 rounded-full"
            />
            <h4>{r.meta.author}</h4>
          </div>

          <div className="flex items-center gap-1">
            {r.meta.links.map((link: OuterLink, i: number) => {
              return <IconLinker key={i} data={link} />
            })}
          </div>
        </div>

        {/* Description */}
        <div className="w-full">
          {r.meta.desc}
        </div>

        {/* Cover */}
        <div className="w-full circled">
          <img src={r.meta.cover} className="w-full h-full rounded" />
        </div>

        {/* Evaluate */}
        <div className="w-full text-sm">
          <Mdx content={r.content || ""} />
        </div>

        {/* language & license */}
        <div className="flex items-center justify-between w-full">
          <div className={clsx("")}>
            {r.meta.language.map((lang: Lang) => (
              <Chip key={lang} variant="soft" >
                {lang}
              </Chip>
            ))}
          </div>

          <div className="flex flex-wrap gap-1">
            <Chip variant="outlined" color="neutral">
              {r.meta.license}
            </Chip>
          </div>
        </div>
      </div>
      
    </div>
  )
}


// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const repos: IRepository[] = await getAllRepository();
  return repos.map((r: IRepository) => ({
    id: r.meta.title,
  }))
}