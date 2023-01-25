import SignInButton from './components/SignInButton';
import SignOutButton from './components/SignOutButton';
import UsernameForm from './components/UsernameForm';

const EnterPage = () => {
  const user = null;
  const username = null;

  // eslint-disable-next-line no-nested-ternary
  return <main>{user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}</main>;
};

export default EnterPage;
