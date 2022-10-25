import React from 'react';
import Table from './components/Table';
import Spinner from './components/Spinner';
import useFetchPokemonAPI from './hooks/useFetchPokemon';
import { saveToDB, fetchDBRequest } from './utils';

import { Pokemon } from './pokemon.interface';
const PokemonClient: React.FC = () => {
  const { loading, error, pokemonData } = useFetchPokemonAPI();
  const [savedPokemon, setSavedPokemon] = React.useState<Pokemon[]>([]);
  const [isSending, setIsSending] = React.useState(false);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <h1>Pokemon Client</h1>
      <div className='grid w-100'>
        <div className='pokemon-api grid-col-span-2 p-3 border-rigth flex-column'>
          <span className='font-weight-bold'>Pokemon API</span>
          {pokemonData ? (
            <Table pokemonData={pokemonData} saveToDB={saveToDB} />
          ) : (
            <Spinner />
          )}
        </div>
        <div className='pokemon-api grid-col-span-2 p-3 flex-column '>
          <div className='flex-spread-center w-100 p-2'>
            <span className='font-weight-bold'>Pokemon DB</span>
            <button
              className='btn btn-primary btn-sm'
              onClick={() => {
                fetchDBRequest(setIsSending, setSavedPokemon);
              }}
            >
              Load From DB
            </button>
          </div>
          {isSending ? (
            <Spinner />
          ) : savedPokemon && savedPokemon.length > 0 ? (
            <Table pokemonData={savedPokemon} />
          ) : (
            <div>No Data ヽ(ヅ)ノ Save your fav Pokemon!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonClient;
