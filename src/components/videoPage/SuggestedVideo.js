import React from 'react';

const SuggestedVideo = () => {
  return (
    <div className="suggested-video-1 flex space-x-2 text-sm">
      <div className="thumbnail-container">
        <img
          src="https://i.ytimg.com/vi/e5mzDsQu_mE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRVJ0VozYAHq72To2yz1nVzql0zw"
          alt="thumbnail"
          className="rounded-lg"
        />
      </div>
      <div className="details">
        <div className="title text-md font-bold mb-[5px]">
          <h3>
            [Playlist] songs that make you feel like a Lucifer Morningstar
          </h3>
        </div>
        <div className="channel-name text-gray-600">
          <span>𝑹𝒆𝒅 𝑹𝒖𝒎</span>
        </div>
        <div className="video-statistics flex space-x-2 text-gray-600">
          <span>1.4M views</span>
          <span>• 10 months ago</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestedVideo;
