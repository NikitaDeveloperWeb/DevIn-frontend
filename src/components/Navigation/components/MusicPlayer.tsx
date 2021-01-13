import React from 'react';

function MusicPlayer() {
  return (
    <div>
      <audio controls>
        <source src="../../../assets/music/exat.mp3" type="audio/mpeg" />
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
}

export default MusicPlayer;
