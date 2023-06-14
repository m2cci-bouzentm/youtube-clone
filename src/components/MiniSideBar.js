import React from 'react';
import { Link } from 'react-router-dom';

import {
  HomeIcon,
  ExploreIcon,
  subscribeIcon,
  LibraryIcon,
  HistoryIcon,
  YourVideosIcon,
  WatchLaterIcon,
  LikedVideosIcon,
} from './icons/Icons.js';

const MiniSideBarBtn = (btnText, Icon) => (
  <div className="flex flex-col cursor-pointer w-full h-full items-center justify-center px-6 py-2 space-y-2 text-gray-800 hover:bg-gray-200">
    <span>
      <Icon />
    </span>
    <span className="w-max">{btnText}</span>
  </div>
);

const MiniSideBar = ({ isUserSignIn }) => {
  return (
    <div className="mini-side-bar text-xs font-bold w-[90px] h-[70px] space-y-2">
      <Link to="/">{MiniSideBarBtn('Home', HomeIcon)}</Link>
      {MiniSideBarBtn('Explore', ExploreIcon)}
      {MiniSideBarBtn('Subscriptions', subscribeIcon)}
      {MiniSideBarBtn('Library', LibraryIcon)}
      {MiniSideBarBtn('History', HistoryIcon)}
      {isUserSignIn ? (
        <>
          {MiniSideBarBtn('Your videos', YourVideosIcon)}
          {MiniSideBarBtn('Watch later', WatchLaterIcon)}
          {MiniSideBarBtn('Liked Videos', LikedVideosIcon)}
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default MiniSideBar;
