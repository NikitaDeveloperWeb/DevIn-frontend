//libs
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components

//pages
import BeginPage from './pages/BeginPage';
import Home from './pages/Home';
import MainPage from './pages/MainPage';

function App() {
  //app
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={BeginPage} />
        <Route exact path="/home">
          <MainPage components={<Home />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
