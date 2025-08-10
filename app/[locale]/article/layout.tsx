import Header from "@/app/component/header";
import { getAllData } from "@/app/lib/data";
import { IArticle } from "@/app/types/article";
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server';
import clsx from "clsx";
import SearchBar from "@/app/component/searchbar";

export default async function Layout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string
  }>
}>) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Header>
        <Sidebar />
      </Header>

      <section className="page">
        <div className="flex-1">
          {children}
        </div>

        <div className="page-side">
          <Sidebar />
        </div>
      </section>
    </>
  );
}

async function Sidebar() {
  const locale = await getLocale();
  const all: IArticle[] = await getAllData("article", locale);
  const t = await getTranslations("article");

  return (
    <aside className={clsx(
      "w-full flex flex-col justify-center gap-2",
      "px-2",
    )}>
      <SearchBar />
      <div className="w-full circled p-2">
        <h3>{t('sidebar.title')}</h3>
        <div>
          {t('sidebar.count', {count: all.length})}
        </div>
      </div>
    </aside>
  )
}