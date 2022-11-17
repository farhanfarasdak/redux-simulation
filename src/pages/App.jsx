import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { action } from "../redux/reducer";

const App = () => {
  const counter = useSelector((state) => state.counter)
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

  return (
    <div>
      <h1>This is App Page</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increase!</button>
      <button onClick={decrease}>Decrease!</button>
      <button onClick={increaseTen}>Increase By 10</button>
      <Link to="/home"><h4>Go To Home</h4></Link>
    </div>
  );
}

export default App;
