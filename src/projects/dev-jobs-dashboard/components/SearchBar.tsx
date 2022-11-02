import React from 'react';
import SmartFormInput from './SmartFormInput';

import { useSearchContext } from '../../../context/jobs-project/useSearchContext.hook';
import Job from '../../../types/Job';

interface Props {
  setInitialJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  initialJobs: Job[];
}
const SearchBar: React.FC<Props> = ({ setInitialJobs, initialJobs }) => {
  const { setSeach, description, location, fullTime } = useSearchContext();
  return (
    <div className='dev-dashboard__search '>
      <SmartFormInput
        value={description}
        onChange={(e) =>
          setSeach({ description: e.target.value, location, fullTime })
        }
        topClassName='w-100 display-mobile'
        inputClassName='search__input icon__filter'
        displayButtonIcon={true}
        faIcon='fa fa-search'
        placeholderText='Enter job description...'
      />
      <SmartFormInput
        value={description}
        onChange={(e) =>
          setSeach({ description: e.target.value, location, fullTime })
        }
        topClassName='w-33 border-rigth display-desktop'
        inputClassName='search__input icon__search'
        displayButtonIcon={false}
        placeholderText='Enter job description...'
      />

      <SmartFormInput
        value={location}
        onChange={(e) =>
          setSeach({ description, location: e.target.value, fullTime })
        }
        topClassName='w-33 border-rigth display-desktop'
        inputClassName='search__input icon__location'
        displayButtonIcon={false}
        placeholderText='Filter by location..'
      />

      <div className=' display-desktop flex-row-center'>
        <input
          type='checkbox'
          id='full-time'
          name='full-time'
          checked={fullTime}
          onChange={(e) =>
            setSeach({ description, location, fullTime: e.target.checked })
          }
        />
        <label htmlFor='full-time'>Full Time Only</label>
        <button
          disabled={!(description || location)}
          onClick={() => {
            const filteredJobs = filteredJobsBySearch(
              initialJobs,
              description,
              location,
              fullTime
            );

            setInitialJobs(filteredJobs);

            setSeach({ description: '', location: '', fullTime: false });
          }}
          className='db-button btn-primary'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

function filteredJobsBySearch(
  jobs: Job[],
  description: string,
  location: string,
  fullTime: boolean
) {
  const fulltime = fullTime ? 'full time' : '';
  return jobs.filter((job) => {
    if (
      job.position.toLowerCase().includes(description.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      job.contract.toLowerCase().includes(fulltime.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
}
