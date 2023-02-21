import { User } from 'firebase/auth';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, getDocument } from 'src/firebase';

import useUserContext from './useUserContext';

const useAuthFirebaseHook = () => {
  const [user] = useAuthState(auth);
  const { username, setUsername, setUser } = useUserContext();

  const getUser = async () => {
    const userDoc = await getDocument(`users/${user?.uid}`);

    setUsername(userDoc.data()?.username);
    setUser(user as User);
  };

  useEffect(() => {
    if (!isEmpty(user)) {
      getUser();
    } else {
      setUsername('');
      setUser(undefined);
    }
  }, [user]);

  return { username, user };
};

export default useAuthFirebaseHook;
