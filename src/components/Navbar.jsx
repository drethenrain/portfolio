import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch';

export function Navbar() {
  return (
    <nav className="navbar">
      drethenrain
      <ul>
        <li>
          <Link to="#">projects</Link>
        </li>
      </ul>
      <ThemeSwitch />
    </nav>
  );
}
