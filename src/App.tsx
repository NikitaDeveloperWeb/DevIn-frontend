//libs
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//components

//pages
import BeginPage from './pages/BeginPage';

function App() {
  //app
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={BeginPage} />
      </Switch>
    </div>
  );
}

export default App;
