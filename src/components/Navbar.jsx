import { NavLink } from "react-router";

import coffeLogo from "../assets/img/coffe-user-logo.svg"

const Navbar = () => {

    return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
        className="uk-position-top">
            {/* Hacemos que el Navbar sea fijo */}
            {/* Definimos el contenedor navbar padre para poder aplicarle backgound */}
            <nav className="uk-navbar-container uk-navbar-transparent" >
                <div className="uk-container uk-width-1-1 background-opaque">
                    {/* Ahora definimos el componente Navbar */}
                    <div uk-navbar="mode: click" className="uk-flex">
                        {/* Para que todo el contenido se vea alineado y organizado hacia el centro */}
                        <div className="uk-navbar-left">
                            <div className="uk-navbar-item uk-light">
                                <NavLink
                                    className="uk-flex uk-link-heading"
                                    to="/" end>
                                    <img src={coffeLogo} />
                                    <button className="uk-margin-left uk-text-capitalize uk-text-left uk-text-small uk-button uk-button-link">
                                        <strong>
                                            Chocolate<br></br>Nicolle
                                        </strong>
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="uk-navbar-center uk-visible@l">
                            {/* Ahora empezamos a dividir el centro en izquierda y derecha */}
                            <div className="uk-navbar-item uk-dark">
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
                        <div className="uk-navbar-right uk-visible@l">
                            <div className="uk-navbar-item uk-light">
                                <NavLink
                                    className="uk-text-capitalize uk-text-normal uk-button uk-button-secondary uk-border-rounded"
                                    to="#" end>
                                    Iniciar Sesión
                                </NavLink>
                            </div>
                            <div className="uk-navbar-item uk-dark">
                                <NavLink
                                    className="uk-text-capitalize uk-button uk-button-secondary uk-border-rounded"
                                    to="#" end>
                                    Registrarse
                                </NavLink>
                            </div>
                        </div>
                        {/** Prototipo de Menú hamburguesa (Quizá diseño final) **/}
                        <div className="uk-hidden@l uk-navbar-right">
                            <a className="uk-navbar-toggle" uk-navbar-toggle-icon="true" uk-toggle="target: #burger-menu"></a>

                            <div id="burger-menu" uk-offcanvas="overlay: true; flip: true">
                                <div className="uk-offcanvas-bar">
                                    <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

                                    <div className="uk-flex uk-flex-column uk-grid-row-small uk-margin-medium-top" uk-grid="true">
                                        <div className="uk-flex-left">
                                            <NavLink
                                                className="uk-button uk-button-secondary uk-border-rounded"
                                                to="/api" end>
                                                <strong>API</strong>
                                            </NavLink>
                                        </div>
                                        <div className="uk-flex-left uk-margin-small-left">
                                            <NavLink
                                                className="uk-text-capitalize uk-button uk-button-text uk-light"
                                                to="/menu" end>
                                                Menu
                                            </NavLink>
                                        </div>
                                        <div className="uk-flex-left uk-margin-small-left">
                                            <NavLink
                                                className="uk-text-capitalize uk-button uk-button-text"
                                                to="/suggest" end>
                                                Recomendado
                                            </NavLink>
                                        </div>
                                        <div className="uk-flex-left uk-margin-small-left">
                                            <NavLink
                                                className="uk-text-capitalize uk-button uk-button-text uk-light"
                                                to="/blog" end>
                                                Blog
                                            </NavLink>
                                        </div>
                                        <div className="uk-flex-left uk-margin-small-left">
                                            <NavLink
                                                className="uk-text-capitalize uk-button uk-button-text uk-light"
                                                to="/about" end>
                                                Nosotros
                                            </NavLink>
                                        </div>
                                        <hr className="uk-divider-icon" />
                                        <div className="uk-light">
                                            <NavLink
                                                className="uk-text-capitalize uk-text-normal uk-button uk-button-secondary uk-border-rounded uk-width-1-1"
                                                to="#" end>
                                                Iniciar Sesión
                                            </NavLink>
                                        </div>
                                        <div className="uk-dark">
                                            <NavLink
                                                className="uk-text-capitalize uk-text-normal uk-button uk-button-secondary uk-border-rounded uk-width-1-1"
                                                to="#" end>
                                                Registrarse
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar
