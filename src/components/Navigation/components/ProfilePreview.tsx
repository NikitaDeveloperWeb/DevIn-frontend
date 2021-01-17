import React from 'react';
import noavatar from '../../../assets/img/Noavatar.png';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

interface ProfilePreviewProps {
  firstname: string;
  lastname: string;
  avatar: string;
}

function ProfilePreview({ firstname, lastname, avatar }: ProfilePreviewProps) {
  const [open, setOpen] = React.useState(false);
  const userRef = React.useRef<HTMLDivElement>(null);
  //outside click listener
  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(userRef.current)) {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    document.body?.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="userPreview" onClick={() => setOpen(!open)} ref={userRef}>
      <div className="userPreview__data">
        <div className="userPreview__data__avatar">
          {avatar !== '' ? <img src={avatar} alt="Avatar" /> : <img src={noavatar} alt="Avatar" />}
        </div>
        <div className="userPreview__data__fullname">
          <p>{firstname + ' ' + lastname}</p>
        </div>
        <div className="arrow">{(open && <ExpandLessIcon />) || <ExpandMoreIcon />}</div>
      </div>
      <div className={open ? 'menu__open' : 'menu'}>
        <ul>
          <li>
            <Link to="/edit">Edit Profile</Link>
          </li>
          <li>
            <Link to="/setting">Settings</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfilePreview;
