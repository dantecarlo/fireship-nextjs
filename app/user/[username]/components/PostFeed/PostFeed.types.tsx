import { PostType } from '../PostItem/PostItem.types';

export const PAGINATION_QUERY = {
  USER_POSTS: 'USER_POSTS',
  ALL_POSTS: 'ALL_POSTS'
} as const;

export interface IPostFeed {
  posts: PostType[];
  paginationQuery?: keyof typeof PAGINATION_QUERY;
  username?: string;
}
