import React from 'react';
import SmartFormInput from './SmartFormInput';

export interface SearchProps {}

const SearchBar: React.FC<SearchProps> = () => {
  return (
    <div className='dev-dashboard__search '>
      <SmartFormInput
        topClassName='w-100 display-mobile'
        inputClassName='search__input icon__filter'
        displayButtonIcon={true}
        faIcon='fa fa-search'
        placeholderText='Enter job description...'
      />
      <SmartFormInput
        topClassName='w-33 border-rigth display-desktop'
        inputClassName='search__input icon__search'
        displayButtonIcon={false}
        placeholderText='Enter job description...'
      />

      <SmartFormInput
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
          value='full-time'
        />
        <label htmlFor='full-time'>Full Time Only</label>
        <button className='db-button btn-primary'>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
