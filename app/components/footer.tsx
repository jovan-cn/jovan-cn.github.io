import classNames from "classnames";


const Footer: React.FC = () => {
  return (
    <footer className={classNames(
      "text-slate-300 dark:text-slate-700 text-center text-sm h-12 p-2"
    )}>
      Copyright @2024 Jovan. All rights reserved.
    </footer>
  )
}

export default Footer;