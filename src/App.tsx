//libs
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components

//pages
import BeginPage from './pages/BeginPage';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import Messager from './pages/Messager';
import News from './pages/News';
import People from './pages/People';
import Photos from './pages/Photos';
import Publics from './pages/Publics';
import Store from './pages/Store';
import Video from './pages/Video';
import Notification from './pages/Notification';
import Bookmarks from './pages/Bookmarks';
import Services from './pages/Services';
function App() {
  //app
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={BeginPage} />
        <Route exact path="/home">
          <MainPage components={<Home />} index={0} />
        </Route>
        <Route exact path="/news">
          <MainPage components={<News />} index={1} />
        </Route>
        <Route exact path="/people">
          <MainPage components={<People />} index={2} />
        </Route>
        <Route exact path="/messager">
          <MainPage components={<Messager />} index={3} />
        </Route>
        <Route exact path="/photos">
          <MainPage components={<Photos />} index={4} />
        </Route>
        <Route exact path="/video">
          <MainPage components={<Video />} index={5} />
        </Route>
        <Route exact path="/publics">
          <MainPage components={<Publics />} index={6} />
        </Route>
        <Route exact path="/store">
          <MainPage components={<Store />} index={7} />
        </Route>
        <Route exact path="/notification">
          <MainPage components={<Notification />} index={8} />
        </Route>
        <Route exact path="/bookmarks">
          <MainPage components={<Bookmarks />} index={9} />
        </Route>
        <Route exact path="/services">
          <MainPage components={<Services />} index={10} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
