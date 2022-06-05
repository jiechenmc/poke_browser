import React from "react";
import { v4 as uuidv4 } from "uuid";
import TypeFlair from "./TypeFlair";

const PokemonCard = ({ data }: any) => {
  const img_src = data?.sprites.other["official-artwork"].front_default!;
  const id = data.id;
  const name = data.name;
  const types = Object.values(data.types);

  const flair = types.map((t: any) => (
    <TypeFlair key={uuidv4()} type={t.type.name} />
  ));

  return (
    <div className="flex flex-col w-30% mt-5 bg-neutral-200 border-2 border-solid">
      <a href={`/pokemon/${name}`}>
        <div>
          <img
            loading="lazy"
            src={img_src}
            width="100%"
            height="100%"
            alt={name}
          />
        </div>
        <div className="text-center text-neutral-800">#{id}</div>
        <div className="text-center text-blue-500 text-md capitalize">
          {name}
        </div>
        <div className="flex justify-center uppercase gap-1">{flair}</div>
      </a>
    </div>
  );
};

export default PokemonCard;
