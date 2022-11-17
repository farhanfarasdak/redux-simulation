import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Home = () => {
  const counter = useSelector((state) => state.counter)

  return(
    <div>
      <h1>I am Home Page</h1>
      <h2>Current count: {counter}</h2>
      <Link to="/"><h4>Go To App</h4></Link>
    </div>
  )
}

export default Home