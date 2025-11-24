'use client';

import React from 'react';
import styles from './Button3D.module.scss';

const Button3D = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`${styles.button3D} ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button3D;
