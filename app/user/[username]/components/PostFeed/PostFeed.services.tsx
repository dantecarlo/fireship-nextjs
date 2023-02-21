import { getPublishedPosts } from 'src/firebase';

export const getPost = async (username: string) => {
  const posts = await getPublishedPosts(username);

  return posts;
};
