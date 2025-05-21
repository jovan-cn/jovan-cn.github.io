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
        <Icon className="icon" />
      </IconButton>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        anchor="right" 
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
        }}>
          {children}
        </Box>
      </Drawer>
    </div>
  )
}
