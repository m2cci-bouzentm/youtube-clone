import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchCard from './SearchCard';
import { FilterIcon } from '../icons/Icons';
const SearchPage = ({ API_KEY, setIsMiniSideBar }) => {
  const { searchText } = useParams();

  const [videos, setVideos] = useState(null);
  const videosNumber = useRef(25);

  const getVideos = (videosNum) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${videosNum}&q=${searchText}&key=${API_KEY.current}`
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    getVideos(videosNumber.current);
    return () => {
      setIsMiniSideBar(false);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [searchText]);

  const handleScroll = (e) => {
    const bodyHeight = document.body.offsetHeight;
    const scrolledToBottom =
      window.scrollY + window.innerHeight >= bodyHeight - 1;

    if (scrolledToBottom) {
      videosNumber.current += 5;
      getVideos(videosNumber.current);
    }
  };

  return (
    <div className="search-page flex flex-col py-6 h-max px-[80px] w-full">
      <div className="my-4 border-b-[1px] font-bold">
        <button className="flex items-center space-x-2 hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-2 px-4">
          <FilterIcon />
          <span>Filters</span>
        </button>
      </div>
      {videos
        ? videos.map((video, i) => (
          <SearchCard key={i} video={video} API_KEY={API_KEY} />
        ))
        : ''}
    </div>
  );
};

export default SearchPage;
