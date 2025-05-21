import React, { useEffect, useState } from "react";
import LoginModal from "../components/LoginModal";
import avatarDefault from "../assets/img/avatars/default.jpg";
import blogExample from "../assets/img/blog-prueba.jpg";

const Blog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const [visibleComments, setVisibleComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [commentsByBlog, setCommentsByBlog] = useState({});

  const [blogsData, setBlogsData] = useState([
    {
      id: 1,
      title: "5 Consejos para Mejorar tu Café Casero",
      author: "Natalia Ruiz",
      imageUrl: blogExample,
      avatarUrl: avatarDefault,
      excerpt:
        "Descubre técnicas simples pero efectivas para preparar un mejor café en casa.",
    },
    {
      id: 2,
      title: "Guía Básica de Fotografía para Principiantes",
      author: "Kaleth Narváez",
      imageUrl: blogExample,
      avatarUrl: avatarDefault,
      excerpt:
        "Aprende a sacar el máximo provecho de tu cámara desde el primer día.",
    },
  ]);

  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    excerpt: "",
    image: null,
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setUser(parsed);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (username) => {
    const userData = { username };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsLoggedIn(true);
    setModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
  };

  const toggleComments = (id) => {
    setVisibleComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCommentChange = (id, value) => {
    setCommentInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCommentSubmit = (id) => {
    if (!isLoggedIn) {
      UIkit.notification({
        message: "Debes iniciar sesión para comentar.",
        status: "warning",
        pos: "top-center",
      });
      setModalOpen(true);
      return;
    }

    const newComment = {
      text: commentInputs[id],
      author: user?.username || "Usuario",
    };

    setCommentsByBlog((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), newComment],
    }));

    setCommentInputs((prev) => ({
      ...prev,
      [id]: "",
    }));

    UIkit.notification({
      message: "Comentario publicado.",
      status: "success",
      pos: "top-center",
    });
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      UIkit.notification({
        message: "Debes iniciar sesión para publicar un blog.",
        status: "warning",
        pos: "top-center",
      });
      setModalOpen(true);
      return;
    }

    const blogToAdd = {
      id: Date.now(),
      title: newBlog.title,
      author: user?.username || "Usuario",
      excerpt: newBlog.excerpt,
      imageUrl: newBlog.image || blogExample,
      avatarUrl: avatarDefault,
    };

    setBlogsData([blogToAdd, ...blogsData]);

    setNewBlog({
      title: "",
      author: "",
      excerpt: "",
      image: null,
    });

    UIkit.notification({
      message: "Blog publicado exitosamente.",
      status: "success",
      pos: "top-center",
    });
  };

  return (
    <div className="uk-section first-child-adjustment uk-dark blog-background">
      <div className="uk-container uk-text-default">
        {/* Botón para cerrar sesión */}
        {isLoggedIn && (
          <div className="uk-margin-bottom">
            <button
              className="uk-button uk-button-danger blog-container-round"
              onClick={handleLogout}
            >
              Cerrar sesión ({user?.username})
            </button>
          </div>
        )}

        {/* Formulario para nuevo blog */}
        <div className="uk-card uk-card-default uk-card-body uk-margin-bottom blog-container-round color-text-black">
          <h3 className="uk-card-title">Agregar nuevo blog</h3>
          <form className="uk-grid-small" data-uk-grid onSubmit={handleBlogSubmit}>
            <div className="uk-width-1-2@s">
              <input
                className="uk-input"
                type="text"
                placeholder="Título del blog"
                value={newBlog.title}
                onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                required
              />
            </div>
            <div className="uk-width-1-2@s">
              <input
                className="uk-input"
                type="text"
                placeholder="Autor"
                value={newBlog.author}
                onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                required
              />
            </div>
            <div className="uk-width-1-1">
              <textarea
                className="uk-textarea"
                rows="3"
                placeholder="Resumen o introducción"
                value={newBlog.excerpt}
                onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
                required
              ></textarea>
            </div>
            <div className="uk-width-1-1">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: URL.createObjectURL(e.target.files[0]) })
                }
              />
            </div>
            <div className="uk-width-1-1">
              <button type="submit" className="uk-button uk-button-secondary blog-container-round">
                Publicar blog
              </button>
            </div>
          </form>
        </div>

        {/* Mostrar blogs */}
        <div className="uk-child-width-1-2@s" uk-grid="masonry: pack" data-uk-grid>
          {blogsData.map((blog) => (
            <div key={blog.id}>
              <div className="uk-card uk-card-default uk-card-hover blog-container-round color-text-black">
                <div className="blog-image-container">
                  <img src={blog.imageUrl} alt={blog.title} />
                </div>
                <div className="uk-card-body">
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
                    className="uk-button uk-button-secondary uk-margin-small-top blog-container-round"
                    onClick={() => toggleComments(blog.id)}
                  >
                    {visibleComments[blog.id] ? "Cerrar comentarios" : "Ver comentarios"}
                  </button>

                  {visibleComments[blog.id] && (
                    <div className="uk-margin-top">
                      <div className="uk-flex uk-flex-middle uk-margin">
                        <img
                          src={avatarDefault}
                          width="40"
                          height="40"
                          className="uk-border-circle"
                          alt="Usuario"
                        />
                        <span className="uk-margin-left">
                          {user?.username || "Invitado"}
                        </span>
                      </div>

                      <textarea
                        className="uk-textarea uk-placeholder blog-login-input"
                        rows="3"
                        placeholder="Escribe tu comentario..."
                        value={commentInputs[blog.id] || ""}
                        onChange={(e) =>
                          handleCommentChange(blog.id, e.target.value)
                        }
                      ></textarea>

                      <button
                        className="uk-button uk-button-primary uk-margin-top blog-container-round"
                        onClick={() => handleCommentSubmit(blog.id)}
                      >
                        Comentar
                      </button>

                      {(commentsByBlog[blog.id] || []).map((comment, index) => (
                        <article className="uk-comment uk-margin-top" key={index}>
                          <header className="uk-comment-header uk-flex uk-flex-middle">
                            <img
                              className="uk-comment-avatar uk-border-circle"
                              src={avatarDefault}
                              width="40"
                              height="40"
                              alt={comment.author}
                            />
                            <div className="uk-margin-small-left">
                              <h4 className="uk-comment-title uk-margin-remove color-text-black">
                                {comment.author}
                              </h4>
                              <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                <li>
                                  <span className="color-text-black">Hace un momento</span>
                                </li>
                              </ul>
                            </div>
                          </header>
                          <div className="uk-comment-body">
                            <p>{comment.text}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Blog;
