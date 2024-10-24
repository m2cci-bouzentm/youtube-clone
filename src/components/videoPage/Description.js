import React, { useState } from 'react';
import { getViews, getDate } from '../../helperFunctions';

const Description = ({ video }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsShowMore(true)}
        className={`description bg-[#f2f2f2] w-full hover:bg-[#e5e5e5] rounded-2xl p-4 pb-9 cursor-pointer ${isShowMore ? 'pointer-events-none cursor-auto' : ''
          }`}
      >
        <div className="space-x-4">
          <span className="views-count">
            {getViews(video.items[0])}
            views
          </span>
          <span className="date">
            {getDate(video.items[0].snippet.publishedAt)}
          </span>
        </div>
        <div className="whitespace-pre-wrap">
          {video.items[0].snippet.description.split(/(\r\n|\r|\n)/)[0]}
          <span className={isShowMore ? 'hidden' : ''}>...</span>
          <span className={isShowMore ? '' : 'hidden'}>
            <span> </span>
            {video.items[0].snippet.description.split(/(\r\n|\r|\n)/).slice(1)}
          </span>
        </div>
      </div>
      <button
        className="show-more-btn text-sm font-bold px-4 relative bottom-[44px]"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {!isShowMore ? 'Show more' : 'Show less'}
      </button>
    </>
  );
};

export default Description;
