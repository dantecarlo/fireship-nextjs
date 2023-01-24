'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HOME_ROUTE_INDEX, routes } from 'src/constants';
import i18n from 'src/i18n/en.json';

const Navbar = () => {
  const homeRoute = routes[HOME_ROUTE_INDEX];
  const username = null;
  const user = {
    photoURL: 'https://picsum.photos/200'
  };

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
              <Link href="/admin">
                <button className="btn-blue" type="button">
                  {i18n.component.navbar.writePost}
                </button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <Image alt="user profile image" src={user?.photoURL} />
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
