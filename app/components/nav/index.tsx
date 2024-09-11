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


const Navs: React.FC = () => {
  const t = useTranslations('navs')
  const pathname = usePathname()

  return (
    <nav className={"block flex flex-row gap-3"}>
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

export default Navs;