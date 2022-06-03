import PokemonCard from "./components/PokemonCard";
import usePokemonData from "./hooks/usePokemonData";

function App() {
  let pokemons: any = [];

  // 1 - 888
  for (let i = 1; i < 10; ++i) {
    let data = usePokemonData(i);
    if (data !== undefined) {
      pokemons.push(data);
    }
  }

  pokemons.sort((pokemonA: any, pokemonB: any) => {
    return pokemonA.order > pokemonB.order ? 1 : -1;
  });

  {
    return (
      <div className="App grid grid-cols-3 place-items-center	">
        {pokemons.map((pokemon: any) => (
          <PokemonCard key={pokemon?.name} data={pokemon} />
        ))}
      </div>
    );
  }
}

export default App;
