import { User } from 'firebase/auth';

export interface IContextProvider {
  children?: React.ReactNode;
}

export interface IUserState {
  user: User | null | undefined;
  username: string;
}

export interface UserAction {
  type: keyof typeof USER_ACTIONS;
  payload: string | User | null | undefined;
}

export const USER_ACTIONS = {
  SET_USERNAME: 'SET_USERNAME',
  SET_USER: 'SET_USER'
} as const;
