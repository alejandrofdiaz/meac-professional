import cn from 'classnames';
import { PropsOf } from 'lib';
import * as React from 'react';

export const Main: React.FC<PropsOf<'main'>> = ({
  children,
  className,
  ...restProps
}) => (
  <main className={cn('main', className)} {...restProps}>
    {children}
  </main>
);
