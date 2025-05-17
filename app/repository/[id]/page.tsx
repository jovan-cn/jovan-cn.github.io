import BackButton from "@/app/component/back-button";
import { getAllRepository, getRepositoryByName } from "@/app/lib/data";
import { IRepository } from "@/app/types/repository";
import { Chip } from '@mui/joy';
import clsx from "clsx";


export default async function CRepository({
  params
} : {
  params: {id: string}
}) {
  const id = params.id;
  const r = await getRepositoryByName(id);

  if (r === undefined) {
    return <div>Not Found</div>
  }

  return (
    <div className={clsx("flex flex-col justify-center gap-2")}>
      {/* header */}
      <div className={clsx(
        "flex flex-row items-center justify-between rounded",
        "bg-white dark:bg-slate-900",
      )}>
        <BackButton />
        <h3>{r.title}</h3>
        <div></div>
      </div>

      {/* body */}
      <div className={clsx(
        "flex flex-col items-center justify-center gap-2 rounded",
        "p-1 border border-slate-200 dark:border-slate-700"
      )}>
        {/* Author  */}
        <div className={clsx("w-full flex items-center gap-2")}>
          <img src={r.avatar} alt={r.author}
            className="w-4 h-4 rounded-full"
          />
          <h4>{r.author}</h4>
        </div>

        {/* Description */}
        <div className="">
          {r.desc}
        </div>

        {/* Cover */}
        <div className="rounded border border-slate-200 dark:border-slate-900">
          <img src={r.cover} className="w-full h-full rounded" />
        </div>

        {/* Evaluate */}
        <div className="w-full text-sm">
          {r.evaluate}
        </div>

        <div className={clsx("w-full")}>
          {r.language.map((lang: Lang) => (
            <Chip key={lang} variant="soft" >
              {lang}
            </Chip>
          ))}
        </div>
      </div>
      
    </div>
  )
}


// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const repos: IRepository[] = await getAllRepository();
  return repos.map((r: IRepository) => ({
    id: r.title,
  }))
}