import { debounce } from 'lodash';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { batch, getDocRef, getDocument } from 'src/firebase';
import useUserContext from 'src/hooks/useUserContext';

import UserNameMessage from '../UserNameMessage';

const UsernameForm = () => {
  const { user, username, setUsername } = useUserContext();

  const [usernameValue, setUsernameValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const userDoc = getDocRef(`users/${user?.uid}`);
    const usernameDoc = getDocRef(`usernames/${usernameValue}`);

    batch.set(
      userDoc,
      {
        username: usernameValue,
        photoURL: user?.photoURL,
        displayName: user?.displayName
      },
      { merge: true }
    );
    batch.set(usernameDoc, { uid: user?.uid }, { merge: true });

    await batch.commit();
  };

  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Force form value typed in form to match correct format
    const usernameField = e.target.value.toLowerCase();
    const validUserNameRegex = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    // Only set form value if length is < 3 OR it passes regex
    if (usernameField.length < 3) {
      setUsernameValue(usernameField);
      setLoading(false);
      setIsValid(false);
    }

    if (validUserNameRegex.test(usernameField)) {
      setUsernameValue(usernameField);
      setLoading(true);
      setIsValid(false);
      setUsername(usernameField);
    }
  };

  // Hit the database for username match after each debounced change
  // useCallback is required for debounce to work
  const checkUsername = useCallback(
    debounce(async (debounceUsername) => {
      if (debounceUsername.length >= 3) {
        const userDoc = await getDocument(`usernames/${debounceUsername}`);
        setIsValid(!userDoc.exists());
        setLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    checkUsername(usernameValue);
  }, [usernameValue]);

  return !username ? (
    <section>
      <h3>Choose Username</h3>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="myname"
          value={usernameValue}
          onChange={onUserNameChange}
        />
        <UserNameMessage isValid={isValid} loading={loading} username={usernameValue} />
        <button className="btn-green" disabled={!isValid} type="submit">
          Choose
        </button>

        <h3>Debug State</h3>
        <div>
          Username: {usernameValue}
          <br />
          Loading: {loading.toString()}
          <br />
          Username Valid: {isValid.toString()}
        </div>
      </form>
    </section>
  ) : null;
};

export default UsernameForm;
