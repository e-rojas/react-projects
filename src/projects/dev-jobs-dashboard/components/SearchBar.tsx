import React from 'react';

export interface SearchProps {}

const SearchBar: React.FC<SearchProps> = () => {
  return (
    <div className='dev-dashboard__search '>
      <div className='w-33 border-rigth'>
        <form className='nosubmit w-100'>
          <input
            type='search'
            placeholder='Filter by title, companies, expertise..'
            className='nosubmit'
          />
        </form>
      </div>
      <div className='w-33 border-rigth'>
        <form className='location w-100'>
          <input
            type='search'
            placeholder='Filter by location..'
            className='location'
          />
        </form>
      </div>
      <div className='wrapper'>
        <input
          type='checkbox'
          id='full-time'
          name='full-time'
          value='full-time'
        />
        <label htmlFor='full-time'>Full Time Only</label>
        <button className='submit-btn'>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
