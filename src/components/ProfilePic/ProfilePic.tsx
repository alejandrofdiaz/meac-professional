import cn from 'classnames';
import * as React from 'react';

interface ProfilePicProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProfilePic = ({ alt, src, className }: ProfilePicProps) => (
  <img alt={alt} className={cn('profilePic', className)} src={src} />
);
