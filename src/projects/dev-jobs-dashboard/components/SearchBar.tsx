import React from 'react';
import SmartFormInput from './SmartFormInput';

import { useSearchContext } from '../../../context/jobs-project/useSearchContext.hook';

const SearchBar: React.FC = () => {
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
            console.log('clicked');
            console.log('description', description);
            console.log('location', location);
            console.log('fullTime', fullTime);

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
