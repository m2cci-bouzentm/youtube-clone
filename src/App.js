import './index.css';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

import { useState } from 'react';
import MyContext from './MyContext';

function App() {
  const [isUserSignIn, setIsUserSignIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <>
      <MyContext.Provider value={{ setIsUserSignIn, setUser }}>
        <Nav isUserSignIn={isUserSignIn} user={user} />
        <div className="main w-full flex">
          <SideBar isUserSignIn={isUserSignIn} />
          <MainContent />
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
