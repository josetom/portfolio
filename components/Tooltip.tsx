import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

export default function Tooltip({
  children,
  text,
}: {
  children: React.ReactElement;
  text: string;
}) {
  return <Tippy content={text}>{children}</Tippy>;
}
