'use client';

import Image from 'next/image';
import React from 'react';
import useAuthFirebaseHook from 'src/hooks/useAuthFirebaseHook';

const UserProfile = () => {
  const { user, username } = useAuthFirebaseHook();

  return (
    <div className="box-center">
      <Image
        alt="user"
        className="card-img-center"
        height={150}
        src={user?.photoURL || '/hacker.png'}
        width={50}
      />
      <p>
        <i>@{username}</i>
      </p>
      <h1>{user?.displayName || 'Anonymous User'}</h1>
    </div>
  );
};

export default UserProfile;
