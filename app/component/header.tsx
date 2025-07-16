import clsx from "clsx";
import JAvatar from "./avatar";
import { Navbar } from "./navbar";
import NavButton from "./navbutton";
import ThemeToggle from "./theme-button";
import SearchBar from "./searchbar";
import { ReactNode } from "react";
import SidebarButton from "./sidebar";
import NextTopLoader from "nextjs-toploader";
import LanguageToggle from "./button/language";


export default function Header({
  children
} : {
  children?: ReactNode
}) {

  return (
    <header className={clsx(
      "sticky left-0 top-0 w-screen z-10",
      "flex items-center justify-center",
      "opacity-90 backdrop-blur-md",
      "border-b",
    )}>
      <div className={clsx(
        "h-12 px-4 lg:w-3/5 w-full",
        "flex flex-row items-center justify-between gap-8",
      )}>
        <div className="flex flex-row gap-2 items-center">
          <div className="hidden md:block"><JAvatar /></div>
          <div className="block md:hidden"><NavButton /></div>
          <SearchBar />
        </div>

        <Navbar />

        <div className="flex flex-row items-center gap-1">
          <ThemeToggle />
          <LanguageToggle />
          {children && <SidebarButton> {children} </SidebarButton> }
            
        </div>
      </div>
      <NextTopLoader
        showSpinner={false} 
        color="#0f766e"
        />
    </header>
  )
}