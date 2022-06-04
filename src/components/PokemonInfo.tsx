import React from "react";
import { useParams } from "react-router-dom";
import usePokemonData from "../hooks/usePokemonData";

const PokemonInfo = () => {
  const { name } = useParams();
  let data;

  if (name !== undefined) {
    data = usePokemonData(name);
  }

  console.log(data);

  return <div>You are on {name}'s page</div>;
};

export default PokemonInfo;
