import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getViews, getTimeDifference } from '../../helperFunctions';

const SuggestedVideo = ({ relatedVideo, API_KEY }) => {
  const [video, setVideo] = useState(null);


  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${relatedVideo.id.videoId}&key=${API_KEY.current}`
    )
      .then((res) => res.json())
      .then((relatedVidData) => setVideo(relatedVidData))
      .catch((err) => console.error(err));
  }, []);


  if (!video || video.items.length === 0) return;


  return (
    <div className="suggested-video-1 flex space-x-2 text-sm">
      <div className="thumbnail-container max-w-[170px]">
        <Link to={`/watch/${relatedVideo.id.videoId}`}>
          <img
            src={
              relatedVideo.snippet.thumbnails.medium
                ? relatedVideo.snippet.thumbnails.medium.url
                : relatedVideo.snippet.thumbnails.high.url
            }
            alt="thumbnail"
            className="rounded-lg max-w-[170px]"
          />
        </Link>
      </div>
      <div className="details">
        <div className="title text-md font-bold min-w-[150px] mb-2 text-gray-800">
          <Link to={`/watch/${relatedVideo.id.videoId}`}>
            <h3>{relatedVideo.snippet.title}</h3>
          </Link>
        </div>
        <div className="channel-name text-gray-600 mb-1">
          <span>{relatedVideo.snippet.channelTitle}</span>
        </div>
        <div className="video-statistics flex space-x-2 text-gray-600">
          {
            video.items.length ?
              <>
                <span>{getViews(video.items[0])} views</span>
                <span>• {getTimeDifference(video.items[0].snippet.publishedAt)} </span>
              </>
              : ''}
        </div>
      </div>
    </div>
  );
};

export default SuggestedVideo;
