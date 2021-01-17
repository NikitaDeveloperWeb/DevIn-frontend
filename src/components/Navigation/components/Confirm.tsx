import React from 'react';
import Button from '../../Button';

function Confirm() {
  return (
    <div className="confirm">
      <h2>Are you sure?</h2>
      <div className="confirm__buttons">
        <Button type="button" value="Yes" className="button__primary" />
        <Button type="button" value="No" className="button__primary" />
      </div>
    </div>
  );
}

export default Confirm;
