import React, { useContext, useState } from 'react';
import { SignOutIcon } from './icons/Icons';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
import MyContext from '../MyContext';

const ProfileDropDown = ({ user }) => {
  const [isDropDownMenu, setIsDropDownMenu] = useState(false);
  const { setIsUserSignIn, setUser } = useContext(MyContext);

  const handleClick = () => {
    setIsDropDownMenu(!isDropDownMenu);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsDropDownMenu(!isDropDownMenu);
      setIsUserSignIn(false);
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button
        type="button"
        className="active:bg-[#1c62e3] focus:bg-[#1c62e3] active:scale-110 rounded-full"
      >
        <img
          src={user.photoURL}
          alt="profile-pic"
          className="rounded-full w-[32px] active:scale-95"
          onClick={handleClick}
        />
      </button>

      <div
        className={`drop-down-menu absolute top-[47px] right-[-22px] w-[300px] bg-white border ${!isDropDownMenu ? `hidden` : ''
          }`}
      >
        <div
          className="profile flex cursor-pointer w-full h-[60px] items-center justify-start px-6 py-3 text-gray-800 hover:bg-gray-200"
          onClick={handleClick}
        >
          <span>
            <img
              src={user.photoURL}
              alt="profile-pic"
              referrerPolicy="no-referrer"
              className="rounded-full w-[32px]"
            />
          </span>
          <span className="ml-4">{user.displayName}</span>
        </div>
        <hr />
        <div
          className="sign-out flex cursor-pointer w-full h-[60px] items-center justify-start px-6 py-3 text-gray-800 hover:bg-gray-200"
          onClick={handleSignOut}
        >
          <span>
            <SignOutIcon />
          </span>
          <span className="ml-4">Sign Out</span>
        </div>
      </div>
    </>
  );
};

export default ProfileDropDown;
