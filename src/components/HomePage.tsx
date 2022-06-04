import React from "react";
import PokemonCard from "./PokemonCard";
import usePokemonData from "../hooks/usePokemonData";

const HomePage = () => {
  let pokemons: any = [];

  // 1 - 888
  for (let i = 1; i < 899; ++i) {
    let data = usePokemonData(i);
    if (data !== undefined) {
      pokemons.push(data);
    }
  }

  return (
    <div>
      <div>Search bar</div>
      <div className="grid grid-cols-10 place-items-center mx-5">
        {pokemons.map((pokemon: any) => (
          <PokemonCard key={pokemon?.name} data={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
