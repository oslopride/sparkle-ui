import React, { FC, ButtonHTMLAttributes } from 'react';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return <button data-testid="button" {...props} />;
};

export default Button;
