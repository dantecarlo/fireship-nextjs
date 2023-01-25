'use client';

import { createContext, Dispatch, FC, useContext, useReducer } from 'react';

import { IContextProvider, IUserState, UserAction } from './Context.types';
import userReducer, { initialUserState } from './reducers/user.reducer';

export const StateContext = createContext<IUserState>(initialUserState);
export const DispatchContext = createContext<Dispatch<UserAction>>(() => {});

export const ContextProvider: FC<IContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useContextDispatch = () => useContext(DispatchContext);
export const useStateDispatch = () => useContext(StateContext);
