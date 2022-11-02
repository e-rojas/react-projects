import React from 'react';
import SearchBar from './SearchBar';
import useFetchJobs from '../../../hooks/useFetchJobs';
import JobCard from './JobCard';

interface Props {}

const JobsMainSection: React.FC<Props> = () => {
  const { loading, error, hasMore, initialJobs, loadMore, setInitialJobs } =
    useFetchJobs();

  return (
    <section className='dev-dashboard__wrapper'>
      <SearchBar setInitialJobs={setInitialJobs} initialJobs={initialJobs} />
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
          {initialJobs.map((job) => (
            <JobCard key={job._id} {...job} />
          ))}
        </div>
      )}
      {hasMore && (
        <button
          className='db-button btn-primary mobile-w-100'
          onClick={() => loadMore()}
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default JobsMainSection;
