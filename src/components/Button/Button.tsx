import cn from 'classnames';
import { PropsOf } from 'lib';
import * as React from 'react';

export const Button = ({ children, className, ...props }: PropsOf<'a'>) => (
  <a className={cn('button', className)} {...props}>
    {children}
  </a>
);
