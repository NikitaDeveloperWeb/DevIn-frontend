import React from 'react';

interface ModalProps {
  children?: JSX.Element | Element | JSX.Element[] | Element[];
  className: 'modal__open' | 'modal__close';
}

function Modal({ children, className }: ModalProps) {
  return (
    <div className={className}>
      <div className="modal">
        <div className="modal__top"></div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
