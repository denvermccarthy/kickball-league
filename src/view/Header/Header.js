import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <ul>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/players'}>Players</NavLink>
      </li>
      <li>
        <NavLink to={'/teams'}>Teams</NavLink>
      </li>
    </ul>
  );
}
