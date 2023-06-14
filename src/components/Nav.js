import React from 'react';
import { YoutubeLogo, BellIcon, CreateIcon, MenuIcon } from './icons/Icons.js';

import { MdMic } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import SignInBtn from './SignInBtn';
import ProfileDropDown from './ProfileDropDown';

const Nav = ({ isUserSignIn, user, isMiniSideBar, setIsMiniSideBar }) => {
  return (
    <nav className="flex items-center justify-between w-full py-1 px-8">
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
      <div className="middle-nav-items flex items-center w-[45%]">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[40px] mr-[1px]"
        />
        <button className="bg-[#f8f8f8] hover:bg-[#e5e5e5] h-[40px] flex items-center justify-center">
          <IoIosSearch className="text-[#000000bc] text-2xl" />
        </button>
        <MdMic className="ml-[3%] text-black text-3xl" />
      </div>
      <div className="right-nav-items flex items-center space-x-6 relative z-10 scale-110">
        {isUserSignIn ? (
          <div className="flex items-center space-x-6">
            <button className=" active:bg-[#e2e2e2] p-2 rounded-full">
              <CreateIcon />
            </button>
            <button className=" active:bg-[#e2e2e2] p-2 rounded-full">
              <BellIcon />
            </button>
            <ProfileDropDown user={user} />
          </div>
        ) : (
          <>
            <button>
              <BiDotsVerticalRounded className="text-xl" />
            </button>
            <SignInBtn />
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
