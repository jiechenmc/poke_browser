import { Pokemon, PokemonClient } from "pokenode-ts";

const useData = async () => {
  const api = new PokemonClient();

  await api
    .getPokemonByName("bulbasaur")
    .then((data) => {
      let pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        base_experience: data.base_experience,
        height: data.height,
        is_default: data.is_default,
        order: data.order,
        weight: data.weight,
        abilities: data.abilities,
        forms: data.forms,
        game_indices: data.game_indices,
        held_items: data.held_items,
        location_area_encounters: data.location_area_encounters,
        moves: data.moves,
        sprites: data.sprites,
        species: data.species,
        stats: data.stats,
        types: data.types,
        past_types: data.past_types,
      };
      return pokemon;
    })
    .catch((error) => console.error(error));
};

export default useData;
