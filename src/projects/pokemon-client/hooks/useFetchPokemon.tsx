import React from 'react';

import { Pokemon } from '../pokemon.interface';
import { fetchPokemon } from '../utils';

const useFetchPokemon = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [pokemonData, setPokemonData] = React.useState<Pokemon[] | null>(null);
  React.useEffect(() => {
    fetchPokemon(setPokemonData, setLoading, setError);
  }, []);

  return { loading, error, pokemonData };
};

export default useFetchPokemon;
