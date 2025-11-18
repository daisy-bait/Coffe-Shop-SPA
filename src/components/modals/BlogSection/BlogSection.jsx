import avatarDefault from "../../../assets/img/avatars/default.jpg";
import { useBlogs } from "../../../context/BlogsContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "../../../schemas/comment.schema";
import { useAuth } from "../../../context/AuthContext";
import "../modals.css";
import { timeAgo } from "../../../assets/scripts/timeAgo";
import blogDefault from "../../../assets/img/blog/blogDefault.jpg";

const BlogSection = ({ isOpen, blog, onClose }) => {
  const { user, isAuth, roles } = useAuth();
  const {
    comments,
    createComment,
    searchComments,
    modifiedBlogs,
    setModifiedBlogs,
  } = useBlogs();

  console.log(blog);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(commentSchema),
  });

  useEffect(() => {
    reset({
      content: "",
      enabled: true,
    });
  }, [reset]);

  useEffect(() => {
    searchComments({
      blogId: blog._id,
    });
    setModifiedBlogs(false);
  }, [modifiedBlogs]);

  const handleCommentSubmit = async (data) => {
    try {
      const commentData = {
        content: data.content,
        userId: user._id,
        blogId: blog._id,
      };

      const success = await createComment(commentData);
      if (success) {
        reset();
        if (window.UIkit)
          window.UIkit.notification({
            message: "Comentario publicado exitosamente.",
            status: "success",
            pos: "top-center",
          });
      }
    } catch (error) {
      console.error("Error al enviar el comentario:", error);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  const handleClose = () => onClose();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div
      className={`uk-modal-container uk-modal login-modal-display ${
        isOpen ? "uk-open visible" : "hidden"
      }`}
      onClick={handleBackdropClick}
      uk-modal="true"
    >
      <div
        className="uk-modal-dialog uk-modal-body uk-light coffee-modal-body"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-golden"
          type="button"
          onClick={handleClose}
        ></button>
        <div className="modal-scrollable">
          <div className="uk-margin-top">
            <div className="uk-text-center uk-margin-large-bottom">
              <h2 className="uk-heading-small uk-text-uppercase menu-header-title">
                <span className="uk-display-inline-block uk-padding-small menu-header-underline">
                  {blog.title}
                </span>
              </h2>
            </div>
            <p className="blog-content">{blog.content}</p>
            <p className="uk-text-lead menu-header-subtitle">
              Autor: {blog.user.username}
            </p>
            <p className="uk-text-lead menu-header-subtitle">
              {timeAgo(blog.updatedAt)}
            </p>
            <div className="blog-preview-image-container">
              <img
                src={blog.image ? blog.image.source : blogDefault}
                alt="Preview"
                className="blog-preview-img"
              />
            </div>
            <hr />
            <h3>Comentarios</h3>
            {isAuth && roles.includes("CUSTOMER") && (
              <form onSubmit={handleSubmit(handleCommentSubmit)}>
                <div className="uk-flex uk-flex-middle">
                  <img
                    src={avatarDefault}
                    width="40"
                    height="40"
                    className="uk-border-circle"
                    alt="Usuario"
                  />
                  <span className="uk-comment-title uk-margin-left blog-user-text">
                    {user.username || "Invitado"}
                  </span>
                </div>
                <textarea
                  className="uk-textarea uk-margin-top blog-login-input"
                  rows="3"
                  {...register("content")}
                  placeholder="Escribe tu comentario..."
                ></textarea>
                {errors.content && (
                  <p className="uk-text-danger">{errors.content.message}</p>
                )}
                <button
                  className={"uk-button uk-button-primary blog-button-comment".concat(
                    !errors.content ? " uk-margin-top" : ""
                  )}
                  type="submit"
                >
                  Comentar
                </button>
              </form>
            )}
            {Array.isArray(comments) && comments.length > 0 ? (
              <>
                {comments.map((comment, index) => (
                  <article className="uk-comment uk-margin-top" key={index}>
                    <header className="uk-comment-header uk-margin-remove uk-flex uk-flex-middle">
                      <img
                        className="uk-comment-avatar uk-border-circle"
                        src={avatarDefault}
                        width="40"
                        height="40"
                        alt={comment.user.username}
                      />
                      <div className="uk-margin-small-left">
                        <h4 className="uk-comment-title uk-margin-remove">
                          {comment.user.username}
                        </h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                          <li>
                            <span className="uk-text-capitalize">
                              {timeAgo(comment.updatedAt)}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </header>
                    <div className="uk-comment-body uk-margin-medium-left">
                      <p className="uk-margin-small-left">{comment.content}</p>
                    </div>
                  </article>
                ))}
              </>
            ) : (
              <div className="uk-text-center uk-margin-large-top uk-margin-large-bottom">
                No hay comentarios para mostrar
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
