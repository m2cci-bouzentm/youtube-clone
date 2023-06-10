import React from 'react';
import YoutubeLogo from './YoutubeLogo';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { AiOutlineMenu } from 'react-icons/ai';
import { MdMic } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';

const ColorButton = styled(Button)({
  color: '#1145a4',
  outline: '#1145a4',
  '&:hover': {},
});

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-6 border-solid border-[1px] border-[#33333339] ">
      <div className="left-nav-items flex items-center gap-[2rem]">
        <AiOutlineMenu className="text-2xl" />
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
      <div className="right-nav-items">
        <ColorButton variant="outlined">Sign In</ColorButton>
      </div>
    </nav>
  );
};

export default Nav;
