import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pokemon/:name" element={<PokemonInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
