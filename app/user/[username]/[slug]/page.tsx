import React, { FC } from 'react';

import { IUserPageSlug } from './userNameSlug.types';

const UserPageSlug: FC<IUserPageSlug> = ({ params }) => {
  const { slug } = params;

  return <h1>UserPageSlug {slug}</h1>;
};

export default UserPageSlug;
