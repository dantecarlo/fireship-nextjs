export interface IContextProvider {
  children?: React.ReactNode;
}

export interface IUserState {
  name: string;
  username: string;
}

export interface UserAction {
  type: string;
  payload: string;
}

export const userActions = {
  SET_USERNAME: 'SET_USERNAME',
  SET_NAME: 'SET_NAME'
};
