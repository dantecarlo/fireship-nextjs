import React, { FC } from 'react';

const UserPage: FC<IUserPage> = ({ params }) => {
  const { username } = params;

  return <h1>UserPage {username}</h1>;
};

export default UserPage;
