import data from "@/data/product.json"
import { TProduct } from "@/app/types";
import { Product } from "@/app/components/product/product";
import { unstable_setRequestLocale } from "next-intl/server";


export default function ProductPage({
  params: {locale}
}: Readonly<{
  params: {locale: string};
}>) {
  unstable_setRequestLocale(locale)
  return (
    <section className="flex flex-col items-center p-1 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {data.common.map((p: TProduct, i: number) => {
          return <Product key={i} p={p} />
        })}
      </div>
    </section>
  )
}

