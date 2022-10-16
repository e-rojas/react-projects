import React from 'react';
import './dashboard.css';
import useSetColorTheme from './useSetColorTheme';
import SearchBar from './components/SearchBar';
import 'reflect-metadata';
import ToggleSwitch from './components/ToggleSwitch';
import JobCard from './components/JobCard';
import useFetchJobs from '../../hooks/useFetchJobs';
const DevJobsDashboard: React.FC = () => {
  const { theme, toggleTheme } = useSetColorTheme();
  const { jobs, loading, error } = useFetchJobs();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error. Try Refreshing.</h1>;

  return (
    <div className='dev-dashboard w-100' data-theme={theme}>
      <header className='dev-dashboard__header'>
        <h1 className='dev-dashboard__title'>devJobs</h1>
        <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
      </header>
      <section className='dev-dashboard__wrapper'>
        <SearchBar />
        <div className='dev-dashboard__jobs grid-3 grid-row-gap-50'>
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DevJobsDashboard;
