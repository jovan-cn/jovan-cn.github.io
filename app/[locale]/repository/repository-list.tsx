'use client'
import clsx from "clsx";
import { IRepository } from "@/app/types/repository"
import { useSearchBarStore } from '@/app/store/useSearch';
import NotFound from '@/app/not-found';
import { Chip } from '@mui/joy';
import Link from 'next/link';
import { Lang } from "@/app/types";
import { DynamicPath } from "@/app/lib";


export default function RepositoryList({
  list
} : {
  list: IRepository[]
}) {
  const { searchContent } = useSearchBarStore();

  const repositories = list.filter(r => (
    searchContent
      ? r.meta.title.includes(searchContent) ||
        r.meta.desc?.includes(searchContent) ||
        r.content?.includes(searchContent)
      : true
  ));

  if (repositories.length === 0) {
    return NotFound();
  }

  return (
    <div className={clsx("list")}>
      {repositories.map((r: IRepository, i: number) => (
        <RepositoryEntry key={i} r={r} />
      ))}
    </div>
  )
}

function RepositoryEntry({ r } : {r : IRepository}) {
  console.log(r);
  return (
    <Link key={r.meta.created}
      href={DynamicPath(['repository', r.meta.title])}
      className={clsx("h-24 litem")}
    >
      {/* left */}
      <div className={clsx("h-full w-full flex flex-col justify-between gap-1")}>
        {/* 1st line */}
        <div className={clsx("flex flex-row items-center justify-between gap-3")}>
          {/* Title */}
          <span className="line-clamp-1">
            {r.meta.title}
          </span>

          {/* License */}
          <div className="flex flex-wrap gap-1">
            <Chip variant="outlined" color="neutral">
              {r.meta.license}
            </Chip>
          </div>
        </div>

        {/* 2nd line */}
        <div className={clsx(
          "flex-1 text-sm line-clamp-2",
          "text-gray-700 dark:text-zinc-500",
        )}>
          {/* Description */}
          {r.meta.desc}
        </div>

        {/* 3rd */}
        <div className="flex flex-row items-center gap-2">
          {/* Avatar */}
          <img src={r.meta.avatar} alt={r.meta.author}
            className="w-4 h-4 rounded-full"
          />
          {/* Author */}
          <span className="text-xs">{r.meta.author}</span>
          {/* Languages */}
          {r.meta.language.map((lang: Lang) => (
            <Chip key={lang} variant="soft" >
              {lang}
            </Chip>
          ))}
        </div>

      </div>

      {/* right */}
      <div className={clsx("h-full aspect-[4/3]")}>
        {/* Cover */}
        <img src={r.meta.cover}
          alt={r.meta.title}
          className="object-cover w-full h-full rounded"
        />
      </div>
    </Link>
  )
}