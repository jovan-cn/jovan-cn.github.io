import classNames from "classnames";
import { TProduct } from "@/app/types";

export interface ProductProps {
  p: TProduct,
}
export const Product: React.FC<ProductProps> = ({p}) => {
  return (
    <a className={classNames(
      'flex flex-row gap-2 px-2 items-center',
      'rounded-lg min-w-80 h-20 hover:cursor-pointer',
      'bg-slate-100 dark:bg-slate-800',
      'hover:bg-slate-200 hover:dark:bg-slate-700',
      'text-slate-900 dark:text-slate-400',
      'shadow-md'
    )} href={p.host} target="_blank" rel="noreferrer">
      {p?.icon && <img className={"w-16"} src={p.icon} />}
      <div>
        <h2 className="font-bold text-base">{p.name}</h2>
        <p className="text-sm">{p.desc}</p>
      </div>
    </a>
  )
}
