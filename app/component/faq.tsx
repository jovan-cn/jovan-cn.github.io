'use client'
import Marked from "@/app/component/marked";
import { IFAQ } from "@/app/types/faq";
import { IconButton, List, ListItem } from "@mui/joy"
import clsx from "clsx";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import faqs from '@/data/home/faq.json';

export default function FAQ() {
  return (
    <List
      size="sm"
      className={'md:min-w-[480] w-full'}
      sx={() => ({
        '--ListItem-paddingY': '0px',
        '--ListItem-startActionTranslateX': '-50%',
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
          size="sm"
          onClick={() => setOpen((bool) => !bool)}
        >
          <MdArrowForwardIos
            className={clsx(
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
        {open && <div className="border-l px-6 py-2">
          <Marked content={data.A} />
        </div>}
      </ListItem>
    </ListItem>
  )
}