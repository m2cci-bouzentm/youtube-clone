import React from 'react';
import {
  LikeIcon,
  DislikeIcon,
} from '../icons/Icons';

const Comment = () => {

  let comment =
    '"You don\'t believe in monsters do you?\r\n - Of course not!\r\n I do."\r\n My fav line!!\r\n';

  return (
    <div className="other-users-comments flex items-start space-x-4 !mb-6">
      <img
        src="https://yt3.ggpht.com/xq9sYABs8YWkSMUS8a0QaHP9KfDZmB_G5YFwhNadP8AsAR5uybbdn9WnM3qXfIAta1NU1n5b=s88-c-k-c0x00ffffff-no-rj"
        alt="user-pic"
        className="comment-left rounded-full w-[40px] h-[40px]"
      />

      <div className="comment-right w-full space-y-1">
        <div className="comment-details flex items-center space-x-2 px-1">
          <a href="#" className="comment-owner font-bold text-sm">
            @Itz_Y2x
          </a>
          <span className="comment-date text-gray-600 text-xs hover:text-black cursor-pointer">
            4 years ago
          </span>
        </div>

        <div className="comment-text">
          <p className="whitespace-pre-line break-words">
            {comment.replaceAll('/\r\n|\r|\n/', '</br>')}
          </p>
        </div>

        <div className="comment-statistics flex items-center space-x-1 text-sm">
          <button className="rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] p-[6px]">
            <LikeIcon />
          </button>
          <span className="text-gray-600">231</span>
          <button className="rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] p-[6px]">
            <DislikeIcon />
          </button>
          <button className="rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] p-[6px] px-3 ml-2 font-bold text-gray-800">
            {' '}
            Reply{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
