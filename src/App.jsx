import {BrowserRouter, Routes, Route, Link} from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"

export default function App(){
  return (
    <BrowserRouter>
    <div className="header">
      <Link to="/">#VANLIFE</Link>
      <div className="header-right">
      <Link to="/about">About</Link>
      <Link to="/">Vans</Link>
      </div>
    </div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    <div className="footer">
      Ⓒ 2025 #VANLIFE
    </div>
    </BrowserRouter>
  )
}