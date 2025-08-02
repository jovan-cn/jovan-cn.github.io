'use client'

import { Link } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';
import ReactIcons from "@/app/lib/icons";
import clsx from "clsx";
import { INavItem } from "@/app/types";
import { usePathname } from "@/i18n/navigation";


export default function NavItem({
  item
} : {
  item: INavItem
}) {
  const path = usePathname();
  const Icon = ReactIcons(item.icon);
  const t = useTranslations('navitem');


  const isNavHighlight = (path: string, to: string) => {
    return (
      to.length > 1 && path.startsWith(to) || 
      to.length === 1 && path === to
    );
  }

  return (
    <Link href={item.to} className={clsx(
      "flex flex-row items-center gap-3 px-2 h-full",
      "group relative transition-colors",
      isNavHighlight(path, item.to) && "text-teal-700 dark:text-teal-500",
    )}>
      <div className="icon">
        {Icon && <Icon />}
      </div>
      <span>{t(item.label)}</span>

      {/* underline */}
      <div className={clsx(
        "absolute bottom-0 left-0 h-0.5",
        "transition-all duration-300 origin-left",
        "w-0 scale-x-0",
        "group-hover:w-full group-hover:scale-x-100",
        "bg-teal-700 dark:bg-teal-500",
      )} />
    </Link>
  )
}