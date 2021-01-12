import React from 'react';

import Navigation from '../../components/Navigation';
import NavigationAside from '../../components/NavigationAside';

interface MainPageProps {
  components: JSX.Element | Element | JSX.Element[] | Element[];
}

function MainPage({ components }: MainPageProps) {
  return (
    <div className="main">
      <Navigation />
      <div className="main__content">
        <NavigationAside />
        <main>{components}</main>
      </div>
    </div>
  );
}

export default MainPage;
