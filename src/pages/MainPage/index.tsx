import React from 'react';
import Navigation from '../../components/Navigation';

import NavigationAside from '../../components/NavigationAside';

interface MainPageProps {
  components: JSX.Element | Element | JSX.Element[] | Element[];
}

function MainPage({ components }: MainPageProps) {
  return (
    <div className="main">
      <div className="main__header">
        <Navigation />
      </div>
      <div className="main__content">
        <div className="main__content__aside">
          <NavigationAside />
        </div>
        <main>{components}</main>;
      </div>
    </div>
  );
}

export default MainPage;
