import React from 'react';
import ToastButton from 'src/components/ToastButton';

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <ToastButton text="Success" type="success" />
      </div>
    </>
  );
};

export default HomePage;
