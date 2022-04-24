import { PokemonClient } from "pokenode-ts";

interface BaseStats {
  hp: number;
  attack: number;
  defense: number;
  specialAtk: number;
  specialDef: number;
  specialSpeed: number;
}

(async () => {
  const api = new PokemonClient();

  await api
    .getPokemonByName("luxray")
    .then((data) => {
      let baseStats: BaseStats = {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAtk: data.stats[3].base_stat,
        specialDef: data.stats[4].base_stat,
        specialSpeed: data.stats[5].base_stat,
      };
    })
    .catch((error) => console.error(error));
})();
