import {
  HomeIcon,
  ExploreIcon,
  subscribeIcon,
  LibraryIcon,
  HistoryIcon,
  YourVideosIcon,
  WatchLaterIcon,
  LikedVideosIcon,
} from '../icons/Icons';
import SignInBtn from '../navBar/SignInBtn';
import { Link } from "react-router-dom";

const SideBarBtn = (btnText, Icon) => (
  <div className="flex cursor-pointer w-full rounded-xl items-center justify-start pl-3 pr-6 py-3 text-gray-800 hover:bg-gray-200">
    <span>
      <Icon />
    </span>
    <span className="ml-4">{btnText}</span>
  </div>
);

const SideBar = ({ isUserSignIn }) => {
  return (
    <div className="side-bar text-sm py-1 px-8 pr-2 w-[250px] space-y-2">
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

export default SideBar;
