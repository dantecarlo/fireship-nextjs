'use client';

import { FC } from 'react';
import toast from 'react-hot-toast';

import { IToastButton } from './ToastButton.types';

const ToastButton: FC<IToastButton> = ({ text, type }) => {
  return (
    <button type="button" onClick={() => toast[`${type}`]('hello toast!')}>
      {text}
    </button>
  );
};

export default ToastButton;
