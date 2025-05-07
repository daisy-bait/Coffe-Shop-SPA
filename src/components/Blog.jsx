import React, { useState } from "react";
/* imagenes */
import avatarDefault from "../assets/img/avatars/default.jpg";
import blogPrueba from "../assets/img/blog-prueba.jpg";
import blogBackground from "../assets/img/blog-background.png";

/* LUEGO CAMBIO LAS IMAGENES POR LAS DE MI PENE */
const Blog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "A LA VERGAA, ME MANDÉ TREMENDA RECETA DE CAfé VIEJO",
      author: "NATALIA PENE",
      imageUrl: blogPrueba,
      avatarUrl: avatarDefault,
      excerpt: "Aprendete esta receta amigo, tremenda receta de café viejo...",
    },
    {
      id: 2,
      title: "GUÍA DE MI PENE PARA PRINCIPIANTES",
      author: "Kaleth Narvaez",
      imageUrl: blogPrueba,
      avatarUrl: avatarDefault,
      excerpt: "DESCUBRE A USAR MI PENE DE UNA FORMA INTERESANTE AMIGO b)",
    },
  ];
  /* esto es para luego */
  const handleCommentClick = () => {
    if (!isLoggedIn) {
      setModalOpen(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setModalOpen(false);
  };

  return (
    <div
      className="uk-section uk-light" /*poner todo el putas texto negro como me la pela el texto */
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${blogBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px 0",
        margin: "-80px 0",
      }}
    >
      <div className="uk-container uk-text-default" style={{ color: "black" }}>
        <div className="uk-child-width-1-2@s uk-grid-match" data-uk-grid>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div
                className="uk-card uk-card-default uk-card-hover"
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                <div className="uk-card-media-top">
                  <img src={blog.imageUrl} alt={blog.title} />
                </div>
                <div
                  className="uk-card-body"
                  style={{ backgroundColor: "white" }}
                >
                  <h3 className="uk-card-title">{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="uk-flex uk-flex-middle uk-margin-small-top">
                    <img
                      src={blog.avatarUrl}
                      alt={blog.author}
                      className="uk-border-circle"
                      width="40"
                      height="40"
                    />
                    <span className="uk-margin-small-left">{blog.author}</span>
                  </div>
                  <button
                    className="uk-button uk-button-secondary uk-margin-small-top"
                    onClick={handleCommentClick}
                  >
                    Comentar
                  </button>

                  {/* Comentarios de ejemplo */}
                  <article className="uk-comment uk-margin-top">
                    <header className="uk-comment-header uk-flex uk-flex-middle">
                      <img
                        className="uk-comment-avatar uk-border-circle"
                        src={avatarDefault}
                        width="40"
                        height="40"
                        alt="Usuario"
                      />
                      <div className="uk-margin-small-left">
                        <h4
                          className="uk-comment-title uk-margin-remove"
                          style={{ color: "black" }}
                        >
                          Usuario
                        </h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                          <li>
                            <a href="#" style={{ color: "black" }}>
                              Hace 9999 min
                            </a>
                          </li>
                        </ul>
                      </div>
                    </header>
                    <div className="uk-comment-body" style={{ color: "black" }}>
                      <p>¡Muy interesante! me duele la verga...</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de login */}
      {modalOpen && (
        <div
          id="login-modal"
          className="uk-modal uk-open"
          style={{ display: "block" }}
        >
          <div
            className="uk-modal-dialog uk-modal-body"
            style={{
              background: "white",
              color: "black",
              borderRadius: "10px",
              maxWidth: "400px",
              margin: "auto",
            }}
          >
            <button
              className="uk-modal-close-default"
              type="button"
              onClick={() => setModalOpen(false)}
              data-uk-close
              style={{ color: "black" }}
            ></button>
            <h2 className="uk-modal-title" style={{ color: "black" }}>
              Iniciar Sesión
            </h2>
            <form onSubmit={handleLogin} className="uk-form-stacked">
              <div className="uk-margin">
                <label className="uk-form-label" style={{ color: "black" }}>
                  Usuario
                </label>
                <input
                  className="uk-input"
                  type="text"
                  required
                  style={{ color: "black", backgroundColor: "#f0f0f0" }}
                />
              </div>
              <div className="uk-margin">
                <label className="uk-form-label" style={{ color: "black" }}>
                  Contraseña
                </label>
                <input
                  className="uk-input"
                  type="password"
                  required
                  style={{ color: "black", backgroundColor: "#f0f0f0" }}
                />
              </div>
              <button className="uk-button uk-button-secondary" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
