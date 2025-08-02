import { Link, Tooltip } from "@mui/joy";
import { OuterLink } from "@/app/types"
import ReactIcons from "@/app/lib/icons";

export default function IconLinker({
  data,
} : {
  data: OuterLink,
}) {
  const Icon = data.icon ? ReactIcons(data.icon) : undefined;
  return (
    <Tooltip key={data.text} title={data.text} >
      <Link href={data.url} target="_blank">
          {Icon 
            ? <div className="icon rounded-full">
                <Icon />
              </div>
            : <img className="icon rounded-full"
                src={data.icon}
                alt={"icon"} />}
      </Link>
    </Tooltip>
  )
}
