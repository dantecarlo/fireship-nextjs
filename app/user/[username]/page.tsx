import React from 'react';

import PostFeed from './components/PostFeed';
import { getPost } from './components/PostFeed/PostFeed.services';
import { PAGINATION_QUERY } from './components/PostFeed/PostFeed.types';
import UserProfile from './components/UserProfile/index';
import { IUserPage } from './UserPage.types';

export const dynamic = 'force-dynamic';

const UserPage = async ({ params }: IUserPage) => {
  const { username } = params;
  const posts = await getPost(username);

  return (
    <main>
      <UserProfile />
      <PostFeed paginationQuery={PAGINATION_QUERY.USER_POSTS} posts={posts} username={username} />
    </main>
  );
};

export default UserPage;
