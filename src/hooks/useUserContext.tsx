'use client';

import { User } from 'firebase/auth';
import { useContextDispatch, useStateDispatch } from 'src/context/Context.provider';
import { userActions } from 'src/context/Context.types';

const useUserContext = () => {
  const { username, user } = useStateDispatch();

  const dispatch = useContextDispatch();

  const setUsername = (newUsername: string) => {
    dispatch({
      type: userActions.SET_USERNAME,
      payload: newUsername
    });
  };

  const setUser = (newUser: User | undefined | null) => {
    dispatch({
      type: userActions.SET_USER,
      payload: newUser
    });
  };

  return {
    username,
    user,
    setUsername,
    setUser
  };
};

export default useUserContext;
