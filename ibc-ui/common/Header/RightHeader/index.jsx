import React, { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";
import MenuIcons from './MenuIcons'
import {useSelector} from 'react-redux'


const RightHeader = ({ closeSearch}) => {
  const toggleNotification = useSelector((state) => state.headerReducer.toggleNotification)
  const toggleProfile = useSelector((state) => state.headerReducer.toggleProfile)
  return (
    <div className="right-header" >
      <MenuIcons   closeSearch={closeSearch} />
      {toggleNotification && <NotificationMenu />}
      {toggleProfile && <ProfileMenu />}
    </div>
  );
};

export default RightHeader;
