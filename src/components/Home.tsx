import React from "react";
import TypeFlair from "./TypeFlair";
import usePokemonData from "../hooks/useData";

const Home = () => {
  const data = usePokemonData("bulbasaur");
  console.log(data);
  return (
    <div className="">
      <TypeFlair type="GRASS"></TypeFlair>
    </div>
  );
};

export default Home;
