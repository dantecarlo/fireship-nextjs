import { Timestamp } from 'firebase/firestore/lite';

export type PostType = {
  id: string;
  slug: string;
  username: string;
  title: string;
  content: string;
  heartCount?: number;
  published?: boolean;
  createdAt?: number | Timestamp;
  updatedAt?: number | Timestamp;
};

export interface IPostItem {
  post: PostType;
  admin: boolean;
}
