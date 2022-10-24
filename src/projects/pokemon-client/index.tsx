import React from 'react';
import { Pokemon } from './pokemon.interface';
import { fetchPokemon } from './utils';

const PokemonClient: React.FC = () => {
  const [pokemonData, setPokemonData] = React.useState<Pokemon[] | null>(null);
  React.useEffect(() => {
    fetchPokemon(setPokemonData);
  }, []);

  return (
    <div>
      <h1>Pokemon Client</h1>
      <ul>
        {pokemonData &&
          pokemonData.map((pokemon) => (
            <li key={pokemon.name}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.image_url} alt={pokemon.name} />
              <ol>
                {pokemon.types.map((type) => (
                  <li key={type}>{type}</li>
                ))}
              </ol>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PokemonClient;
