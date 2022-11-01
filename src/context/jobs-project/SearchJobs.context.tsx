import React, { useState, createContext } from 'react';

interface SearchContextProviderProps {
  children: React.ReactNode;
}

export const SearchJobsContext = createContext({
  description: '',
  location: '',
  fullTime: false,
  setSeach: (search: {
    description: string;
    location: string;
    fullTime: boolean;
  }) => {},
});

export const SearchJobsContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [search, setSearch] = useState({
    description: '',
    location: '',
    fullTime: false,
  });

  return (
    <SearchJobsContext.Provider value={{ ...search, setSeach: setSearch }}>
      {children}
    </SearchJobsContext.Provider>
  );
};
