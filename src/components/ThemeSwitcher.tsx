import React, { useState, useEffect } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return storedTheme === 'dark' || (!storedTheme && prefersDark);
  });

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      {isDark ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeSwitcher;