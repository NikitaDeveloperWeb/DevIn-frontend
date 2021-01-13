import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
function MusicPlayer() {
  return (
    <div className="music">
      <div className="music__content">
        <div className="music__content__preview">
          <MusicNoteIcon />
        </div>
        <audio controls>
          <source src="../../../assets/music/exat.mp3" type="audio/mpeg" />
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
      <div className="music__playlist"></div>
    </div>
  );
}

export default MusicPlayer;
