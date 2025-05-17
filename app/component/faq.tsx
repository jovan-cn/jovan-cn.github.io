'use client'
import Marked from "@/app/lib/markd/Marked";
import { IFAQ } from "@/app/types/faq";
import { IconButton, List, ListItem } from "@mui/joy"
import { listItemButtonClasses } from '@mui/joy/ListItemButton';
import clsx from "clsx";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import faqs from '@/data/home/faq.json';

export default function FAQ() {
  return (
    <List
      size="sm"
      className={'md:min-w-[480] w-full'}
      sx={(theme) => ({
        // Gatsby colors
        '--joy-palette-primary-plainColor': '#8a4baf',
        '--joy-palette-neutral-plainHoverBg': 'transparent',
        '--joy-palette-neutral-plainActiveBg': 'transparent',
        '--joy-palette-primary-plainHoverBg': 'transparent',
        '--joy-palette-primary-plainActiveBg': 'transparent',
        [theme.getColorSchemeSelector('dark')]: {
          '--joy-palette-text-secondary': '#635e69',
          '--joy-palette-primary-plainColor': '#d48cff',
        },
        '--List-insetStart': '32px',
        '--ListItem-paddingY': '0px',
        '--ListItem-paddingRight': '16px',
        // '--ListItem-paddingLeft': '21px',
        '--ListItem-startActionWidth': '0px',
        '--ListItem-startActionTranslateX': '-50%',
        [`& .${listItemButtonClasses.root}`]: {
          borderLeftColor: 'divider',
        },
        [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
          borderLeftColor: 'currentColor',
        },
        '& [class*="startAction"]': {
          color: 'var(--joy-palette-text-tertiary)',
        },
      })}>
      {faqs.map((d: IFAQ, i: number) => (
        <QA key={i} data={d} />
      ))}
    </List>
  )
}

function QA({data} : {data: IFAQ}) {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <ListItem
      nested
      sx={{ my: 1, padding: 0 }}
      startAction={
        <IconButton
          variant="plain"
          size="sm"
          color="neutral"
          onClick={() => setOpen((bool) => !bool)}
        >
          <MdArrowForwardIos
            className={clsx(
              'text-slate-300 dark:text-slate-700' ,
              open && 'rotate-90',
            )}
          />
        </IconButton>
      }
    >
      <ListItem component="div" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: "start",
      }}>
        <h3 className="px-4 h-8 flex items-center"> {data.Q} </h3>
        {open && <div className="border-l border-slate-300 dark:border-slate-700 px-6 py-2">
          <Marked content={data.A} />
        </div>}
      </ListItem>
    </ListItem>
  )
}