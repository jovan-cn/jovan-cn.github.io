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
      "md:hidden flex flex-col justify-center items-start w-full gap-2",
    )}>
      {entries.map((entry: INavItem, i: number) => (
        <div key={i} className="h-8 w-full my-2">
          <NavItem item={entry} />
        </div>
      ))}
    </nav>
  )
}
