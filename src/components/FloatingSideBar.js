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
import { Link } from "react-router-dom";

const SideBarBtn = (btnText, Icon) => (
  <div className="flex cursor-pointer w-full items-center justify-start px-6 py-3 text-gray-800 hover:bg-gray-200">
    <span>
      <Icon />
    </span>
    <span className="ml-4">{btnText}</span>
  </div>
);

const FloatingSideBar = ({ isUserSignIn }) => {
  return (
    <div className="absolute left-0 bg-white h-full z-10 side-bar text-sm w-[250px] space-y-2">
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
  )
}

export default FloatingSideBar