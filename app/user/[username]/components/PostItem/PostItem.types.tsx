export type PostType = {
  id: string;
  slug: string;
  username: string;
  title: string;
  content: string;
  heartCount?: number;
  published?: boolean;
};

export interface IPostItem {
  post: PostType;
  admin: boolean;
}
