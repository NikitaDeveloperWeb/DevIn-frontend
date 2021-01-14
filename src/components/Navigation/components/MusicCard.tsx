import React from 'react';
import music from '../../../assets/img/music.jpg';
interface MusicCardProps {
  title: string;
  author: string;
  source: string;
  cover?: string;
}

function MusicCard({ title, author, source, cover }: MusicCardProps) {
  return (
    <div className="card">
      <div className="card__data">
        <div className="card__data__title">{title}</div>
        <div className="card__data__author">{author}</div>
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
