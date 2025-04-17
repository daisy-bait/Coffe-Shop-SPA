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
                {/**
                Este div es para que los componentes tengan texto claro al igual que
                todos los componentes, ¿Por qué? Por el uk-background-secondary y la
                imágen que hay de fondo, en caso de querer utilizar elementos oscuros
                añadirles al className uk-dark
                **/}
                <div className="uk-light">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/api" element={<Api />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/suggest" element={<Recomendado />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/about" element={<Nosotros />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App
