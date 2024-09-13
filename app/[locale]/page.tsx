import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: {locale}
}: Readonly<{
  params: {locale: string};
}>) {
  unstable_setRequestLocale(locale)
  const t  = useTranslations()

  return (
    <section className="">
      {t('hello')} 
    </section>
  );
}