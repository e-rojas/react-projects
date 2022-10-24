import { Pokemon } from './pokemon.interface';

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
        name: pokemon.name,
        image_url: pokemon.sprites.other.home.front_default,
        types: pokemon.types.map((poke: any) => poke.type.name),
        id: pokemon.name,
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
