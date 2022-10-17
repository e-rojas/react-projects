import React from 'react';
import SearchBar from './SearchBar';
import useFetchJobs from '../../../hooks/useFetchJobs';
import JobCard from './JobCard';
import Delay from './Delay.animation';
const JobsMainSection: React.FC = () => {
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Delay delay={500} className='dev-dashboard__wrapper'>
      x <SearchBar />
      {loading ? (
        <div className='vh-100'>
          <h1>Loading...</h1>
        </div>
      ) : error ? (
        <div className='vh-100'>
          <h1>Error. Try Refreshing.</h1>
        </div>
      ) : (
        <div className='dev-dashboard__jobs grid-3 grid-row-gap-50'>
          {jobs.map((job) => (
            <JobCard key={job._id} {...job} />
          ))}
        </div>
      )}
    </Delay>
  );
};

export default JobsMainSection;
