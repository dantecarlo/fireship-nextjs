import './Spinner.module.css';

import { FC } from 'react';

import { ISpinner } from './Spinner.types';

const Spinner: FC<ISpinner> = ({ show }) => {
  return show ? <div className="loader" /> : null;
};

export default Spinner;
