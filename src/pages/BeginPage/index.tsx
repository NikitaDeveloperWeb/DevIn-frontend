import React from 'react';
import Modal from '../../components/Modal';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const BeginPage = () => {
  return (
    <div className="beginPage">
      <div className="beginPage__image">
        <h1>DevIn</h1>
      </div>
      <div className="beginPage__auth">
        <div className="beginPage__auth__buttons">
          <Modal
            children={LoginForm()}
            valueButton="Sign In"
            typeButton="button"
            classNameButton="button__primary"
          />
          <Modal
            children={RegisterForm()}
            valueButton="Sign Up"
            typeButton="button"
            classNameButton="button__primary"
          />
        </div>
      </div>
    </div>
  );
};
export default BeginPage;
