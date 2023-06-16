import {
  HomeIcon,
  ExploreIcon,
  subscribeIcon,
  LibraryIcon,
  HistoryIcon,
  YourVideosIcon,
  WatchLaterIcon,
  LikedVideosIcon,
  YoutubeLogo,
  MenuIcon,
} from '../icons/Icons.js';

import SignInBtn from '../navBar/SignInBtn';
import { Link } from 'react-router-dom';

const SideBarBtn = (btnText, Icon) => (
  <div className="flex cursor-pointer w-full items-center justify-start rounded-xl pl-3 pr-6 py-3 text-gray-800 hover:bg-gray-200">
    <span>
      <Icon />
    </span>
    <span className="ml-4">{btnText}</span>
  </div>
);

const FloatingSideBar = ({ isUserSignIn, isMiniSideBar, setIsMiniSideBar }) => {
  return (
    <div
      className={`floating-sideBar absolute py-1 px-8 pr-2 top-0 left-0 bg-white h-full z-50 text-sm w-[250px] space-y-2 transition-all ${isMiniSideBar ? 'translate-x-[0px]' : 'translate-x-[-250px] invisible'
        }`}
    >
      <div className="left-nav-items flex items-center gap-[2rem]">
        <button
          onClick={() => setIsMiniSideBar(!isMiniSideBar)}
          className="rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] p-3"
        >
          <MenuIcon />
        </button>
        <Link to="/">
          <YoutubeLogo />
        </Link>
      </div>

      <Link to="/">{SideBarBtn('Home', HomeIcon)}</Link>
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

export default FloatingSideBar;
