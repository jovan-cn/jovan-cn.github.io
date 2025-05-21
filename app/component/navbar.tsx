import { INavItem } from "@/app/types";
import entries from '@/data/system/navbar.json';
import clsx from "clsx";
import NavItem from "@/app/component/navitem";

export function Navbar() {
  return (
    <nav className="hidden md:flex flex-row items-center justify-start gap-4 h-full">
      {entries.map((entry: INavItem, i: number) => (
        <NavItem key={i} item={entry} />
      ))}
    </nav>
  )
}


export function MobileNavbar() {
  return (
    <nav className={clsx(
      "md:hidden flex flex-col justify-center items-center w-full gap-4",
    )}>
      {entries.map((entry: INavItem, i: number) => (
        <NavItem key={i} item={entry} />
      ))}
    </nav>
  )
}
