'use client'

import { Box, Drawer, IconButton } from "@mui/joy";
import { ReactNode, useState } from "react";
import ReactIcons from "@/app/lib/icons";


export default function SidebarButton({
  icon,
  children,
}: {
  icon?: string,
  children?: ReactNode,
}) {
  const [ open, setOpen ] = useState<boolean>(false);
  const Icon = ReactIcons(icon || "IoMenuSharp");

  return (
    <div className="md:hidden">
      <IconButton onClick={() => setOpen(!open)}>
        <Icon />
      </IconButton>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        anchor="right" 
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '4px',
          paddingRight: '4px',
          paddingTop: '8px',
          width: '100%',
        }}>
          {children}
        </Box>
      </Drawer>
    </div>
  )
}
