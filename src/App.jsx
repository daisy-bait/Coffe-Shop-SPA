import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Api from "./components/Api"
import Menu from "./components/Menu"
import Recomendado from "./components/Recomendado"
import Blog from "./components/Blog"
import Nosotros from "./components/Nosotros"

import { BrowserRouter as Router, Route, Routes } from "react-router"

function App() {

    return (
        <>
            <Router>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/api" element={<Api />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/suggest" element={<Recomendado />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<Nosotros />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
