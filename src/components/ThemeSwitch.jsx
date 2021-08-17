import { useState, useEffect } from 'react';

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
      <i className={`uil ${theme ? 'uil-moon' : 'uil-sun'} `}></i>
    </span>
  );
}
