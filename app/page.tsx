import React from 'react';
import ToastButton from 'src/components/ToastButton';
import { getAllPublishedPosts } from 'src/firebase';

import PostFeed from './user/[username]/components/PostFeed';
import { PAGINATION_QUERY } from './user/[username]/components/PostFeed/PostFeed.types';

export const dynamic = 'force-dynamic';

const HomePage = async () => {
  const posts = await getAllPublishedPosts();

  return (
    <main>
      <h1>Home</h1>
      <div>
        <ToastButton text="Success" type="success" />
        <PostFeed paginationQuery={PAGINATION_QUERY.ALL_POSTS} posts={posts} />
      </div>
    </main>
  );
};

export default HomePage;
