import { getTODO } from "@/app/lib/data";
import Mdx from "./markdown/mdx/mdx";


export default async function Todo() {
  const todo = await getTODO();
  return (
    <>
      <h2>TODO</h2>
      <Mdx content={todo} />
    </>
  )
}