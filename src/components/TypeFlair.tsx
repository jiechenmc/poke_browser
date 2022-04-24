import React from "react";

interface TypeProps {
  type: string;
}

const TypeFlair = ({ type }: TypeProps) => {
  type = type.toUpperCase();
  let flairStyling: string;

  switch (type) {
    case "NORMAL": {
      flairStyling = "block bg-normal w-max rounded-md";
      break;
    }
    case "FIRE": {
      flairStyling = "block bg-fire w-max rounded-md";
      break;
    }
    case "WATER": {
      flairStyling = "block bg-water w-max rounded-md";
      break;
    }
    case "GRASS": {
      flairStyling = "block bg-grass w-max rounded-md";
      break;
    }
    case "ELECTRIC": {
      flairStyling = "block bg-electric w-max rounded-md";
      break;
    }
    case "ICE": {
      flairStyling = "block bg-ice w-max rounded-md";
      break;
    }
    case "FIGHTING": {
      flairStyling = "block bg-fighting w-max rounded-md";
      break;
    }
    case "POISON": {
      flairStyling = "block bg-poison w-max rounded-md";
      break;
    }
    case "GROUND": {
      flairStyling = "block bg-ground w-max rounded-md";
      break;
    }
    case "FLYING": {
      flairStyling = "block bg-flying w-max rounded-md";
      break;
    }
    case "PSYCHIC": {
      flairStyling = "block bg-psychic w-max rounded-md";
      break;
    }
    case "BUG": {
      flairStyling = "block bg-bug w-max rounded-md";
      break;
    }
    case "ROCK": {
      flairStyling = "block bg-rock w-max rounded-md";
      break;
    }

    case "GHOST": {
      flairStyling = "block bg-ghost w-max rounded-md";
      break;
    }

    case "DARK": {
      flairStyling = "block bg-dark w-max rounded-md";
      break;
    }

    case "DRAGON": {
      flairStyling = "block bg-dragon w-max rounded-md";
      break;
    }
    case "STEEL": {
      flairStyling = "block bg-steel w-max rounded-md";
      break;
    }

    case "FAIRY": {
      flairStyling = "block bg-fairy w-max rounded-md";
      break;
    }
    default: {
      flairStyling = "block bg-warning w-max rounded-md";
      type = "INVALID TYPE RECEIVED";
      break;
    }
  }

  return (
    <div className={flairStyling}>
      <p className="appearance-none text-white px-1 py-1 font-mono">{type}</p>
    </div>
  );
};

export default TypeFlair;
