import React from 'react';

interface FieldProps {
  type: string;
  name: string;
  id?: string;
  placeholder: string;
  ref?: any;
  className: string;
  form?: string;
  accept?: string;
  icon?: JSX.Element;
  children?: string;
}

function Field({
  type,
  name,
  id,
  placeholder,
  ref,
  className,
  form,
  accept,
  icon,
  children,
}: FieldProps) {
  const [focus, setFocus] = React.useState(false);
  const fieldRef = React.useRef<HTMLDivElement>(null);

  const handleFocusField = (state: boolean) => {
    setFocus(!state);
  };

  //outside click listener
  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(fieldRef.current)) {
      setFocus(false);
    }
  };
  React.useEffect(() => {
    document.querySelector('.modal__open')?.addEventListener('click', handleOutsideClick);
  });

  return (
    <div
      className={!focus ? className : `${className}__focus`}
      onFocus={() => handleFocusField(focus)}
      ref={fieldRef}>
      <div className="icon">{icon}</div>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        ref={ref}
        form={form}
        accept={accept}
      />
      {children && <div className="accept">{children}</div>}
    </div>
  );
}

export default Field;
