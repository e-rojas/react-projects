import React from 'react';
import Table from './components/Table';
import Spinner from './components/Spinner';
import useFetchPokemon from './hooks/useFetchPokemon';
const PokemonClient: React.FC = () => {
  const { loading, error, pokemonData } = useFetchPokemon();
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
        <div className='pokemon-api grid-col-span-2 p-3 border-rigth'>
          {pokemonData ? <Table pokemonData={pokemonData} /> : <Spinner />}
        </div>
      </div>
    </>
  );
};

export default PokemonClient;
