import { getTODO } from "@/app/lib/data";
import Marked from "@/app/component/marked";


export default async function Todo() {
  const todo = await getTODO();
  return (
    <>
      <h2>TODO</h2>
      <Marked content={todo} />
    </>
  )
}