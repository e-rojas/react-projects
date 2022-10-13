import React from 'react';
import Toggle from 'react-toggle';
import './dashboard.css';
import 'react-toggle/style.css';
import useSetColorTheme from './useSetColorTheme';
const DevJobsDashboard: React.FC = () => {
  const { theme, toggleTheme } = useSetColorTheme();

  return (
    <div className='dev-dashboard w-100' data-theme={theme}>
      <header className='dev-dashboard__header'>
        <h1 className='dev-dashboard__title'>devJobs</h1>
        <Toggle
          className='custom-classname'
          defaultChecked={theme === 'dark'}
          icons={false}
          onChange={toggleTheme}
        />
      </header>
      <section className='dev-dashboard__wrapper'>
        <div className='dev-dashboard__search'>search</div>
      </section>
    </div>
  );
};

export default DevJobsDashboard;
