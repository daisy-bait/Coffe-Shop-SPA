import { NavLink } from "react-router";

const Navbar = () => {

    return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            {/* Hacemos que el Navbar sea fijo */}
            {/* Definimos el contenedor navbar padre para poder aplicarle backgound */}
            <nav className="uk-navbar-container uk-background-primary uk-light">
                <div className="uk-container uk-background-primary uk-width-1-1">
                    {/* Ahora definimos el componente Navbar */}
                    <div uk-navbar="mode: click">
                        {/* Para que todo el contenido se vea alineado y organizado hacia el centro */}
                        <div className="uk-navbar-center uk-flex uk-flex-center">
                            {/* Ahora empezamos a dividir el centro en izquierda y derecha */}
                            <div className="uk-navbar-center-left">
                                <ul className="uk-navbar-nav">
                                    <li>
                                        <NavLink to="/api" end>
                                            <strong>API</strong>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/menu" end>
                                            <strong>Menu</strong>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <NavLink to="/suggest" end>
                                <strong>Recomendado</strong>
                            </NavLink>
                            <div className="uk-navbar-center-right">
                                <ul className="uk-navbar-nav">
                                    <li>
                                        <NavLink to="/blog" end>
                                            <strong>Blog</strong>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" end>
                                            <strong>Nosotros</strong>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar
