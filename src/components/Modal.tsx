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

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <span onClick={() => handleOpen()} className="modal__button">
        <Button
          value={valueButton}
          type={typeButton}
          className={classNameButton}
          form={formButton}
        />
      </span>
      <div className={open ? 'modal__open' : 'modal__close'}>
        <div className="modal">
          <div className="modal__top">
            <ClearIcon onClick={() => handleClose()} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
