import React from 'react';
import Logo from '../Logo';

import MusicPlayer from './components/MusicPlayer';
import ProfilePreview from './components/ProfilePreview';

const Navigation = () => {
  return (
    <header className="navigation">
      <Logo />
      <MusicPlayer />
      <ProfilePreview />
    </header>
  );
};
export default Navigation;
