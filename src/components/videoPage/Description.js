import React, { useState } from 'react';

const Description = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsShowMore(true)}
        className={`description bg-[#f2f2f2] hover:bg-[#e5e5e5] rounded-2xl p-4 pb-8 cursor-pointer ${isShowMore ? 'pointer-events-none cursor-auto' : ''
          }`}
      >
        <div className="space-x-4">
          <span>608K views</span>
          <span>2 years ago</span>
        </div>
        <div>
          The Score – “Unstoppable” (Official Lyric Video) Taken from the album
          ATLAS
          <span className={isShowMore ? 'hidden' : ''}>...</span>
          <span className={isShowMore ? '' : 'hidden'}>
            <span> </span>
            Stream/Download our new album ‘Carry On’ Now:
            https://TheScore.lnk.to/CarryOn ATLAS Available Here:
            https://republic.lnk.to/TheScoreAtlasYD Subscribe for more official
            content from The Score: https://TheScore.lnk.to/YTSubscribe
            Exclusive Merch: https://thescoremusic.myshopify.com/ Best of The
            Score: https://goo.gl/NVY8CP Connect with The Score:
            http://www.thescoremusic.com https://instagram.com/thescoremusic
            https://twitter.com/thescoremusic
            https://facebook.com/TheScoreOfficial Directed by Peter Reeve
            Animated by James Wragg For RMV Productions Music video by The Score
            performing Unstoppable. © 2017 Republic Records, a division of UMG
            Recordings, Inc. http://vevo.ly/8qd1ox
          </span>
        </div>
      </div>
      <button
        className="show-more-btn font-bold px-4 relative bottom-[42px]"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {!isShowMore ? 'Show more' : 'Show less'}
      </button>
    </>
  );
};

export default Description;
