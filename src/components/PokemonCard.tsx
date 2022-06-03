import React from "react";
import { v4 as uuidv4 } from "uuid";
import TypeFlair from "./TypeFlair";

const PokemonCard = ({ data }: any) => {
  const img_src = data?.sprites.other["official-artwork"].front_default!;
  const order = data.order;
  const name = data.name;
  const types = Object.values(data.types);

  const flair = types.map((t: any) => (
    <TypeFlair key={uuidv4()} type={t.type.name} />
  ));

  return (
    <div className="flex flex-col w-24 mt-5 border-red-600 border-1">
      <div>
        <img loading="lazy" src={img_src} width="100%" height="100%" />
      </div>
      <div className="text-center text-neutral-400">#{order}</div>
      <div className="text-center text-blue-500 text-md capitalize">{name}</div>
      <div className="flex justify-center uppercase gap-1">{flair}</div>
    </div>
  );
};

export default PokemonCard;
