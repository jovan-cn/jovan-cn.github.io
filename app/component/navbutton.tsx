'use client'
import { RiMenuFold2Fill } from "react-icons/ri";
import { useNavSidebarStore } from "../store/useNavButton"
import { Box, Drawer, IconButton } from "@mui/joy";
import { MobileNavbar } from "./navbar";

export default function NavButton() {
  const { showNavSidebar, setShowNavSidebar } = useNavSidebarStore();

  return (
    <>
    <IconButton onClick={() => setShowNavSidebar(true) }>
      <RiMenuFold2Fill />
    </IconButton>
    <Drawer
      sx={{
        '--Drawer-horizontalSize': '180px',
        width: '180px', // backup
      }}
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