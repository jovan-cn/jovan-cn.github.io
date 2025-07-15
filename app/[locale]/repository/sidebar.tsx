import clsx from "clsx";
import { getAllRepository } from "@/app/lib/data"
import { getTranslations } from 'next-intl/server';


export default async function RepositorySidebar() {
  const repos = await getAllRepository();
  const t = await getTranslations('repository');

  /* FIX: chinese & english & number baseline are different */
  return (
    <aside className={clsx(
      "w-40 flex flex-col justify-center gap-2",
      "circled p-2",
    )}>
      <h3>{t('sidebar.title')}</h3>
      <div>
        {t('sidebar.count', {count: repos.length})}
      </div>
    </aside>
  )
}