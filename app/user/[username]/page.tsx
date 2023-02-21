import React, { FC } from 'react';

import PostFeed from './components/PostFeed';
import UserProfile from './components/UserProfile/index';
import { IUserPage } from './UserPage.types';

const UserPage: FC<IUserPage> = ({ params }) => {
  const { username } = params;

  return (
    <main>
      <UserProfile />
      {/* @ts-expect-error Server Component */}
      <PostFeed username={username} />
    </main>
  );
};

export default UserPage;
