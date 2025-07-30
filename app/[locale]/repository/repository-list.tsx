'use client'
import clsx from "clsx";
import { IRepository } from "@/app/types/repository"
import { useSearchBarStore } from '@/app/store/useSearch';
import NotFound from '@/app/[locale]/not-found';
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
      ? r.title.includes(searchContent) ||
        r.desc?.includes(searchContent) ||
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
  return (
    <Link key={r.created}
      href={DynamicPath(['repository', r.id.toString()])}
      className={clsx("h-24 litem")}
    >
      {/* left */}
      <div className={clsx("h-full w-full flex flex-col justify-between gap-1")}>
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
          "flex-1 text-sm line-clamp-2",
          "text-gray-700 dark:text-zinc-500",
        )}>
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
  )
}