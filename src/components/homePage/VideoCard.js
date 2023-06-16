import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getViews, getTimeDifference } from '../../helperFunctions';

const VideoCard = ({ video, API_KEY }) => {
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${API_KEY.current}`
    )
      .then((res) => res.json())
      .then((data) => setChannelData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!video.snippet.thumbnails.maxres) return;

  return (
    <Link to={`/watch/${video.id}`} className="h-[320px] w-max">
      <div className="video-card space-y-3 w-[340px]">
        <div className="thumbnail relative">
          <img
            src={video.snippet.thumbnails.maxres.url}
            alt="thumbnail"
            className="w-full"
          />
          <div className="video-duration">
            {video.contentDetails.duration
              .replace(/H|M/g, ':')
              .replace(/PT|S/g, '')
              .replace(/\b(\d)\b/g, '0$1')}
          </div>
        </div>

        <div className="video flex space-x-4">
          <div className="first-col ">
            <div className="channel-icon w-[39px]">
              <img
                src={
                  channelData
                    ? channelData.items[0].snippet.thumbnails.default.url
                    : ''
                }
                alt="channel-thumbnail"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="second-col space-y-1">
            <div className="video-title font-bold">
              <h2>{video.snippet.title}</h2>
            </div>
            <div className="channel-name text-[#606060] text-sm">
              <p>{video.snippet.channelTitle}</p>
            </div>
            <div className="video-details flex space-x-2 text-sm text-[#606060]">
              <p>{getViews(video)} views</p>
              <p>{getTimeDifference(video.snippet.publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
