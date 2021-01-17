import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicCard from './MusicCard';
import music from '../../../assets/img/cristmas.jpg';
import Field from '../../Field';
import SearchIcon from '@material-ui/icons/Search';
import Form from '../../Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SearchFormSchema = yup.object().shape({
  search_music: yup.string().required('Enter your username'),
});

export interface SearchProps {
  search_music: string;
}

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
  }, []);

  const { register, handleSubmit } = useForm<SearchProps>({
    resolver: yupResolver(SearchFormSchema),
  });
  const onSubmit = async (data: SearchProps) => {
    try {
    } catch (error) {}
  };

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
        <div className="music__playlist__open__search">
          <Form id="search__music__form" method="POST" functionOnSubmit={handleSubmit(onSubmit)}>
            <Field
              type="text"
              placeholder="Search"
              icon={<SearchIcon />}
              className="field__primory"
              name="search_music"
              form="search__music__form"
              fieldRef={register}
            />
          </Form>
        </div>
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
