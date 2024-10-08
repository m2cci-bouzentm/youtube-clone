import './index.css';
import Nav from './components/navBar/Nav';
import HomePage from './components/homePage/HomePage';
import WhichSideBar from './components/sideBar/WhichSideBar';
import VideoPage from './components/videoPage/VideoPage';

import { useRef, useState } from 'react';
import MyContext from './MyContext';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/searchPage/SearchPage';

function App() {
  const [isUserSignIn, setIsUserSignIn] = useState(false);
  const [user, setUser] = useState(null);

  const [isSearching, setIsSearching] = useState(false);
  const [isMiniSideBar, setIsMiniSideBar] = useState(false);

  const API_KEY = useRef(process.env.REACT_APP_API_KEY);


  return (
    <HashRouter>
      <MyContext.Provider
        value={{ setIsUserSignIn, isUserSignIn, setUser, user }}
      >
        <Nav
          isUserSignIn={isUserSignIn}
          user={user}
          isMiniSideBar={isMiniSideBar}
          setIsMiniSideBar={setIsMiniSideBar}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
        <div className="main w-full flex">
          <WhichSideBar
            isUserSignIn={isUserSignIn}
            isMiniSideBar={isMiniSideBar}
            setIsMiniSideBar={setIsMiniSideBar}
          />

          <Routes>
            <Route
              path="/"
              element={
                <HomePage API_KEY={API_KEY} setIsSearching={setIsSearching} setIsMiniSideBar={setIsMiniSideBar} />
              }
            />
            <Route
              path="/watch/:videoId"
              element={
                <VideoPage
                  API_KEY={API_KEY}
                  isMiniSideBar={isMiniSideBar}
                  setIsMiniSideBar={setIsMiniSideBar}
                  setIsSearching={setIsSearching}
                />
              }
            />
            <Route
              path="/search/:searchText"
              element={<SearchPage API_KEY={API_KEY} setIsMiniSideBar={setIsMiniSideBar} />}
            />
          </Routes>
        </div>
      </MyContext.Provider>
    </HashRouter>
  );
}

export default App;
