//libs
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//components
import App from './App';
//style
import './scss/app.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
