import Link from "next/link";
import { Tooltip } from "@mui/joy";
import { OuterLink } from "@/app/types"
import ReactIcons from "@/app/lib/icons";

// FIX: Link is <a> wrapper, it cannot be nested in <a>.
export default function IconLinker({
  data,
} : {
  data: OuterLink,
}) {
  const Icon = data.icon ? ReactIcons(data.icon) : undefined;
  return (
    <Tooltip key={data.text} title={data.text} >
      <Link href={data.url} target="blank">
        {Icon 
          ? <Icon className="icon" />
          : <img src={data.icon} className="icon rounded-full" />}
      </Link>
    </Tooltip>
  )
}
