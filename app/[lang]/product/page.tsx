import data from "@/app/data/product.json"
import { TProduct } from "@/app/types";
import classNames from "classnames";


const Product: React.FC = () => {

  return (
    <section className="flex flex-col items-center p-8">
      <div className="grid grid-cols-2">
      {data.common.map((p: TProduct, i: number) => {
        return (
          <div key={i} className={classNames(
            "flex flex-row gap-2 items-center",
            "rounded w-80 h-20",
            "bg-slate-200 dark:bg-slate-800",
            "hover:bg-slate-300 hover:dark:bg-slate-700",
            "text-slate-900 dark:text-slate-400",
          )}>
            <div></div>
            <div>
              <h2 className="font-bold text-base">{p.name}</h2>
              <p className="text-sm">{p.desc}</p>
            </div>
          </div>
        )
      })}
      </div>
    </section>
  )
}

export default Product;

