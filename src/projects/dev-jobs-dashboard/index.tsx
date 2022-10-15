import React from 'react';
import './dashboard.css';
import 'react-toggle/style.css';
import useSetColorTheme from './useSetColorTheme';
import SearchBar from './components/SearchBar';

import ToggleSwitch from './components/ToggleSwitch';
const DevJobsDashboard: React.FC = () => {
  const { theme, toggleTheme } = useSetColorTheme();

  return (
    <div className='dev-dashboard w-100' data-theme={theme}>
      <header className='dev-dashboard__header'>
        <h1 className='dev-dashboard__title'>devJobs</h1>
        <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
      </header>
      <section className='dev-dashboard__wrapper'>
        <SearchBar />
      </section>
    </div>
  );
};

export default DevJobsDashboard;
