'use client'
import { IconButton } from "@mui/joy";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

export default function BackButton() {
  const router = useRouter();
  
  return (
    <IconButton onClick={() => router.back()}>
      <MdArrowBack />
    </IconButton>
  )
}