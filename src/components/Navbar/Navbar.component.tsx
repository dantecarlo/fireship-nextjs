'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HOME_ROUTE_INDEX, routes } from 'src/constants';
import useAuthFirebaseHook from 'src/hooks/useAuthFirebaseHook';
import i18n from 'src/i18n/en.json';

const Navbar = () => {
  const { user, username } = useAuthFirebaseHook();
  const homeRoute = routes[HOME_ROUTE_INDEX];

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href={homeRoute.route}>
            <button className="btn-logo" type="button">
              {homeRoute.label}
            </button>
          </Link>
        </li>

        {username ? (
          <>
            <li className="push-left">
              <Link href="/post">
                <button className="btn-blue" type="button">
                  {i18n.component.navbar.writePost}
                </button>
              </Link>
            </li>
            <li>
              <Link href={`/user/${username}`}>
                <Image
                  alt="user profile image"
                  height={16}
                  src={user?.photoURL as string}
                  width={16}
                />
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/enter">
              <button className="btn-blue" type="button">
                {i18n.component.navbar.login}
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
