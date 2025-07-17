import Header from "@/app/component/header";
import { getAllArticles } from "@/app/lib/data";
import { IArticle } from "@/app/types/article";
import { getTranslations } from 'next-intl/server';
import clsx from "clsx";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <Sidebar />
      </Header>

      <section className="page">
        {children}

        <div className="hidden md:block sticky">
          <Sidebar />
        </div>
      </section>
    </>
  );
}

async function Sidebar() {
  const all: IArticle[] = await getAllArticles();
  const t = await getTranslations("article");

  return (
    <aside className={clsx(
      "w-40 flex flex-col justify-center gap-2",
      "circled p-2",
    )}>
      <h3>{t('sidebar.title')}</h3>
      <div>
        {t('sidebar.count', {count: all.length})}
      </div>
    </aside>
  )
}