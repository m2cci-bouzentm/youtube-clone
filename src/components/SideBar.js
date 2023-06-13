import { useEffect } from 'react';
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
import SignInBtn from './SignInBtn';

const SideBarBtn = (btnText, Icon) => (
  <div className="flex cursor-pointer w-full items-center justify-start px-6 py-3 text-gray-800 hover:bg-gray-200">
    <span>
      <Icon />
    </span>
    <span className="ml-4">{btnText}</span>
  </div>
);

const SideBar = ({ isUserSignIn }) => {

  return (
    <div className="side-bar text-sm w-[250px] shadow-lg space-y-2">
      {SideBarBtn('Home', HomeIcon)}
      {SideBarBtn('Explore', ExploreIcon)}
      {SideBarBtn('Subscriptions', subscribeIcon)}
      <hr />
      {SideBarBtn('Library', LibraryIcon)}
      {SideBarBtn('History', HistoryIcon)}
      <hr />
      {isUserSignIn ? (
        <>
          {SideBarBtn('Your videos', YourVideosIcon)}
          {SideBarBtn('Watch later', WatchLaterIcon)}
          {SideBarBtn('Liked Videos', LikedVideosIcon)}
        </>
      ) : (
        <>
          <div className="flex flex-col w-full items-start pl-6 py-3 space-y-3 text-gray-800">
            <p>Sign in to like videos, comment and subscribe.</p>
            <SignInBtn />
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default SideBar;
