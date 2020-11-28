import cn from 'classnames';
import { PropsOf } from 'lib';
import * as React from 'react';

interface IconProps extends PropsOf<'i'> {
  icon: string;
}

export const Icon = ({ children, className, icon, ...props }: IconProps) => (
  <i className={cn('fa', 'icon', className, `fa-${icon}`)} {...props}>
    {children}
  </i>
);
