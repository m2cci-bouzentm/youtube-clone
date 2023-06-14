import React from 'react';
import MiniSideBar from './MiniSideBar';
import SideBar from './SideBar';
import FloatingSideBar from './FloatingSideBar';

import { useLocation } from 'react-router-dom';

const WhichSideBar = ({ isUserSignIn, isMiniSideBar }) => {
  const location = useLocation();
  console.log(location.pathname !== '/');
  if (location.pathname !== '/')
    return isMiniSideBar ? <FloatingSideBar isUserSignIn={isUserSignIn} /> : '';

  if (isMiniSideBar) return <MiniSideBar isUserSignIn={isUserSignIn} />;
  else return <SideBar isUserSignIn={isUserSignIn} />;
};

export default WhichSideBar;
