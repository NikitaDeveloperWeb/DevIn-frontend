import React from 'react';
import noAvatar from '../../../assets/img/Noavatar.png';
import Avatar from '../../../assets/img/avatar.jpg';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
interface ProfileHomePreviewProps {
  ProfileYour: boolean;
}

function ProfileHomePreview({ ProfileYour }: ProfileHomePreviewProps) {
  const user = [
    {
      id: '1',
      username: 'rusak',
      firstname: 'Nikita',
      lastname: 'Rusakov',
      email: 'rusakdeveloper@gmail.com',
      phone: '89518054459',
      status: 'Get me life',
      date: '24.02.2001',
      location: 'Zlatoust',
      action: 'Developer',
      sex: 'man',
      avatar: '../../assets/img/avatar.jpg',
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handlerOpen = (state: boolean) => {
    setOpen(!state);
  };

  return (
    <div className="ProfileHomePreview">
      {user.map((user) => (
        <div className="ProfileHomePreview__user" key={user.id}>
          <div className="ProfileHomePreview__user__major">
            <div className="ProfileHomePreview__user__major__avatar">
              {(user.avatar !== '' && <img src={Avatar} alt="" />) || <img src={noAvatar} alt="" />}
            </div>
            <div className="ProfileHomePreview__user__major__data">
              <h3>{user.firstname + ' ' + user.lastname}</h3>
              <p>{'@' + user.username}</p>
              <p>{user.status}</p>
              <p>{user.date}</p>
              {ProfileYour && (
                <div className="ProfileHomePreview__user__major__data__methods">
                  <AddIcon />
                  <ForumIcon />
                </div>
              )}
            </div>
          </div>
          <div
            className={
              !open ? 'ProfileHomePreview__user__full' : 'ProfileHomePreview__user__full__none'
            }>
            <h3>Full information:</h3>
            <p>Action: {user.action}</p>
            <p>E-mail: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Sex: {user.sex}</p>
            <p>From: {user.location}</p>
          </div>
          <button
            onClick={() => {
              handlerOpen(open);
            }}>
            {(open && <ExpandMoreIcon />) || <ExpandLessIcon />}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProfileHomePreview;
