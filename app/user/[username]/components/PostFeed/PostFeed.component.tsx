import PostItem from '../PostItem';
import { getPost } from './PostFeed.services';
import { IPostFeed } from './PostFeed.types';

const PostFeed = async ({ username }: IPostFeed) => {
  const posts = await getPost(username);

  return posts
    ? posts.map((post, index) => {
        const postKey = `post-key-${index}-${post.slug}}`;

        return <PostItem admin={false} key={postKey} post={post} />;
      })
    : null;
};

export default PostFeed;
