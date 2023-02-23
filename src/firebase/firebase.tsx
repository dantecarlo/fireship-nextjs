import { PostType } from 'app/user/[username]/components/PostItem/PostItem.types';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
  collection,
  collectionGroup,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
  Timestamp,
  where,
  writeBatch
} from 'firebase/firestore/lite';

import { PAGINATION_LIMIT } from './firebase.constants';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const isBrowser = typeof window !== 'undefined';
export const analytics = isBrowser ? getAnalytics(app) : null;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const batch = writeBatch(db);

export const getDocumentRef = (documentName: string) => doc(db, documentName);

export const getDocument = async (documentName: string) => {
  const documentQuery = await getDoc(getDocumentRef(documentName));

  return documentQuery;
};

export const getCollectionRef = (collectionName: string) => {
  const collectionRef = collection(db, collectionName);

  return collectionRef;
};

export const getUserWithUsername = async (username: string) => {
  const userRef = getCollectionRef('users');
  const q = query(userRef, where('username', '==', username));

  const documentQuery = await getDocs(q);
  const userDoc = documentQuery.docs[0];

  return userDoc;
};

export const postToJSON = (documentRef: QueryDocumentSnapshot<DocumentData>) => {
  const data = documentRef.data();

  return {
    ...data,
    id: documentRef.id,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis()
  };
};

export const getPublishedPosts = async (username: string, startAfterPost?: Timestamp | number) => {
  const userRef = await getUserWithUsername(username);
  const cursor =
    startAfterPost && typeof startAfterPost === 'number'
      ? Timestamp.fromMillis(startAfterPost)
      : startAfterPost;

  const postsRef = collection(db, `users/${userRef?.id}/posts`);
  const q = startAfterPost
    ? query(
        postsRef,
        where('published', '==', true),
        orderBy('createdAt', 'desc'),
        startAfter(cursor),
        limit(PAGINATION_LIMIT)
      )
    : query(
        postsRef,
        where('published', '==', true),
        orderBy('createdAt', 'desc'),
        limit(PAGINATION_LIMIT)
      );

  const documentQuery = await getDocs(q);
  const posts = documentQuery.docs.map(postToJSON);

  return posts as unknown as PostType[];
};

export const getAllPublishedPosts = async (startAfterPost?: Timestamp | number) => {
  const postsRef = collectionGroup(db, 'posts');
  const cursor =
    startAfterPost && typeof startAfterPost === 'number'
      ? Timestamp.fromMillis(startAfterPost)
      : Timestamp.fromMillis((startAfterPost as Timestamp)?.toMillis());

  const q = startAfterPost
    ? query(
        postsRef,
        where('published', '==', true),
        orderBy('createdAt', 'desc'),
        startAfter(cursor),
        limit(PAGINATION_LIMIT)
      )
    : query(
        postsRef,
        where('published', '==', true),
        orderBy('createdAt', 'desc'),
        limit(PAGINATION_LIMIT)
      );

  const documentQuery = await getDocs(q);
  const posts = documentQuery.docs.map(postToJSON);

  return posts as unknown as PostType[];
};
