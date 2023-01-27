import React, { FC } from 'react';

import { IUserPage } from './UserPage.types';

const UserPage: FC<IUserPage> = ({ params }) => {
  const { username } = params;

  return <h1>UserPage {username}</h1>;
};

export default UserPage;
