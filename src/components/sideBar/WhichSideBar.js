import React from 'react';
import MiniSideBar from './MiniSideBar';
import SideBar from './SideBar';
import FloatingSideBar from './FloatingSideBar';

import { useLocation } from 'react-router-dom';

const WhichSideBar = ({ isUserSignIn, isMiniSideBar, setIsMiniSideBar }) => {
  const location = useLocation();

  if (location.pathname.includes('watch'))
    return <FloatingSideBar isUserSignIn={isUserSignIn} isMiniSideBar={isMiniSideBar} setIsMiniSideBar={setIsMiniSideBar} />;

  if (isMiniSideBar) return <MiniSideBar isUserSignIn={isUserSignIn} />;
  else return <SideBar isUserSignIn={isUserSignIn} />;
};

export default WhichSideBar;
