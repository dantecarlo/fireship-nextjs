import { useContextDispatch, useStateDispatch } from 'src/context/Context.provider';
import { userActions } from 'src/context/Context.types';

const useUserContext = () => {
  const { username, name } = useStateDispatch();

  const dispatch = useContextDispatch();

  const setUsername = (newUsername: string) => {
    dispatch({
      type: userActions.SET_USERNAME,
      payload: newUsername
    });
  };

  const setName = (newName: string) => {
    dispatch({
      type: userActions.SET_NAME,
      payload: newName
    });
  };

  return {
    username,
    name,
    setUsername,
    setName
  };
};

export default useUserContext;
