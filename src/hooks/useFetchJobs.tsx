import React from 'react';
import HttpService from '../services/HttpService';

import Job from '../types/Job';

const useFetchJobs = () => {
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(false);
  const [initialJobs, setInitialJobs] = React.useState<Job[]>([]);

  const fetchJobs = async () => {
    setLoading(true);
    setError(false);
    HttpService.fetch<Job[]>('jobs')
      .then((res) => {
        setJobs(res);
        setHasMore(res.length > 6);
        setInitialJobs(res.slice(0, 6));
        setIndex(6);
        setLoading(false);
      })

      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  const loadMore = () => {
    setInitialJobs((prevJobs) => [
      ...prevJobs,
      ...jobs.slice(index, index + 6),
    ]);
    setHasMore(jobs.length > index + 6);
    setIndex(index + 6);
  };

  React.useEffect(() => {
    fetchJobs();
  }, []);

  return {
    jobs,
    loading,
    error,
    index,
    setIndex,
    hasMore,
    initialJobs,
    loadMore,
  };
};

export default useFetchJobs;
