import React from 'react';
import Button from '../../components/Button';

const BeginPage = () => {
  return (
    <div className="beginPage">
      <div className="beginPage__image">
        <h1>DevIn</h1>
      </div>
      <div className="beginPage__auth">
        <div className="beginPage__auth__buttons">
          <Button value="Sign In" type="button" className="button__primary" />
          <Button value="Sign Up" type="button" className="button__primary" />
        </div>
      </div>
    </div>
  );
};

export default BeginPage;
