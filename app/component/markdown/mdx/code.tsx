'use client';

import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark, googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copy from 'copy-to-clipboard';
import clsx from 'clsx';
import { useColorScheme } from '@mui/joy';

export const CopyCodeBlock = ({ children, className }) => {
  const { mode } = useColorScheme();
  const [copied, setCopied] = useState(false);
  const language = className?.replace(/language-/, '') || 'text';

  const handleCopy = (code: string) => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    copy(code);
  };

  return (
    <div className='relative'>
      <button className={clsx('absolute top-px right-px px-0.5 rounded',
        'border border-slate-300 dark:border-slate-600 ',
        'text-[10px] text-slate-300 dark:text-slate-600 ',
        'hover:cursor-pointer hover:border-slate-500 hover:text-slate-500'
      )}
        onClick={() => handleCopy(children)}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      
      <SyntaxHighlighter
        language={language}
        style={mode === 'dark' ? solarizedDark : googlecode}
        customStyle={{
          borderRadius: '4px',
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
};