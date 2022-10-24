import React from 'react';
import { Pokemon } from './pokemon.interface';
import { fetchPokemon } from './utils';
import Table from './components/Table';
const PokemonClient: React.FC = () => {
  const [pokemonData, setPokemonData] = React.useState<Pokemon[] | null>(null);
  React.useEffect(() => {
    fetchPokemon(setPokemonData);
  }, []);

  return (
    <div>
      <h1>Pokemon Client</h1>

      {/* {pokemonData ? (
        <Table pokemonData={pokemonData} />
      ) : (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span> */}
      {pokemonData ? (
        <Table pokemonData={pokemonData} />
      ) : (
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      )}
    </div>
  );
};

export default PokemonClient;
