import meta from "@/data/system/meta.json"
import { Avatar } from "@mui/joy"

export default async function JAvatar() {
  return (
    <div className="group">
      <Avatar
        variant="outlined"
        src={meta.avatar}
        alt="logo"
        className="w-8 h-8 object-cover rounded-full 
           group-hover:animate-[spin-reverse_1s_linear_infinite] "
      />
    </div>
  )
}

