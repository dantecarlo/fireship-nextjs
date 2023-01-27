'use client';

import { auth } from 'src/firebase';

const SignOutButton = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <button className="btn-google" type="button" onClick={signOut}>
      Sign out
    </button>
  );
};

export default SignOutButton;
