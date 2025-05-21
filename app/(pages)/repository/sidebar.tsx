import clsx from "clsx";
import { getAllRepository } from "@/app/lib/data"

export default async function RepositorySidebar() {
  const repos = await getAllRepository();

  /* FIX: chinese & english & number baseline are different */
  return (
    <aside className={clsx(
      "w-40 flex flex-col justify-center gap-2",
      "circled p-2",
    )}>
      <h3>统计信息</h3>
      <div>
        共 <span className="text-2xl text-red-500 align-[-2px]">{repos.length}</span> 个仓库
      </div>
    </aside>
  )
}