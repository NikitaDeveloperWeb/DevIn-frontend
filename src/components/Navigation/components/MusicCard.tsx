import React from 'react';
import music from '../../../assets/img/music.jpg';
import Modal from '../../Modal';
import Confirm from './Confirm';

interface MusicCardProps {
  title: string;
  author: string;
  source: string;
  cover?: string;
}

function MusicCard({ title, author, source, cover }: MusicCardProps) {
  const [open, setOpen] = React.useState(false);
  const optionRef = React.useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setOpen(false);
  };
  //open modal window
  const handleOpen = () => {
    setOpen(true);
  };

  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(optionRef.current)) {
      handleClose();
    }
  };
  React.useEffect(() => {
    document.body?.addEventListener('click', handleOutsideClick);
  });

  return (
    <div className="card">
      <div className="card__data">
        <div className="card__data__option" ref={optionRef}>
          <div
            className="card__data__option__icon"
            onClick={() => {
              handleOpen();
            }}>
            <div className="card__data__option__icon__elem"></div>
            <div className="card__data__option__icon__elem"></div>
            <div className="card__data__option__icon__elem"></div>
            <div
              className={
                open ? 'card__data__option__icon__modal__open' : 'card__data__option__icon__modal'
              }>
              <ul>
                <li>Play</li>
                <li>
                  <Modal
                    children={Confirm()}
                    valueButton="Remove this track"
                    typeButton="button"
                    classNameButton="button__outline"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card__data__info">
          <div className="card__data__info__title">{title}</div>
          <div className="card__data__info__author">{author}</div>
        </div>
        <div className="card__data__pult">
          <audio controls>
            <source src={source} type="audio/mpeg" />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
      </div>
      <div className="card__cover">
        {cover !== '' ? (
          <img src={cover} alt={`${title} cover`} />
        ) : (
          <img src={music} alt={`${title} cover`} />
        )}
      </div>
    </div>
  );
}

export default MusicCard;
