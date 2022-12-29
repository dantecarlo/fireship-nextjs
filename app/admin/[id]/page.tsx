import React, { FC } from 'react';

import { IAdminPage } from './adminPage.types';

const AdminPage: FC<IAdminPage> = ({ params }) => {
  const { id } = params;

  return <h1>AdminPage {id}</h1>;
};

export default AdminPage;
