import type { Metadata, Viewport } from "next";
import clsx from "clsx";
import "@/app/css/globals.css";
import meta from "@/data/zh/system/meta.json"
import ThemeProvider from "@/app/component/theme-provider";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import NotFound from "./not-found";
import { setRequestLocale } from "next-intl/server";




export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  appleWebApp: {
    title: meta.title,
  }
};

export const viewport: Viewport = {
  themeColor: 'dark',
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    NotFound();
  }

  // Enable static rendering
  // https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#static-rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`overflow-x-hidden`} >
        <NextIntlClientProvider>
          <ThemeProvider options={{ key: 'joy' }}>
            <main className={clsx("mx-auto min-h-screen",)}>
              {children}
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params#generate-params-from-the-top-down
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}