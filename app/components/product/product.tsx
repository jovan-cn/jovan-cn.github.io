'use client'
import classNames from "classnames";
import { TProduct } from "@/app/types";

export interface ProductProps {
  p: TProduct,
}
export const Product: React.FC<ProductProps> = ({p}) => {
  const goto = (href: string) => {
    if (href !== "") window.open(href)
  }

  return (
    <div className={classNames(
      'flex flex-row gap-2 items-center',
      'rounded min-w-80 h-20 hover:cursor-pointer',
      'bg-slate-100 dark:bg-slate-800',
      'hover:bg-slate-300 hover:dark:bg-slate-700',
      'text-slate-900 dark:text-slate-400',
    )} onClick={() => goto(p.host)}>
      <div>
        <img src={p.icon} />
      </div>
      <div>
        <h2 className="font-bold text-base">{p.name}</h2>
        <p className="text-sm">{p.desc}</p>
      </div>
    </div>

  )
}
