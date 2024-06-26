import React from 'react';
import Avatar from '@mui/material/Avatar';

const CustomAvatar = ({
  alt = '',
  src,
  srcSet,
  sizes,
  children,
  className,
  style,
  onClick,
  onMouseOver
}) => {
  return (
    <Avatar
      alt={alt}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      className={className}
      style={style}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {children}
    </Avatar>
  );
};

export default CustomAvatar;
