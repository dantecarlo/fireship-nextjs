'use client';

import { FC, useState } from 'react';
import { Spinner } from 'src/components/Spinner';
import { getAllPublishedPosts, getPublishedPosts } from 'src/firebase';
import { PAGINATION_LIMIT } from 'src/firebase/firebase.constants';

import PostItem from '../PostItem';
import { PostType } from '../PostItem/PostItem.types';
import { IPostFeed, PAGINATION_QUERY } from './PostFeed.types';

const PostFeed: FC<IPostFeed> = ({ posts: queryPosts, paginationQuery, username }) => {
  const [posts, setPosts] = useState(queryPosts);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const query = () => {
    const postLength = posts.length;
    const lastPost = postLength > 0 ? posts[postLength - 1] : ({} as PostType);

    switch (paginationQuery) {
      case PAGINATION_QUERY.ALL_POSTS:
        return getAllPublishedPosts(lastPost.createdAt);

      case PAGINATION_QUERY.USER_POSTS:
        return getPublishedPosts(username as string, lastPost.createdAt);

      default:
        return [];
    }
  };

  const getMorePosts = async () => {
    setLoadingPosts(() => true);

    const newPosts = await query();
    console.log(posts);
    console.log(newPosts);
    setPosts((prevPost) => [...prevPost, ...newPosts]);

    setLoadingPosts(() => false);

    if (newPosts.length < PAGINATION_LIMIT) {
      setPostsEnd(() => true);
    }
  };

  return posts ? (
    <>
      {posts.map((post, index) => {
        const postKey = `post-key-${index}-${post.slug}}`;

        return <PostItem admin={false} key={postKey} post={post} />;
      })}

      {!loadingPosts && !postsEnd && (
        <button type="button" onClick={getMorePosts}>
          Load more
        </button>
      )}

      <Spinner show={loadingPosts} />

      {postsEnd && 'You have reached the end!'}
    </>
  ) : null;
};

export default PostFeed;
