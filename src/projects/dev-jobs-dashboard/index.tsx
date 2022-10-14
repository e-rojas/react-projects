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
        <div className='dev-dashboard__search '>
          <div className='w-33 border-rigth'>
            <form className='nosubmit w-100'>
              <input
                type='search'
                placeholder='Filter by title, companies, expertise..'
                className='nosubmit'
              />
            </form>
          </div>
          <div className='w-33 border-rigth'>
            <form className='location w-100'>
              <input
                type='search'
                placeholder='Filter by location..'
                className='location'
              />
            </form>
          </div>
          <div className='wrapper'>
            {/* create a check with label on the right with title full time only */}
            <input
              type='checkbox'
              id='full-time'
              name='full-time'
              value='full-time'
            />
            <label htmlFor='full-time'>Full Time Only</label>
            <button className='submit-btn'>Search</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevJobsDashboard;
