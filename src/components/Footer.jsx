import React from 'react';
import github from '../assets/github.svg';

export function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/drethenrain">
          {' '}
          <img src={github} alt="github" id="github-icon" />
        </a>
      </div>
    </footer>
  );
}
