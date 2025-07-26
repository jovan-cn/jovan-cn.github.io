import { Checkbox, Link } from '@mui/joy';
import clsx from 'clsx';
import type { MDXComponents } from 'mdx/types'
import React from 'react';
import { CopyCodeBlock } from '@/app/component/markdown/mdx/code';
import ZoomImg from './app/component/markdown/mdx/image';
 
const CustomLi = ({ children, className, ...props }) => {
  const childrenArray = React.Children.toArray(children);

  const findCheckboxAndContent = (nodes) => {
    if (nodes.length > 0) {
      const node = nodes[0];
      if (React.isValidElement(node) && node.props?.type === "checkbox") {
        const isChecked = node.props?.checked;
        const remainingNodes = nodes.slice(2);
        return { isChecked, remainingNodes };
      }
    }
    return null;
  };

  const checkboxInfo = findCheckboxAndContent(childrenArray);
  if (checkboxInfo) {
    const { isChecked, remainingNodes } = checkboxInfo;
    return (
      <li {...props} className={clsx(className, "list-none")}>
        <Checkbox disabled variant={'outlined'} checked={isChecked} label={remainingNodes[0]} />
        {remainingNodes.length > 1 && remainingNodes.slice(1)}
      </li>
    );
  }

  return <li className={className} {...props}>{children}</li>;
};

export function useMDXComponents(
  components: MDXComponents
) : MDXComponents {

  return {
    h1: ({ children }) => (
      <h1 className='leading-10'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='leading-10'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='leading-8'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='leading-8'>{children}</h4>
    ),
    p: ({ children }) => (
      <p className='leading-6'>{children}</p>
    ),
    ul: ({ children }) => (
      <ul className='list-disc ps-6'>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className='list-decimal ps-6'>{children}</ol>
    ),
    li: CustomLi,
    a: ({children, href}) => (
      <Link href={href} target="_blank" >
        {children}
      </Link>
    ),
    img: (props) => (
      <ZoomImg children={props.src} />
    ),
    pre: (props) => {
      if (props.children?.type === 'code') {
        return <CopyCodeBlock {...props.children.props} />;
      }
      return <pre {...props} />;
    },
    hr:  () => (
      <hr className='my-4' />
    ),

    ...components,
  }
}