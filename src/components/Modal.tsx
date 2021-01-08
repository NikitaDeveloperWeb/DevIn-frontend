import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import Button from './Button';

interface ModalProps {
  children?: JSX.Element | Element | JSX.Element[] | Element[];
  valueButton?: string;
  typeButton?: 'button' | 'submit' | 'reset' | undefined;
  formButton?: string;
  classNameButton?: 'button__primary';
}

function Modal({ children, valueButton, typeButton, formButton, classNameButton }: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const modalButtonRef = React.useRef<HTMLSpanElement>(null);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(modalRef.current)) {
      handleClose();
      console.log('Outside click');
    }
  };
  React.useEffect(() => {
    document.querySelector('.modal__open')?.addEventListener('click', handleOutsideClick);
  });
  return (
    <div>
      <span onClick={() => handleOpen()} className="modal__button" ref={modalButtonRef}>
        <Button
          value={valueButton}
          type={typeButton}
          className={classNameButton}
          form={formButton}
        />
      </span>
      <div className={open ? 'modal__open' : 'modal__close'}>
        <div className="modal" ref={modalRef}>
          <div className="modal__top">
            <ClearIcon onClick={() => handleClose()} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
