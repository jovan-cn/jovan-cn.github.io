import Header from "@/app/component/header";
import RepositorySidebar from "./sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <RepositorySidebar />
      </Header>

      <section className="page">
        {children}

        <div className="w-48 hidden md:block sticky">
          <RepositorySidebar />
        </div>
      </section>
    </>
  );
}