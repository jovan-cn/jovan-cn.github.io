
export default function JAvatar() {
  const github_avatar =  "https://avatars.githubusercontent.com/u/181050559?v=4&size=40"
  return (
    <div className="group">
      <img
        src={github_avatar}
        alt="旋转图片"
        className="w-8 h-8 object-cover rounded-full 
           group-hover:animate-[spin_1s_linear_infinite]"
      />
    </div>
  )
}

