import clsx from "clsx";
import BackButton from "./button/back";


export default function Title({
  title
} : {
  title: string
}) {
  return (
    <header className={clsx(
      "flex flex-row items-center justify-between",
      "w-full circled",
    )}>
      <BackButton />
      <h3>{title}</h3>
      <div></div>
    </header>
  )
}