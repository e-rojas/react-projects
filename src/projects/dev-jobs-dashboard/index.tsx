import React from 'react';
import './dashboard.css';
import useSetColorTheme from './useSetColorTheme';
import 'reflect-metadata';
import ToggleSwitch from './components/ToggleSwitch';
import JobsMainSection from './components/JobsMain.section';
import { Link, Route, Routes } from 'react-router-dom';
const DevJobsDashboard: React.FC = () => {
  const { theme, toggleTheme } = useSetColorTheme();

  return (
    <div className='dev-dashboard w-100' data-theme={theme}>
      <header className='dev-dashboard__header'>
        <Link className='dev-job-link text-white' to='/dev-jobs-dashboard'>
          <h1 className='dev-dashboard__title'>devJobs</h1>
        </Link>
        <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
      </header>
      <Routes>
        <Route path='/' element={<JobsMainSection />} />
        <Route path='/:id' element={<JobDetails />} />
      </Routes>
    </div>
  );
};

export default DevJobsDashboard;

const JobDetails: React.FC = () => {
  return (
    <div className='vh-100 '>
      <h1>Job Details</h1>
    </div>
  );
};
