import React from 'react';
import AsideLink from './components/AsideLink';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
import VideocamIcon from '@material-ui/icons/Videocam';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PublicIcon from '@material-ui/icons/Public';
import PhotoIcon from '@material-ui/icons/Photo';
import CloudIcon from '@material-ui/icons/Cloud';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
interface NavidationAsideProps {
  index: number;
}

function NavigationAside({ index }: NavidationAsideProps) {
  const [open, setOpen] = React.useState(true);
  const handlerClose = (state: boolean) => {
    setOpen(!state);
  };
  return (
    <>
      <div
        className={open ? 'navigationAside__button' : 'navigationAside__button__close'}
        onClick={() => handlerClose(open)}>
        {(open && <ArrowBackIosIcon />) || <ArrowForwardIosIcon />}
      </div>
      <aside className={open ? 'navigationAside' : 'navigationAside_close'}>
        <AsideLink path="/home" value="My page" icon={<HomeIcon />} active={0} index={index} />
        <AsideLink path="/news" value="News" icon={<CloudIcon />} active={1} index={index} />
        <AsideLink path="/people" value="People" icon={<GroupIcon />} active={2} index={index} />
        <AsideLink
          path="/messager"
          value="Messager"
          icon={<MessageIcon />}
          active={3}
          index={index}
        />
        <AsideLink path="/photos" value="Photos" icon={<PhotoIcon />} active={4} index={index} />
        <AsideLink path="/video" value="Video" icon={<VideocamIcon />} active={5} index={index} />
        <AsideLink path="/publics" value="Publics" icon={<PublicIcon />} active={6} index={index} />
        <AsideLink
          path="/store"
          value="Store"
          icon={<LocalGroceryStoreIcon />}
          active={7}
          index={index}
        />
        <AsideLink
          path="/notification"
          value="Notification"
          icon={<NotificationsIcon />}
          active={8}
          index={index}
        />
        <AsideLink
          path="/bookmarks"
          value="Bookmarks"
          icon={<BookmarkIcon />}
          active={9}
          index={index}
        />
        <AsideLink
          path="/services"
          value="Services"
          icon={<SettingsApplicationsIcon />}
          active={10}
          index={index}
        />
      </aside>
    </>
  );
}

export default NavigationAside;
