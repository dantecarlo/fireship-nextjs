'use client';

import { auth } from 'src/firebase';

const SignOutButton = () => {
  return (
    <button className="btn-google" type="button" onClick={() => auth.signOut()}>
      Sign in with Google
    </button>
  );
};

export default SignOutButton;
