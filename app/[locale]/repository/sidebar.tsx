import clsx from "clsx";
import { getAllData } from "@/app/lib/data"
import { getLocale, getTranslations } from 'next-intl/server';
import SearchBar from "@/app/component/searchbar";


export default async function RepositorySidebar() {
  const locale = await getLocale();
  const repos = await getAllData("repository", locale);
  const t = await getTranslations('repository');

  /* FIX: chinese & english & number baseline are different */
  return (
    <aside className={clsx(
      "w-full flex flex-col justify-center gap-2",
      "px-2",
    )}>
      <SearchBar />
      <div className="w-full circled p-2">
        <h3>{t('sidebar.title')}</h3>
        <div>
          {t('sidebar.count', {count: repos.length})}
        </div>
      </div>
    </aside>
  )
}