import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const WriteComment = () => {
  const [isInputOnFocus, setIsInputOnFocus] = useState(false);

  return (
    <>
      <div className="user-own-comment">
        <div className="flex items-center space-x-4">
          <img
            src="https://yt3.ggpht.com/yti/AHyvSCD5KEYZZpZXBtp3M0pCoB3itOhAJALbIpPM4w=s88-c-k-c0x00ffffff-no-rj"
            alt="user-pic"
            className="rounded-full w-[40px] h-[40px]"
          />
          <div className="w-full h-[80px]">
            <TextField
              id="standard-basic"
              label="Add a comment..."
              variant="standard"
              fullWidth
              onFocus={() => setIsInputOnFocus(true)}
            />
          </div>
        </div>

        <div
          className={`flex justify-end space-x-4 text-sm ${!isInputOnFocus ? 'hidden' : ''
            }`}
        >
          <button
            className="flex items-center font-bold hover:bg-[#e5e5e5] active:bg-[#cecece] rounded-full p-3 px-4"
            onClick={() => setIsInputOnFocus(false)}
          >
            Cancel
          </button>
          <button className="flex items-center font-bold text-white  bg-[#065fd4] hover:bg-[#044396] active:bg-[#1f6cd0] rounded-full p-3 px-4">
            Comment
          </button>
        </div>
      </div>
    </>
  );
};

export default WriteComment;
