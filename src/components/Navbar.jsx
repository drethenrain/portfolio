import { Link } from 'react-router-dom';

import { ThemeSwitch } from './ThemeSwitch';

export function Navbar() {
  return (
    <nav className="nav">
      drethenrain
      <ul className="nav-list">
        <li>
          <Link to="#">projects</Link>
        </li>
      </ul>
      <ThemeSwitch />
    </nav>
  );
}
