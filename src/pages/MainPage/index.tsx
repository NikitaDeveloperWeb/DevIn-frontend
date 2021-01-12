import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import NavigationAside from '../../components/NavigationAside';
import Home from '../Home';
function MainPage() {
  return (
    <div className="main">
      <Navigation />
      <div className="main__content">
        <NavigationAside />
        <main>
          <Switch>
            <Route exact path="/main/home" component={Home} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
