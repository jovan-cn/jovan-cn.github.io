'use client'
import { RiMenuFold2Fill } from "react-icons/ri";
import { useNavSidebarStore } from "@/app/store/useNavButton"
import { Box, Drawer, IconButton } from "@mui/joy";
import { MobileNavbar } from "@/app/component/navbar";

export default function MenuButton() {
  const { showNavSidebar, setShowNavSidebar } = useNavSidebarStore();

  return (
    <>
    <IconButton onClick={() => setShowNavSidebar(true) }>
      <RiMenuFold2Fill />
    </IconButton>
    <Drawer
      open={showNavSidebar}
      onClose={() => setShowNavSidebar(false)}
    >
      <Box sx={{
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        mt: 1,
        mr: 2,
      }}>
        <MobileNavbar /> 
      </Box>
    </Drawer>
    </>
  )
}