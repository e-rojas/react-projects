import React from 'react';
import HttpService from '../services/HttpService';

import Job from '../types/Job';

const useFetchJobs = () => {
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setError(false);
    HttpService.fetch<Job[]>('jobs')
      .then((jobs) => {
        setJobs(jobs);
        setLoading(false);
        setHasMore(true);
        setPage(1);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return { jobs, loading, error, page, hasMore };
};

export default useFetchJobs;
