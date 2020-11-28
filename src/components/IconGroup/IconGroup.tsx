import cn from 'classnames';
import { PropsOf } from 'lib';
import * as React from 'react';

export const IconGroup = ({ children, className, ...props }: PropsOf<'ul'>) => (
  <ul className={cn('iconGroup', className)} {...props}>
    {children}
  </ul>
);

IconGroup.ListItem = ({ children, className, ...props }: PropsOf<'li'>) => (
  <li className={cn('iconGroup__listItem', className)} {...props}>
    {children}
  </li>
);
