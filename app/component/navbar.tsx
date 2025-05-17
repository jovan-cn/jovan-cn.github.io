'use client'

import { INavItem } from "@/app/types/nav";
import Link from "next/link";
import entries from '@/data/system/navbar.json';
import { iconMap } from "@/app/lib/icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";


export function Navbar() {
  const path = usePathname();

  return (
    <nav className="hidden md:flex flex-row items-center justify-start gap-4 h-full">
      {entries.map((entry: INavItem, i: number) => {
        const Icon = iconMap[entry.icon];
          
        return <Link key={i} href={entry.to} className={clsx(
          "flex flex-row items-center gap-1 px-2 h-full",
          "relative transition-colors",
          path === entry.to && "text-green-500",
          "group", 
        )}>
          {Icon && <Icon className="text-lg" /> }
          <span>{entry.label}</span>

          {/* underline */}
          <div className={clsx(
            "absolute bottom-0 left-0 h-0.5 bg-green-500",
            "transition-all duration-300 origin-left",
            "w-0 scale-x-0",
            "group-hover:w-full group-hover:scale-x-100",
          )} />
        </Link>
      })}
    </nav>
  )
}


export function MobileNavbar() {
  const path = usePathname();

  return (
    <nav className={clsx(
      "md:hidden flex flex-col justify-center items-center w-full gap-4",
    )}>
      {entries.map((entry: INavItem, i: number) => {
        const Icon = iconMap[entry.icon];

        return <Link key={i} href={entry.to} className={clsx(
          "flex flex-row items-center gap-4 px-2 h-full",
          "relative hover:text-primary transition-colors",
          path === entry.to && "text-green-500",
          "group",
        )}>
          {Icon && <Icon className="text-lg" />}
          <span>{entry.label}</span>

          {/* underline */}
          <div className={clsx(
            "absolute bottom-0 left-0 h-0.5 bg-green-500",
            "transition-all duration-300 origin-left",
            "w-0 scale-x-0",
            "group-hover:w-full group-hover:scale-x-100",
          )} />
        </Link>
      })}
    </nav>
  )
}