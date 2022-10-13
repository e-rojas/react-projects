import React from 'react';
import useLocalStorage from 'use-local-storage';
import './dashboard.css';
const DevJobsDashboard: React.FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
  return (
    <div className='dev-dashboard' data-theme={theme}>
      <h1>Dev Jobs Dashboard</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'dark' ? 'light' : 'dark'} mode
      </button>
    </div>
  );
};

export default DevJobsDashboard;
