import { useEffect, useState } from "react";
import { Pokemon, MainClient } from "pokenode-ts";

const usePokemonData = (pokemonID: number | string) => {
  const api = new MainClient({
    cacheOptions: { maxAge: 900_000, exclude: { query: false } },
  });
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchData = async () => {
      // Closure to resolve promises and setState
      let PokemonData;
      if (typeof pokemonID === "number") {
        PokemonData = await api.pokemon.getPokemonById(pokemonID);
      } else {
        PokemonData = await api.pokemon.getPokemonByName(pokemonID);
      }

      if (PokemonData !== undefined) {
        setPokemon({
          id: PokemonData.id,
          name: PokemonData.name,
          base_experience: PokemonData.base_experience,
          height: PokemonData.height,
          is_default: PokemonData.is_default,
          order: PokemonData.order,
          weight: PokemonData.weight,
          abilities: PokemonData.abilities,
          forms: PokemonData.forms,
          game_indices: PokemonData.game_indices,
          held_items: PokemonData.held_items,
          location_area_encounters: PokemonData.location_area_encounters,
          moves: PokemonData.moves,
          sprites: PokemonData.sprites,
          species: PokemonData.species,
          stats: PokemonData.stats,
          types: PokemonData.types,
          past_types: PokemonData.past_types,
        });
      } else {
        return undefined;
      }
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  return pokemon;
};

export default usePokemonData;
