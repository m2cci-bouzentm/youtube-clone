import React, { useContext } from 'react';
import { ProfileIcon } from '../icons/Icons';
import MyContext from '../../MyContext';

import { provider, auth } from '../../firebase.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)({
  color: '#1350c1',
  outline: '#1350c1',
  fontFamily: 'inherit',
  borderRadius: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // width: 'max-content',
  padding: '5px 10px',
  '&:hover': {},
});

const SignInBtn = () => {
  const { setIsUserSignIn, setUser } = useContext(MyContext);

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      if (user) {
        setUser(user);
        setIsUserSignIn(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <ColorButton className='' variant="outlined" onClick={handleClick}>
        <ProfileIcon />
        <span>Sign In</span>
      </ColorButton>
    </>
  );
};

export default SignInBtn;
