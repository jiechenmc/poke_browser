import { useEffect, useState } from "react";
import { Pokemon, ChainLink, MainClient } from "pokenode-ts";

interface PokemonData extends Pokemon {
  evolution_chain: ChainLink;
}

const usePokemonData = (pokemonName: string) => {
  const api = new MainClient({
    cacheOptions: { maxAge: 60000, exclude: { query: false } },
  });
  const [pokemon, setPokemon] = useState<PokemonData>();

  useEffect(() => {
    const fetchData = async () => {
      // Closure to resolve promises and setState
      let PokemonData = await api.pokemon.getPokemonByName(pokemonName);
      let EvolutionData = await api.evolution.getEvolutionChainById(
        PokemonData.id
      );

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
        evolution_chain: EvolutionData.chain,
      });
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  return pokemon;
};

export default usePokemonData;
