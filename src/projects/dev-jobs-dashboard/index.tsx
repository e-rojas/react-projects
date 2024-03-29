import React from 'react';
import './dashboard.css';
import useSetColorTheme from './useSetColorTheme';
import 'reflect-metadata';
import ToggleSwitch from './components/ToggleSwitch';
import JobsMainSection from './components/JobsMain.section';
import { Link, Route, Routes } from 'react-router-dom';
import JobDetails from './components/JobDetails.section';
import JobApplicationSection from './components/JobApplication.section';
import { SearchJobsContextProvider } from '../../context/jobs-project/SearchJobs.context';

const DevJobsDashboard: React.FC = () => {
  const { theme, toggleTheme } = useSetColorTheme();

  return (
    <SearchJobsContextProvider>
      <div className='dev-dashboard w-100' data-theme={theme}>
        <header className='dev-dashboard__header'>
          <Link className='dev-job-link text-white' to='/dev-jobs-dashboard'>
            <h1 className='dev-dashboard__title'>devJobs</h1>
          </Link>
          <Link
            to='/dev-jobs-dashboard/login'
            className='no-underline text-white'
          >
            <span className='text-2xl font-bold'>Login</span>
          </Link>
          <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
        </header>
        <Routes>
          <Route path='/' element={<JobsMainSection />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:id' element={<JobDetails />} />
          <Route path='/:id/:company' element={<JobApplicationSection />} />
        </Routes>
      </div>
    </SearchJobsContextProvider>
  );
};

export default DevJobsDashboard;

function Login() {
  return (
    <div className='h-5/6'>
      <h1>Login</h1>
    </div>
  );
}