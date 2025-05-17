import clsx from "clsx";
import JAvatar from "./avatar";
import { Navbar } from "./navbar";
import NavButton from "./navbutton";
import ThemeToggle from "./theme-button";


export default function Header() {

  return (
    <header className={clsx(
      "sticky left-0 top-0 w-screen z-10",
      "flex items-center justify-center",
      "opacity-90",
      "border-b-1 border-gray-200 dark:border-gray-800",
      "backdrop-blur-sm",
    )}>
      <div className={clsx(
        "h-12 px-4 lg:w-3/5 w-full",
        "flex flex-row items-center justify-between gap-8",
      )}>
        <div className="flex flex-row gap-2 items-center">
          <div className="hidden md:block"><JAvatar /></div>
          <div className="block md:hidden"><NavButton /></div>
          <h3>Jovan</h3>
        </div>

        <Navbar />

        <ThemeToggle />
      </div>
    </header>
  )
}