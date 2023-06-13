import React, { useEffect, useRef, useState } from 'react';

const VideoCard = ({ video, API_KEY }) => {
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${API_KEY.current}`
    ).then((res) => {
      res.json().then((data) => {
        setChannelData(data);
      });
    });
  }, []);

  const getViews = (video) => {
    if (video.statistics.viewCount / 1000 < 1000) {
      return `${(video.statistics.viewCount / 1000).toFixed(1)}K`;
    } else {
      return `${(video.statistics.viewCount / 1000000).toFixed(1)}M`;
    }
  };
  function getTimeDifference(givenDate) {
    const now = new Date();
    const targetDate = new Date(givenDate);

    const timeDiff = targetDate.getTime() - now.getTime();

    const diffInMilliseconds = Math.abs(timeDiff);

    const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor(
      (diffInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (years === 1) {
      return years + ' year ago';
    } else if (years > 1) {
      return years + ' years ago';
    } else if (days === 7) {
      return (days / 7).toFixed(0) + ' week ago';
    } else if (days > 14) {
      return (days / 7).toFixed(0) + ' weeks ago';
    } else if (days === 1) {
      return days + ' day ago';
    } else if (days > 1) {
      return days + ' days ago';
    } else if (hours === 1) {
      return hours + ' hour ago';
    } else if (hours > 1) {
      return hours + ' hours ago';
    } else {
      return minutes + ' minutes ago';
    }
  }

  if (!video.snippet.thumbnails.maxres) return;

  return (
    <a href="#" className='h-[320px]'>
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
    </a>
  );
};

export default VideoCard;
