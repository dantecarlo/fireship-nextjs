import { User } from 'firebase/auth';

import { IUserState, UserAction, USER_ACTIONS } from '../Context.types';

export const initialUserState: IUserState = {
  username: '',
  user: null as unknown as User
};

const userReducer = (state: IUserState, action: UserAction): IUserState => {
  switch (action.type) {
    case USER_ACTIONS.SET_USERNAME:
      return {
        ...state,
        username: action.payload as string
      };
    case USER_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload as User | undefined | null
      };

    default:
      return state;
  }
};

export default userReducer;
