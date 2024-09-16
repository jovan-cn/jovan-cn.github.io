import { useTranslations } from "next-intl";
import Navbar from "./navbar";
import I18nButton from "./button/i18n";
import ThemeButton from "./button/theme";
import classNames from "classnames";



const Header: React.FC = () => {
  const t = useTranslations()

  return (
    <header className={classNames(
      'h-12 flex flex-row justify-between items-center',
      'whitespace-nowrap',
      'w-full sm:w-3/5 px-4 sm:px-0',
      'text-sm',
    )}>
      <div className="font-bold">
        {t('title')}
      </div>

      <Navbar />

      <div className="flex flex-row gap-2">
        <I18nButton />
        <ThemeButton />
      </div>

    </header>
  )
}

export default Header;