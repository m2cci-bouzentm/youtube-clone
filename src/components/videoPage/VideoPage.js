import React, { useEffect } from 'react';
import {
  LikeIcon,
  DislikeIcon,
  ShareIcon,
  SaveIcon,
  SortIcon,
} from '../icons/Icons';
import { BsThreeDots } from 'react-icons/bs';
import Description from './Description';
import WriteComment from './WriteComment';
import Comment from './Comment';
import SuggestedVideo from './SuggestedVideo';

const VideoPage = () => {
  return (
    <div className="video-page flex space-x-[2%] py-8 px-[80px] w-full min-h-[100vh]">
      <div className="first-col w-[70%] space-y-4">
        { }
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/fzAyZ1Lh-zI?autoplay=1"
            frameBorder="0"
            title="video"
            className="w-full h-[70vh] "
          ></iframe>
        </div>
        { }
        <div className="video-title font-bold text-xl">
          <h3>Melanie Martinez - VOID (Official Music Video)</h3>
        </div>
        { }
        <div className="video-details py-2 flex justify-between items-end border-b-[1px] border-[#7575755a]">
          <div className="video-details-left channel space-x-3">
            <div className="channel-left flex space-x-3">
              <img
                src="https://yt3.ggpht.com/hib75A2V1CCLJX9OIr4eYS6Hnx7VM8XVkPLM_qc8Z87vqz76vyJgFfpD7Mn30BuxakqkH3Uv=s88-c-k-c0x00ffffff-no-nd-rj"
                alt="chanel-pic"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="channel-center">
                <h4 className="channel-name font-bold">NFrealmusic</h4>
                <span className="text-sm text-gray-500">9.3M subscribers</span>
              </div>
              <div className="channel-right flex items-center">
                <button className="rounded-full text-sm font-bold bg-black hover:bg-[#2f2f2f] active:bg-[#4c4b4b] transition-all text-white w-[95px] h-[36px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="video-details-right font-bold text-[#2b2a2a] text-sm flex space-x-3">
            <button className="flex items-center space-x-2 bg-[#f2f2f2] hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-2 px-4 rounded-r-none">
              <LikeIcon />
              <span>301.6K</span>
            </button>
            <button className="flex items-center space-x-2 bg-[#f2f2f2] hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-2 px-4 rounded-l-none !ml-0">
              <DislikeIcon />
            </button>
            <button className="flex items-center space-x-2 bg-[#f2f2f2] hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-2 px-4 ">
              <ShareIcon />
              <span>SHARE</span>
            </button>
            <button className="flex items-center space-x-2 bg-[#f2f2f2] hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-2 px-4 ">
              <SaveIcon />
              <span>SAVE</span>
            </button>
            <button className="flex items-center space-x-2 bg-[#f2f2f2] hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-2 px-4 ">
              <BsThreeDots />
            </button>
          </div>
        </div>

        <Description />

        <div className="comments-section space-y-2 !mt-0">
          <div className="flex items-end space-x-8">
            <span className="comments-number text-lg">34,531 Comments</span>
            <span className="flex space-x-2 font-bold">
              <SortIcon /> <span>Sort by</span>
            </span>
          </div>

          <WriteComment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>

      <div className="second-col w-[30%] space-y-4">
        <SuggestedVideo />
        <SuggestedVideo />
        <SuggestedVideo />
        <SuggestedVideo />
        <SuggestedVideo />
        <SuggestedVideo />
        <SuggestedVideo />
        <SuggestedVideo />
      </div>
    </div>
  );
};

export default VideoPage;
