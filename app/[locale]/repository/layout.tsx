import { setRequestLocale } from "next-intl/server";
import Header from "@/app/component/header";
import RepositorySidebar from "./sidebar";

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
        <RepositorySidebar />
      </Header>

      <section className="page">
        <div className="flex-1">
          {children}
        </div>

        <div className="page-side">
          <RepositorySidebar />
        </div>
      </section>
    </>
  );
}