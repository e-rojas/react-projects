import React from 'react';
import { Pokemon } from './pokemon.interface';
import { fetchPokemon } from './utils';
import Table from './components/Table';
import Spinner from './components/Spinner';
const PokemonClient: React.FC = () => {
  const [pokemonData, setPokemonData] = React.useState<Pokemon[] | null>(null);
  React.useEffect(() => {
    fetchPokemon(setPokemonData);
  }, []);

  return (
    <div>
      <h1>Pokemon Client</h1>

      {pokemonData ? <Table pokemonData={pokemonData} /> : <Spinner />}
    </div>
  );
};

export default PokemonClient;
