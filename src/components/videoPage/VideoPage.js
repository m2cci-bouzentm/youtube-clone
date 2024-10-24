import React, { useEffect, useRef, useState } from 'react';
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
import { useParams } from 'react-router-dom';
import { getLikes, getSubscribersCount } from '../../helperFunctions';

const VideoPage = ({
  API_KEY,
  isMiniSideBar,
  setIsMiniSideBar,
  setIsSearching,
}) => {

  const [video, setVideo] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const [comments, setComments] = useState(null);

  const { videoId } = useParams();

  const relatedVideosNumber = useRef(20);



  const getVideo = () => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY.current}`
    )
      .then((res) => res.json())
      .then((videoData) => setVideo(videoData))
      .catch((err) => console.error(err));
  };
  //! Youtube API deprecrated 'relatedToVideoId' search type
  //! I tryed to get some related videos by searching the tags of the video or by video title in worst case
  const getRelatedVideos = (videosNum, videoTags, videoTitle) => {
    fetch(
      // `     https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${videosNum}&relatedToVideoId=${videoId}&type=video&key=${API_KEY.current}`
      `${process.env.REACT_APP_API_BASE_URL}/search?part=snippet&maxResults=${videosNum}&q=${videoTags || videoTitle}&key=${API_KEY.current}`
    )
      .then((res) => res.json())
      .then((relatedVidData) => setRelatedVideos(relatedVidData))
      .catch((err) => console.error(err));
  };
  const getChannelData = () => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video?.items[0]?.snippet.channelId}&key=${API_KEY.current}`
    )
      .then((res) => res.json())
      .then((data) => setChannelData(data))
      .catch((err) => console.error(err));
  };
  const getComments = () => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY.current}`
    )
      .then((res) => res.json())
      .then((commentsData) => setComments(commentsData))
      .catch((err) => console.error(err));
  };
  const getMoreComments = () => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/commentThreads?part=snippet%2Creplies&pageToken=${comments.nextPageToken}&videoId=${videoId}&key=${API_KEY.current}`
    )
      .then((res) => res.json())
      .then((commentsData) => setComments(commentsData))
      .catch((err) => console.error(err));
  };


  useEffect(() => {
    setIsMiniSideBar(false);
    setIsSearching(false);
  }, []);
  useEffect(() => {
    // video data
    getVideo();

    //comments
    getComments();

  }, [videoId]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (!video) return;
    //channel data
    getChannelData();

    //related videos data
    if (video) {
      const videoTags = video?.items[0]?.snippet.tags?.slice(0, 5).join('-');
      const videoTitle = video?.items[0]?.snippet.title;
      getRelatedVideos(relatedVideosNumber.current, videoTags, videoTitle);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [video]);



  const handleScroll = (e) => {
    const bodyHeight = document.body.offsetHeight;
    const scrolledToBottom =
      window.scrollY + window.innerHeight >= bodyHeight - 1;

    if (scrolledToBottom && comments) {
      getMoreComments();
    }
  };



  return video && relatedVideos && channelData && comments && (
    <div
      className={`video-page flex flex-col md:flex-row justify-center items-center md:items-start space-x-[2%] py-8 px-[5%] md:px-[80px] md:w-full min-h-[100vh] ${isMiniSideBar ? 'pointer-events-none' : ''
        }`}
    >
      <div className="first-col flex flex-col items-center md:block w-full md:w-[70%] space-y-4">
        <div className="video-container scale-95 sm:scale-100 w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            title="video"
            className="w-full h-[60vh] sm:h-[70vh]"
          ></iframe>
        </div>
        <div className="video-title font-bold sm:text-xl">
          <h3>{video?.items[0]?.snippet.title}</h3>
        </div>
        <div className="video-details w-full py-2 flex flex-col md:flex-row justify-between items-center border-b-[1px] border-[#7575755a]">
          <div className="video-details-left channel w-full space-x-3">
            <div className="channel-left flex justify-between space-x-3">
              <div className='flex space-x-3'>
                <a
                  href={`https://www.youtube.com/channel/${channelData?.items[0]?.id}`}
                >
                  <img
                    src={channelData?.items[0]?.snippet.thumbnails.default.url}
                    alt="chanel-pic"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                </a>
                <div className="channel-center">
                  <a
                    href={`https://www.youtube.com/channel/${channelData?.items[0]?.id}`}
                  >
                    <h4 className="channel-name w-max font-bold text-sm sm:text-balance">
                      {video?.items[0]?.snippet.channelTitle}
                    </h4>
                  </a>
                  <span className="subscribers-count text-sm text-gray-500">
                    {getSubscribersCount(channelData?.items[0])}
                    subscribers
                  </span>
                </div>
              </div>
              <div className="channel-right space-x-2 flex items-center">
                <button className="rounded-full text-sm font-bold bg-black hover:bg-[#2f2f2f] active:bg-[#4c4b4b] transition-all text-white w-[95px] h-[36px]">
                  Subscribe
                </button>

                <button className="md:hidden flex items-center space-x-2 bg-[#f2f2f2] hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-2 px-4 rounded-r-none">
                  <LikeIcon />
                  <span className="likes-count">{getLikes(video?.items[0])}</span>
                </button>
                <button className="md:hidden flex items-center space-x-2 bg-[#f2f2f2] hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-2 px-4 rounded-l-none !ml-0">
                  <DislikeIcon />
                </button>

              </div>
            </div>
          </div>
          <div className="video-details-right font-bold text-[#2b2a2a] text-sm flex space-x-3 self-end">
            <button className="hidden md:flex items-center space-x-2 bg-[#f2f2f2] hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-2 px-4 rounded-r-none">
              <LikeIcon />
              <span className="likes-count">{getLikes(video?.items[0])}</span>
            </button>
            <button className="hidden md:flex items-center space-x-2 bg-[#f2f2f2] hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-2 px-4 rounded-l-none !ml-0">
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

        <Description video={video} />


        {/* show suggested videos before comments on mobile */}
        <div className="second-col block md:hidden md:w-[30%] space-y-4">
          {relatedVideos?.items?.map((relatedVideo, i) =>
            <SuggestedVideo
              key={i}
              relatedVideo={relatedVideo}
              API_KEY={API_KEY}
            />

          )}
        </div>


        <div className="comments-section space-y-2 !mt-0">
          <div className="flex items-end space-x-8">
            <span className="comments-count text-lg">
              {video?.items[0]?.statistics.commentCount / 1000 < 1
                ? video?.items[0]?.statistics.commentCount
                : (video?.items[0]?.statistics.commentCount / 1000)
                  .toFixed(3)
                  .replace('.', ',')}

              <span className="ml-1">Comments</span>
            </span>
            <span className="flex space-x-2 font-bold">
              <SortIcon /> <span>Sort by</span>
            </span>
          </div>

          <WriteComment API_KEY={API_KEY} videoId={videoId} />

          {comments.items
            ? comments.items.map((comment, i) => (
              <Comment key={i} comment={comment} />
            ))
            : ''}
        </div>
      </div>

      {/* show suggested videos in the second column on desktop */}
      <div className="second-col hidden md:block md:w-[30%] space-y-4">
        {relatedVideos?.items?.map((relatedVideo, i) =>
          <SuggestedVideo
            key={i}
            relatedVideo={relatedVideo}
            API_KEY={API_KEY}
          />

        )}
      </div>
    </div>
  );
};

export default VideoPage;
