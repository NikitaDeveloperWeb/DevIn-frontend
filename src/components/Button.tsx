import React from 'react';

interface ButtonProps {
  value: string | undefined;
  type: 'button' | 'submit' | 'reset' | undefined;
  form?: string;
  className?: 'button__primary' | 'button__outline';
}

const Button = ({ value, type, form, className }: ButtonProps) => {
  return (
    <button type={type} form={form} className={className}>
      {value}
    </button>
  );
};

export default Button;
