import React from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

//page title
document.title = 'DevIn | Authorization';
let ModalChildren: JSX.Element;

const BeginPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const modalOpenHandler = (state: boolean, modal: JSX.Element) => {
    setModalOpen(!state);
    ModalChildren = modal;
  };

  return (
    <div className="beginPage">
      <div className="beginPage__image">
        <h1>DevIn</h1>
      </div>
      <div className="beginPage__auth">
        <div className="beginPage__auth__buttons">
          <span onClick={() => modalOpenHandler(modalOpen, <LoginForm />)}>
            <Button value="Sign In" type="button" className="button__primary" />
          </span>
          <span onClick={() => modalOpenHandler(modalOpen, <RegisterForm />)}>
            <Button value="Sign Up" type="button" className="button__primary" />
          </span>
        </div>
      </div>
      <Modal className={modalOpen ? 'modal__open' : 'modal__close'} children={ModalChildren} />
    </div>
  );
};

export default BeginPage;
