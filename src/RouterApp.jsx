
import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from 'react-router'
import App from "./pages/App"
import Home from "./pages/Home"

const RouterApp = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp