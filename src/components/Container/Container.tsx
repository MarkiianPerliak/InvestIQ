import type { ReactNode } from 'react';
import style from './Container.module.css';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={[style.container, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
