import React from 'react';

interface FieldProps {
  type: string;
  name: string;
  id?: string;
  placeholder: string;
  ref: any;
  className: string;
  form?: string;
  accept?: string;
}

function Field({ type, name, id, placeholder, ref, className, form, accept }: FieldProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      ref={ref}
      className={className}
      form={form}
      accept={accept}
    />
  );
}

export default Field;
