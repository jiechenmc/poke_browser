import React from "react";

interface TypeProps {
  type: string;
}

const TypeFlair = ({ type }: TypeProps) => {
  type = type.toLowerCase();
  let flairStyling: string = `block bg-${type} w-max rounded-md`;

  return (
    <div className={flairStyling}>
      <p className="appearance-none text-white px-1 py-1 font-sans">
        {type.toUpperCase()}
      </p>
    </div>
  );
};

export default TypeFlair;
