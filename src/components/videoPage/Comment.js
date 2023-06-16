import React, { useState } from 'react';
import { LikeIcon, DislikeIcon, RepliesIcon } from '../icons/Icons';
import { getLikes, getTimeDifference } from '../../helperFunctions';
import Reply from './Reply';

const Comment = ({ comment }) => {
  const [isReply, setIsReply] = useState(false);
  const handleShowReplies = () => {
    setIsReply(!isReply);
  };

  return (
    <div className="other-users-comments flex items-start space-x-4 !mb-6">
      <a href={comment.snippet.topLevelComment.snippet.authorChannelUrl}>
        <img
          src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt="user-pic"
          className="comment-left rounded-full w-[40px] h-[40px]"
          loading="lazy"
        />
      </a>

      <div className="comment-right w-full space-y-1">
        <div className="comment-details flex items-center space-x-2 px-1">
          <a
            href={comment.snippet.topLevelComment.snippet.authorChannelUrl}
            className="comment-owner font-bold text-sm"
          >
            {comment.snippet.topLevelComment.snippet.authorDisplayName}
          </a>
          <span className="comment-date text-gray-600 text-xs hover:text-black cursor-pointer">
            {getTimeDifference(
              comment.snippet.topLevelComment.snippet.publishedAt
            )}
          </span>
        </div>

        <div className="comment-text">
          <p className="whitespace-pre-wrap">
            {comment.snippet.topLevelComment.snippet.textOriginal}
          </p>
        </div>

        <div className="comment-statistics ">
          <div className="flex items-center space-x-1 text-sm">
            <button className="rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] p-[6px]">
              <LikeIcon />
            </button>
            <span className="likes-count text-gray-600">
              {getLikes({
                statistics: {
                  likeCount: comment.snippet.topLevelComment.snippet.likeCount,
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
          {comment.snippet.totalReplyCount ? (
            <div className="replies flex items-center justify-center mb-1 w-max">
              <button
                className="flex items-center justify-center space-x-2 font-bold p-2 px-4 pr-6 rounded-full text-[#0e64d5] hover:bg-[#def1ff] active:bg-[#c7d8e5]"
                onClick={handleShowReplies}
              >
                <RepliesIcon />
                <span>{comment.snippet.totalReplyCount}</span>
                <span>reply</span>
              </button>
            </div>
          ) : (
            ''
          )}

          {isReply
            ? comment.replies.comments.map((reply, i) => (
              <Reply reply={reply} />
            ))
            : ''}

        </div>
      </div>
    </div>
  );
};

export default Comment;
