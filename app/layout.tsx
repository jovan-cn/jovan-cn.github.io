import type { Metadata, Viewport } from "next";
import clsx from "clsx";
import "@/app/css/globals.css";
import meta from "@/data/system/meta.json"
import ThemeProvider from "@/app/component/theme-provider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={meta.lang}>
      <body className={`overflow-x-hidden`} >
        <ThemeProvider options={{ key: 'joy' }}>
          <main className={clsx("mx-auto min-h-screen",)}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}