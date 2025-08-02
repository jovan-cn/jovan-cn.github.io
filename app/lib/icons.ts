import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io5';
import * as TfiIcons from "react-icons/tfi";
import * as VscIcons from "react-icons/vsc";
import { ComponentType } from 'react';


const iconMap = {
  ...MdIcons,
  ...AiIcons,
  ...GiIcons,
  ...IoIcons,
  ...TfiIcons,
  ...VscIcons,
} as Record<string, React.ComponentType>;

export default function ReactIcons(name: string): ComponentType {
  return iconMap[name];
}