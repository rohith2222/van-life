import {BrowserRouter, Routes, Route, Link} from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail.jsx"
import "./server.js"

export default function App(){
  return (
    <BrowserRouter>
    <div className="header">
      <Link to="/">#VANLIFE</Link>
      <div className="header-right">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans/>} />
      <Route path="/vans/:id" element={<VanDetail/>} />
    </Routes>
    <div className="footer">
      Ⓒ 2025 #VANLIFE
    </div>
    </BrowserRouter>
  )
}