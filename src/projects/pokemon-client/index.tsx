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
    <div>
      <h1>Pokemon Client</h1>

      {pokemonData ? <Table pokemonData={pokemonData} /> : <Spinner />}
    </div>
  );
};

export default PokemonClient;
