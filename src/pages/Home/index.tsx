import React from 'react';
import ProfileHomePreview from './components/ProfileHomePreview';

function Home() {
  return (
    <div className="home">
      <ProfileHomePreview ProfileYour={false} />
    </div>
  );
}

export default Home;
