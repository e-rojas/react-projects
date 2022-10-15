import React from 'react';
import Toggle from 'react-toggle';
import './dashboard.css';
import 'react-toggle/style.css';
import useSetColorTheme from './useSetColorTheme';
import SearchBar from './components/SearchBar';
import { HiMoon } from 'react-icons/hi';
import { BsFillSunFill } from 'react-icons/bs';
const DevJobsDashboard: React.FC = () => {
  const { theme, toggleTheme } = useSetColorTheme();

  return (
    <div className='dev-dashboard w-100' data-theme={theme}>
      <header className='dev-dashboard__header'>
        <h1 className='dev-dashboard__title'>devJobs</h1>
        <div className='toggle__wrapper'>
          <BsFillSunFill className='m-r' />
          <Toggle
            className='custom-classname'
            defaultChecked={theme === 'dark'}
            icons={false}
            onChange={toggleTheme}
          />
          <HiMoon className='m-l' />
        </div>
      </header>
      <section className='dev-dashboard__wrapper'>
        <SearchBar />
      </section>
    </div>
  );
};

export default DevJobsDashboard;
