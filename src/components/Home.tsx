import React from "react";
import TypeFlair from "./TypeFlair";
import useData from "../hooks/useData";

const Home = () => {
  const data = useData("bulbasaur");
  console.log(data);
  return (
    <div className="">
      <TypeFlair type="GRASS"></TypeFlair>
    </div>
  );
};

export default Home;
