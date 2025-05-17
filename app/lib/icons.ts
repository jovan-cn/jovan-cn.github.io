import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io5';

export const iconMap = {
  ...MdIcons,
  ...AiIcons,
  ...GiIcons,
  ...IoIcons,
} as Record<string, React.ComponentType>;