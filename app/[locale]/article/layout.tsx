import Header from "@/app/component/header";
import { getAllArticles } from "@/app/lib/data";
import { IArticle } from "@/app/types/article";
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
  return (
    <aside className={clsx(
      "w-40 flex flex-col justify-center gap-2",
      "circled p-2",
    )}>
      <h3>统计</h3>
      <div>
        共<span className="text-2xl text-red-500 align-[-2px]">{all.length}</span> 篇文章
      </div>
    </aside>
  )
}