import React, { useEffect, useRef, useState } from 'react';
import VideoCard from './VideoCard';

const MainContent = () => {
  const [videos, setVideos] = useState(null);
  const [userRegion, setUserRegion] = useState(null);
  const API_KEY = useRef('AIzaSyD2wcS9IPUkC6wkC3GtPvBfesIGwrQkIi0');

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then((res) => res.json())
      .then((response) => setUserRegion(response.countryCode))
      .catch((err) => console.error(err));

    if (!userRegion) return;

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${'15'}&regionCode=${userRegion}&key=${API_KEY.current
      }`
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  }, [userRegion]);


  return (
    <div className="content py-6 px-[120px] w-full bg-[#f8f8f8]">
      {videos
        ? videos.map((video, i) => (
          <VideoCard key={i} video={video} API_KEY={API_KEY} />
        ))
        : ''}
    </div>
  );
};

export default MainContent;
