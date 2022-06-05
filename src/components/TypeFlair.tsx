import React from "react";

interface TypeProps {
  type: string;
}

const TypeFlair = ({ type }: TypeProps) => {
  const types : any= {
    normal: "bg-normal",
    fire: "bg-fire",
    water: "bg-water",
    electric: "bg-electric",
    grass: "bg-grass",
    ice: "bg-ice",
    fighting: "bg-fighting",
    poison: "bg-poison",
    ground: "bg-ground",
    flying: "bg-flying",
    psychic: "bg-psychic",
    bug: "bg-bug",
    rock: "bg-rock",
    ghost: "bg-ghost",
    dragon: "bg-dragon",
    dark: "bg-dark",
    steel: "bg-steel",
    fairy: "bg-fairy",
  }

  return (
    <div className={`block ${type ? types[type] : "bg-warning"} w-max rounded-md`}>
      <p className="appearance-none text-sm font-semibold text-white px-1 py-1 font-sans uppercase">
        {type}
      </p>
    </div>
  );
};

export default TypeFlair;
