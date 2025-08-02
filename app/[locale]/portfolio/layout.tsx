import Header from "@/app/component/header";
import { setRequestLocale } from "next-intl/server";

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
      <Header />

      <section className="page">
        {children}

      </section>
    </>
  );
}