import TypeFlair from "./components/TypeFlair";
import usePokemonData from "./hooks/usePokemonData";

function App() {
  const data = usePokemonData(500);
  const img_src = data?.sprites.other["official-artwork"].front_default;
  console.log(data);
  return (
    <div className="App">
      <TypeFlair type="DARK" />
    </div>
  );
}

export default App;
