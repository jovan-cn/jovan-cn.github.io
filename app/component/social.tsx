import social from "@/data/zh/home/social.json"
import { ISocial } from "@/app/types"
import ReactIcons from "@/app/lib/icons";
import { Link, Tooltip } from "@mui/joy";


export default function Social() {

  return (
    <div className="flex items-center justify-center gap-8">
      {social.map((s: ISocial, i: number) => {
        if (s.icon === undefined) return null;

        const Icon = ReactIcons(s.icon);
        return (
          <Tooltip key={s.label} title={s.label}>
            <Link href={s.value} target="_blank">
              <Icon className="icon" />
            </Link>
          </Tooltip>
        )
      })}
    </div>
  )
}