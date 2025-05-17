import { marked } from "marked";
import "@/app/css/marked.css";

export default function Marked({
  content
} : {
  content: string
}) {
  if (content.length === 0) return <></>
  return <div dangerouslySetInnerHTML={{__html: marked.parse( content) }} 
    className="marked"
    ></div>
}