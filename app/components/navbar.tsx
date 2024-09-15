'use client'
import { useTranslations } from "next-intl"
import { Link, usePathname } from '@/app/i18n/routing';
import classNames from "classnames";


const navs: string[] = [
  "/",
  "/product",
  "/sponsor",
  "/about",
]


const Navbar: React.FC = () => {
  const t = useTranslations('navs')
  const pathname = usePathname()

  return (
    <nav className={classNames(
      'flex flex-row justify-end items-center gap-3',
      'w-48 sm:w-4/5 overflow-x-scroll no-scrollbar'
    ) }>
      {navs.map((n: string, i: number) => {
        return (
          <Link key={i} href={n} className={classNames(
            "text-sm",
            { "font-bold": pathname.endsWith(n) },
          )}>
            {t(n)}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar;