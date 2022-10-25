import { Pokemon } from './pokemon.interface';
import HttpService from '../../services/HttpService';
export function fetchPokemon(
  setPokemonData: React.Dispatch<Pokemon[]>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<null>>
) {
  setLoading(true);
  const promises = [];
  for (let i = 1; i <= 20; i++) {
    promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
  }
  Promise.all(promises)
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((data) => {
      const pokemon = data.map((pokemon: any) => ({
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        image_url: pokemon.sprites.other.home.front_default,
        types: pokemon.types.map((poke: any) => poke.type.name),
        _id: pokemon.name,
        saved: false,
      })) as Pokemon[];
      setPokemonData(pokemon);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    });
}

export const saveToDB = async (pokemon: Pokemon) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}pokemons`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: pokemon.name,
      image_url: pokemon.image_url,
      types: pokemon.types,
    }),
  });
  const data = await response.json();
  if (data.statusCode === 409) {
    alert(data.message);
  } else {
    alert(`Pokemon ${pokemon.name} saved successfully!`);
  }
};

export const fetchDBRequest = async (
  setIsSending: React.Dispatch<React.SetStateAction<boolean>>,
  setSavedPokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>
) => {
  setIsSending(true);
  HttpService.fetch<Pokemon[]>('pokemons').then((data) => {
    setSavedPokemon(data);
    setIsSending(false);
  });
};
