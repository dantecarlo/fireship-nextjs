import { FC } from 'react';

import { IUserNameMessage } from './UserNameMessage.types';

const UserNameMessage: FC<IUserNameMessage> = ({ username: userName, isValid, loading }) => {
  if (loading) {
    return <p>Checking...</p>;
  }
  if (isValid) {
    return <p className="text-success">{userName} is available!</p>;
  }
  if (userName && !isValid) {
    return <p className="text-danger">That username is taken!</p>;
  }
  return <p />;
};

export default UserNameMessage;
