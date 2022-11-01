import { useContext } from 'react';
import { SearchJobsContext } from './SearchJobs.context';

export const useSearchContext = () => {
  return useContext(SearchJobsContext);
};
