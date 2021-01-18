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
function NavigationAside() {
  return (
    <div className="navigationAside">
      <AsideLink path="/home" value="My page" icon={<HomeIcon />} active={0} />
      <AsideLink path="/news" value="News" icon={<CloudIcon />} active={1} />
      <AsideLink path="/follows" value="People" icon={<GroupIcon />} active={2} />
      <AsideLink path="/messager" value="Messager" icon={<MessageIcon />} active={3} />
      <AsideLink path="/photos" value="Photos" icon={<PhotoIcon />} active={4} />
      <AsideLink path="/video" value="Video" icon={<VideocamIcon />} active={5} />
      <AsideLink path="/publics" value="Publics" icon={<PublicIcon />} active={6} />
      <AsideLink path="/store" value="Store" icon={<LocalGroceryStoreIcon />} active={7} />
      <AsideLink
        path="/notification"
        value="Notification"
        icon={<NotificationsIcon />}
        active={8}
      />
      <AsideLink path="/bookmarks" value="Bookmarks" icon={<BookmarkIcon />} active={9} />
      <AsideLink
        path="/servises"
        value="Services"
        icon={<SettingsApplicationsIcon />}
        active={10}
      />
    </div>
  );
}

export default NavigationAside;
