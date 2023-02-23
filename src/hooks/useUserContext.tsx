'use client';

import { User } from 'firebase/auth';
import { useContextDispatch, useStateDispatch } from 'src/context/Context.provider';
import { USER_ACTIONS } from 'src/context/Context.types';

const useUserContext = () => {
  const { username, user } = useStateDispatch();

  const dispatch = useContextDispatch();

  const setUsername = (newUsername: string) => {
    dispatch({
      type: USER_ACTIONS.SET_USERNAME,
      payload: newUsername
    });
  };

  const setUser = (newUser: User | undefined) => {
    dispatch({
      type: USER_ACTIONS.SET_USER,
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
