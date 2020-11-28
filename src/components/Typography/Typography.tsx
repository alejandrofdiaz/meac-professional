import cn from 'classnames';
import { PropsOf } from 'lib';
import * as React from 'react';

export const Typography = () => null;

export const Title = ({ children, className, ...props }: PropsOf<'h1'>) => (
  <h1 className={cn('title', className)} {...props}>
    {children}
  </h1>
);

export const Subtitle = ({ children, className, ...props }: PropsOf<'h2'>) => (
  <h2 className={cn('subtitle', className)} {...props}>
    {children}
  </h2>
);

export const SectionTitle = ({
  children,
  className,
  ...props
}: PropsOf<'h3'>) => (
  <h3 className={cn('sectionTitle', className)} {...props}>
    {children}
  </h3>
);

export const Body = ({ children, className, ...props }: PropsOf<'p'>) => (
  <p className={cn('body', className)} {...props}>
    {children}
  </p>
);

export const Link = ({ children, className, ...props }: PropsOf<'a'>) => (
  <a className={cn('link', className)} {...props}>
    {children}
  </a>
);

export const Bold = ({ children, className, ...props }: PropsOf<'b'>) => (
  <b className={cn('bold', className)} {...props}>
    {children}
  </b>
);

export const Quote = ({ children, className, ...props }: PropsOf<'q'>) => (
  <q className={cn('quote', className)} {...props}>
    {children}
  </q>
);

export const Caption = ({
  children,
  className,
  ...props
}: PropsOf<'caption'>) => (
  <caption className={cn('caption', className)} {...props}>
    {children}
  </caption>
);
