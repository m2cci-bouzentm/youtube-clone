import React from 'react';
import { LikeIcon, DislikeIcon } from '../icons/Icons';
import { getLikes, getTimeDifference } from '../../helperFunctions';

const Reply = ({ reply }) => {

  return (
    <div className="other-users-replies flex items-start space-x-4 !mb-6">
      <a href={reply.snippet.authorChannelUrl}>
        <img
          src={reply.snippet.authorProfileImageUrl}
          alt="user-pic"
          className="reply-left rounded-full w-[40px] h-[40px]"
          loading="lazy"
        />
      </a>

      <div className="reply-right w-full space-y-1">
        <div className="reply-details flex items-center space-x-2 px-1">
          <a
            href={reply.snippet.authorChannelUrl}
            className="reply-owner font-bold text-sm"
          >
            {reply.snippet.authorDisplayName}
          </a>
          <span className="reply-date text-gray-600 text-xs hover:text-black cursor-pointer">
            {getTimeDifference(
              reply.snippet.publishedAt
            )}
          </span>
        </div>

        <div className="reply-text">
          <p className="whitespace-pre-wrap">
            {reply.snippet.textOriginal}
          </p>
        </div>

        <div className="reply-statistics flex items-center space-x-1 text-sm">
          <button className="rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] p-[6px]">
            <LikeIcon />
          </button>
          <span className="likes-count text-gray-600">
            {getLikes({
              statistics: {
                likeCount: reply.snippet.likeCount,
              },
            })}
          </span>
          <button className="rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] p-[6px]">
            <DislikeIcon />
          </button>
          <button className="rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] p-[6px] pb-[9px] px-3 ml-2 font-bold text-gray-800">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reply;
