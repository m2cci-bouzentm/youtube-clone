import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getViews, getTimeDifference } from '../../helperFunctions';

const SearchCard = ({ video, API_KEY }) => {
  const [channelData, setChannelData] = useState(null);
  const [videoComplementaryData, setVideoComplementaryData] = useState(null);

  const getChannelData = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${API_KEY.current}`
    )
      .then((res) => res.json())
      .then((data) => setChannelData(data))
      .catch((err) => console.error(err));
  };
  const getVideoComplementaryData = () => {
    fetch(
      `      https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video.id.videoId}&key=${API_KEY.current}      `
    )
      .then((res) => res.json())
      .then((data) => setVideoComplementaryData(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getChannelData();
    getVideoComplementaryData();
  }, []);

  if (!video.snippet.thumbnails.medium) return;
  if (!videoComplementaryData) return;
  if (!videoComplementaryData.items[0]) return;
  if (!videoComplementaryData.items[0].contentDetails) return;
  if (!channelData) return;
  if (!channelData.items[0]) return;

  return (
    <div className="video-card flex space-x-4 mb-6 w-full">
      <Link to={`/watch/${video.id.videoId}`}>
        <div className="thumbnail relative  h-[200px] w-[360px]">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt="thumbnail"
            className="w-full rounded-xl"
          />
          <div className="video-duration">
            {videoComplementaryData.items[0].contentDetails.duration
              .replace(/H|M/g, ':')
              .replace(/PT|S/g, '')
              .replace(/\b(\d)\b/g, '0$1')}
          </div>
        </div>
      </Link>

      <div className="video-details flex flex-col">
        <div className="text-2xl">
          <Link to={`/watch/${video.id.videoId}`}>
            <h2>{video.snippet.title}</h2>
          </Link>
        </div>

        <div className="flex space-x-2 text-sm text-[#606060] mb-3">
          <p>{getViews(videoComplementaryData.items[0])}</p>
          <p>{getTimeDifference(video.snippet.publishedAt)}</p>
        </div>

        <div className="flex items-center space-x-2 ">
          <div className="channel-icon w-[24px] h-[24px]">
            <a href={`https://www.youtube.com/channel/${channelData.items[0].id}`}>
              <img
                src={
                  channelData
                    ? channelData.items[0].snippet.thumbnails.default.url
                    : ' '
                }
                alt="channel-thumbnail"
                className="rounded-full"
              />
            </a>
          </div>
          <div className="channel-name text-[#606060] text-sm">
            <a href={`https://www.youtube.com/channel/${channelData.items[0].id}`}>
              <p>{video.snippet.channelTitle}</p>
            </a>
          </div>
        </div>
        <div className="description flex text-[#606060] mt-4">
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
