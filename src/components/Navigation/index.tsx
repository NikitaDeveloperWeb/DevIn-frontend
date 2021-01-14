import React from 'react';
import Logo from '../Logo';

import MusicPlayer from './components/MusicPlayer';
import ProfilePreview from './components/ProfilePreview';
import avatar from '../../assets/img/avatar.jpg';
const Navigation = () => {
  const user = [
    {
      id: '1',
      username: 'rusak',
      firstname: 'Nikita',
      lastname: 'Rusakov',
      email: 'rusakdeveloper@gmail.com',
      phone: '89518054459',
      date: '24.02.2001',
      location: 'Zlatoust',
      action: 'Developer',
      sex: 'man',
      avatar: '../../assets/img/avatar.jpg',
    },
  ];
  return (
    <header className="navigation">
      <Logo />
      <MusicPlayer />
      {user.map((user, index) => (
        <span key={`${user}+${index}`}>
          <ProfilePreview firstname={user.firstname} lastname={user.lastname} avatar={avatar} />
        </span>
      ))}
    </header>
  );
};
export default Navigation;
