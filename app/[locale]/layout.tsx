import "@/app/styles/globals.css"
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {routing} from '@/app/i18n/routing';
import classNames from "classnames";



export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages();

  return (
    <html  lang={locale}>
      <body className={`
        bg-white dark:bg-slate-900
        text-slate-800 dark:text-slate-400
        flex flex-col justify-start items-center 
        min-h-screen
      `}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className={classNames(
            "flex justify-center items-center",
            "lg:w-3/5 w-full p-4 mb-auto",
          )} >
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: { locale }
}:Readonly<{
  params: { locale: string}
}>) {
  const t = await getTranslations({locale});
 
  return {
    title: t('title')
  };
}