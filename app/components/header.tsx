import { useTranslations } from "next-intl";
import Navs from "./nav";
import I18nButton from "./button/i18n";
import ThemeButton from "./button/theme";



const Header: React.FC = () => {
  const t = useTranslations()

  return (
    <header className="h-12 flex flex-row justify-between items-center 
      lg:w-2/5 sm:w-3/5 px-4 sm:px-0
      text-sm
    ">
      <div className="font-bold">
        {t('title')}
      </div>

      <Navs />

      <div className="flex flex-row gap-2">
        <I18nButton />
        <ThemeButton />
      </div>

    </header>
  )
}

export default Header;