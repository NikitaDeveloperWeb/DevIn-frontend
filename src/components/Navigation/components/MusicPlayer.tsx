import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicCard from './MusicCard';
import music from '../../../assets/img/cristmas.jpg';
function MusicPlayer() {
  const [open, setOpen] = React.useState(false);

  const musicRef = React.useRef<HTMLDivElement>(null);
  //outside click listener
  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(musicRef.current)) {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    document.body?.addEventListener('click', handleOutsideClick);
  });

  return (
    <div className="music" ref={musicRef}>
      <div className="music__content">
        <div className="music__content__preview" onClick={() => setOpen(!open)}>
          <MusicNoteIcon />
        </div>
        <audio controls>
          <source src="../../../assets/music/exat.mp3" type="audio/mpeg" />
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
      <div className={open ? 'music__playlist__open' : 'music__playlist'}>
        <h2>Playlist</h2>
        <div className="music__playlist__open__carts">
          <MusicCard
            title="Marry Cristmas"
            author="Jordj Marley"
            source="../../../assets/music/exat.mp3"
            cover=""
          />
          <MusicCard
            title="Marry Cristmas"
            author="Jordj Marley"
            source="../../../assets/music/exat.mp3"
            cover={music}
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
