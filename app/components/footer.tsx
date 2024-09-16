import classNames from "classnames";
import Contact from "./contact";



const Footer: React.FC = () => {
  return (
    <footer className={classNames(
      "flex flex-col-reverse sm:flex-row justify-between items-center gap-1",
      "w-full sm:w-3/5 px-4 sm:px-0",
      "text-slate-300 dark:text-slate-700 text-center text-sm h-12"
    )}>
      Copyright @2024 Jovan. All rights reserved.
      <Contact />
    </footer>
  )
}

export default Footer;