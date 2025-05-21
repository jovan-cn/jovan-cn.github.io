import Header from "@/app/component/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <section className="page">
        {children}

      </section>
    </>
  );
}