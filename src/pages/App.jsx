import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { action } from "../redux/reducer";
import { retrievePokemons } from "../redux/reducer/pokemon";

const App = () => {
  const counter = useSelector((state) => {
    return state.counterReducer.counter
  })

  const pokemons = useSelector((state) => {
    return state.pokemonReducer.pokemons
  })

  const dispatch = useDispatch()

  const increment = () =>{
    dispatch(action.increment())
  }

  const decrease = () => {
    dispatch(action.decrement())
  }

  const increaseTen = () => {
    dispatch(action.increaseByNumber({ number: 10}))
  }

  const getPokemon = () => {
    dispatch( retrievePokemons() )
  }

  return (
    <div>
      <h1>This is App Page</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increase!</button>
      <button onClick={decrease}>Decrease!</button>
      <button onClick={increaseTen}>Increase By 10</button>
      <Link to="/home"><h4>Go To Home</h4></Link>
      <button onClick={getPokemon}>Get Pokemons!</button>
      <h2>Pokemon List :</h2>
      { pokemons.map(pokemon => {
        return(<h4 key={pokemon.name}>{pokemon.name}</h4>)
      })}
    </div>
  );
}

export default App;
