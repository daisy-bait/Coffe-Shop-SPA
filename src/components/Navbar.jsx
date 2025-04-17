import { NavLink } from "react-router";

const Navbar = () => {

    return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            {/* Hacemos que el Navbar sea fijo */}
            {/* Definimos el contenedor navbar padre para poder aplicarle backgound */}
            <nav className="uk-navbar-container uk-navbar-transparent">
                <div className="uk-container uk-width-1-1">
                    {/* Ahora definimos el componente Navbar */}
                    <div uk-navbar="mode: click">
                        {/* Para que todo el contenido se vea alineado y organizado hacia el centro */}
                        <div className="uk-navbar-center uk-flex uk-flex-center">
                            {/* Ahora empezamos a dividir el centro en izquierda y derecha */}
                            <div className="uk-navbar-item">
                                <NavLink
                                    className="uk-button uk-button-secondary uk-border-rounded"
                                    to="/api" end>
                                    API
                                </NavLink>
                            </div>
                            <div className="uk-navbar-item uk-light">
                                <NavLink
                                    className="uk-text-capitalize uk-button uk-button-text uk-light"
                                    to="/menu" end>
                                    Menu
                                </NavLink>
                            </div>
                            <div className="uk-navbar-item uk-light">
                                <NavLink
                                    className="uk-text-capitalize uk-button uk-button-text"
                                    to="/suggest" end>
                                    Recomendado
                                </NavLink>
                            </div>
                            <div className="uk-navbar-item uk-light">
                                <NavLink
                                    className="uk-text-capitalize uk-button uk-button-text uk-light"
                                    to="/blog" end>
                                    Blog
                                </NavLink>
                            </div>
                            <div className="uk-navbar-item uk-light">
                                <NavLink
                                    className="uk-text-capitalize uk-button uk-button-text uk-light"
                                    to="/about" end>
                                    Nosotros
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar
