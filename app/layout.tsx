import "@/app/styles/globals.css"


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
      <body className={`
        bg-white dark:bg-slate-900
        text-slate-800 dark:text-slate-400
        flex flex-col justify-start items-center 
        min-h-screen
      `}>
        {children}
      </body>
    </html>
  );
}
