import { IUserState, UserAction, userActions } from '../Context.types';

export const initialUserState: IUserState = {
  username: '',
  name: ''
};

const userReducer = (state: IUserState, action: UserAction): IUserState => {
  switch (action.type) {
    case userActions.SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case userActions.SET_NAME:
      return {
        ...state,
        name: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
