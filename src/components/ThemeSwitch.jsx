import React, { useState, useEffect } from 'react';

import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

export function ThemeSwitch() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <span id="change-theme" onClick={() => setTheme(!theme)}>
      <img src={theme ? sun : moon} />
    </span>
  );
}
