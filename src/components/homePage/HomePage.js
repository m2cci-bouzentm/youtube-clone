import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

const HomePage = ({ API_KEY, setIsSearching, setIsMiniSideBar }) => {
  const [videos, setVideos] = useState(null);
  const [userRegion, setUserRegion] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 768)
      setIsMiniSideBar(true);
    else
      setIsMiniSideBar(false);


    setIsSearching(false);
    return () => {
      setIsMiniSideBar(false);
    }
  }, []);

  const getUserRegion = () => {
    fetch('http://ip-api.com/json')
      .then((res) => res.json())
      .then((response) => setUserRegion(response.countryCode))
      .catch((err) => {
        setUserRegion("FR");
        console.error(err);
      });
  };
  const getVideos = (videoNum) => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${videoNum}&regionCode=${userRegion || 'FR'}&key=${API_KEY.current}`
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUserRegion();
    getVideos(180);
  }, [userRegion]);

  return (
    <div className="home-page py-6 min-h-[100vh] flex flex-col md:flex-row items-center justify-center space-y-2 md:px-[120px] w-full">
      {videos
        ? videos.map((video, i) => (
          <VideoCard key={i} video={video} API_KEY={API_KEY} />
        ))
        : ''}
    </div>
  );
};

export default HomePage;
