import { setRequestLocale } from "next-intl/server";
import Header from "@/app/component/header";

export default function Layout({
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