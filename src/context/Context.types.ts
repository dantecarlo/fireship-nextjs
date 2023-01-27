import { User } from 'firebase/auth';

export interface IContextProvider {
  children?: React.ReactNode;
}

export interface IUserState {
  user: User | null | undefined;
  username: string;
}

export interface UserAction {
  type: string;
  payload: string | User | null | undefined;
}

export const userActions = {
  SET_USERNAME: 'SET_USERNAME',
  SET_USER: 'SET_USER'
};
