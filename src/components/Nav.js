import React from 'react';
import { YoutubeLogo, BellIcon, CreateIcon } from './icons/Icons.js';

import { AiOutlineMenu } from 'react-icons/ai';
import { MdMic } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import SignInBtn from './SignInBtn';
import ProfileDropDown from './ProfileDropDown';

const Nav = ({ isUserSignIn, user }) => {
  return (
    <nav className="flex items-center justify-between w-full py-1 px-8 border-solid border-[1px] border-[#33333339] border-r-0">
      <div className="left-nav-items flex items-center gap-[2rem]">
        <button>
          <AiOutlineMenu className="text-xl" />
        </button>
        <YoutubeLogo />
      </div>
      <div className="middle-nav-items flex items-center w-[45%]">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[40px] mr-[1px]"
        />
        <button className="bg-[#f8f8f8] h-[40px] flex items-center justify-center">
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
