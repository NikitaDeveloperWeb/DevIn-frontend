import React from 'react';
import Navigation from '../../components/Navigation';

import NavigationAside from '../../components/NavigationAside';

interface MainPageProps {
  components: JSX.Element | Element | JSX.Element[] | Element[];
  index: number;
}

function MainPage({ components, index }: MainPageProps) {
  return (
    <div className="main">
      <div className="main__header">
        <Navigation />
      </div>
      <div className="main__content">
        <div className="main__content__aside">
          <NavigationAside index={index} />
        </div>
        <main>{components}</main>;
      </div>
    </div>
  );
}

export default MainPage;
