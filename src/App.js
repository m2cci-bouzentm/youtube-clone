import './index.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import WhichSideBar from './components/WhichSideBar';
import VideoPage from './components/videoPage/VideoPage';

import { useState } from 'react';
import MyContext from './MyContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isUserSignIn, setIsUserSignIn] = useState(false);
  const [user, setUser] = useState(null);

  const [isMiniSideBar, setIsMiniSideBar] = useState(false);
  const [videoIdInUrl, setVideoIdInUrl] = useState(null);

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ setIsUserSignIn, setUser }}>
        <Nav
          isUserSignIn={isUserSignIn}
          user={user}
          isMiniSideBar={isMiniSideBar}
          setIsMiniSideBar={setIsMiniSideBar}
        />
        <div className="relative main w-full flex">
          <WhichSideBar
            isUserSignIn={isUserSignIn}
            isMiniSideBar={isMiniSideBar}
          />

          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/:videoId"
              element={<VideoPage />}
            />
          </Routes>

        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
