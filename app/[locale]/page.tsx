import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Clock from "@/app/components/clock";

export default function Home({
  params: {locale}
}: Readonly<{
  params: {locale: string};
}>) {
  unstable_setRequestLocale(locale)
  const t  = useTranslations()

  return (
    <section className="min-h-96 flex flex-col p-4 justify-between items-center">
      <div className="w-52 h-52">
        <Clock />
      </div>

      <div className="text-center w-full">
        {t('hello')} 
      </div>
    </section>
  );
}