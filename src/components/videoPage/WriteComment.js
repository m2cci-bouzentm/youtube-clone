import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import MyContext from '../../MyContext';

const WriteComment = ({ API_KEY, videoId }) => {
  const [isInputOnFocus, setIsInputOnFocus] = useState(false);
  const { isUserSignIn, user } = useContext(MyContext);

  return isUserSignIn ? (
    <>
      <div className="user-own-comment">
        <div className="flex items-center space-x-4">
          <img
            src={user.photoURL}
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
            type="button"
            onClick={() => setIsInputOnFocus(false)}
          >
            Cancel
          </button>
          <button
            className="flex items-center font-bold text-white  bg-[#065fd4] hover:bg-[#044396] active:bg-[#1f6cd0] rounded-full p-3 px-4"
            type="button"
          >
            Comment
          </button>
        </div>
      </div>
    </>
  ) : (
    ''
  );
};

export default WriteComment;
