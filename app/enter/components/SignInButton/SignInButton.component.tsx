'use client';

import { signInWithPopup } from 'firebase/auth';
import Image from 'next/image';
import { auth, googleAuthProvider } from 'src/firebase/firebase';

const SignInButton = () => {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className="btn-google" type="button" onClick={signInWithGoogle}>
      <Image alt="google logo" height={24} src="/google.png" width={0} /> Sign in with Google
    </button>
  );
};

export default SignInButton;
