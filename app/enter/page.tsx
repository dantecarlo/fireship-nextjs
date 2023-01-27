'use client';

import useUserContext from 'src/hooks/useUserContext';

import SignInButton from './components/SignInButton';
import SignOutButton from './components/SignOutButton';
import UsernameForm from './components/UsernameForm';

const EnterPage = () => {
  const { user, username } = useUserContext();

  // eslint-disable-next-line no-nested-ternary
  return (
    <main>
      {user && !username ? <UsernameForm /> : <SignInButton />}
      {user && <SignOutButton />}
    </main>
  );
};

export default EnterPage;
