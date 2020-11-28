import * as React from 'react';

export type PropsOf<
  ElementType extends
    | keyof JSX.IntrinsicElements
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<
  ElementType,
  React.ComponentPropsWithRef<ElementType>
>;
