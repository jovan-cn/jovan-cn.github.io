import { getAllRepository } from "../lib/data"
import { IRepository, Lang } from "@/app/types/repository"
import { Chip } from '@mui/joy';
import clsx from "clsx";
import Link from 'next/link';

export default async function PageRepository() {
  const repositories: IRepository[] = await getAllRepository();

  return (
    <div className="container mx-auto rounded border border-gray-200 dark:border-gray-800">
      <div className={clsx(
        "flex flex-col divide-y-1 divide-gray-200 dark:divide-gray-800",
      )}>
      {repositories.map((r: IRepository) => {
        console.log(r);
        return (
          <Link key={r.create_time}
            href={`/repository/${encodeURIComponent(r.title)}`}
            className={clsx(
              "h-20 sm:h-24 flex flex-row justify-between items-center gap-1",
              "bg-zinc-100 dark:bg-zinc-900",
              "p-1 hover:scale-101",
              "first:rounded-t last:rounded-b"
          )}>
            {/* left */}
            <div className={clsx("h-full w-full flex flex-col justify-between")}>
              {/* 1st line */}
              <div className={clsx("flex flex-row items-center justify-between gap-3")}>
                {/* Title */}
                <span className="line-clamp-1">
                  {r.title}
                </span>

                {/* License */}
                <div className="flex flex-wrap gap-1">
                  <Chip variant="outlined" color="neutral">
                    {r.license}
                  </Chip>
                </div>
              </div>

              {/* 2nd line */}
              <div className={clsx(
                "h-auto",
                "text-sm line-clamp-1 sm:line-clamp-2",
                "text-gray-400 dark:text-gray-600")}>
                {/* Description */}
                {r.desc}
              </div>

              {/* 3rd */}
              <div className="flex flex-row items-center gap-2">
                {/* Avatar */}
                <img src={r.avatar} alt={r.author}
                  className="w-4 h-4 rounded-full"
                />
                {/* Author */}
                <span className="text-xs">{r.author}</span>
                {/* Languages */}
                {r.language.map((lang: Lang) => (
                  <Chip key={lang} variant="soft" >
                    {lang}
                  </Chip>
                ))}
              </div>

            </div>

            {/* right */}
            <div className={clsx("h-full aspect-[4/3]")}>
              {/* Cover */}
              <img src={r.cover}
                alt={r.title}
                className="object-cover w-full h-full rounded"
              />
            </div>
          </Link>
      )})}
      </div>
    </div>
  )
}