import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/home" className="logo">
      <h2>DevIn</h2>
    </Link>
  );
}

export default Logo;
