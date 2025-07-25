import { marked } from "marked";

export default function Marked({
  content
} : {
  content: string
}) {

  if (content.length === 0) return null;
  return <article dangerouslySetInnerHTML={{
    __html: marked.parse(content)
  }} className="marked space-y-2"></article>
}