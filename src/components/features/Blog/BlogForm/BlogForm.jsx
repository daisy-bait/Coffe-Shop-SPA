import { useState } from "react";

const BlogForm = ({ newImage, setNewImage, errors, register, onSubmit }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageFile(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageFile(file);
    }
  };

  const handleImageFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setNewImage({ ...newImage, source: imageUrl });
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setNewImage({ ...newImage, source: null });
    const fileInput = document.getElementById("blog-file-input");
    if (fileInput) fileInput.value = "";
  };

  return (
    <div className="uk-card uk-card-default uk-card-body blog-container-round blog-form-card blog-form-spacing">
      <h3 className="uk-card-title">Agregar nuevo blog</h3>
      <form onSubmit={onSubmit}>
        <div className="uk-grid-small" data-uk-grid>
          <div className="uk-width-1-1">
            <label className="uk-form-label blog-form-label">
              Título del blog
            </label>
            <input
              className="uk-input blog-login-input"
              type="text"
              {...register("title")}
              placeholder="Título del blog"
            />
            {errors.title && (
              <p className="uk-text-danger">{errors.title.message}</p>
            )}
          </div>

          <div className="uk-width-1-1">
            <label className="uk-form-label blog-form-label">
              Resumen o Introducción
            </label>
            <textarea
              className="uk-textarea blog-login-input"
              rows="3"
              {...register("content")}
              placeholder="Resumen o introducción"
            ></textarea>
            {errors.content && (
              <p className="uk-text-danger">{errors.content.message}</p>
            )}
          </div>

          <div className="uk-width-1-1">
            <label className="uk-form-label blog-form-label">
              Imagen del Artículo
            </label>
            <div className="blog-uploader">
              {!newImage.source ? (
                <div
                  className={`blog-upload-zone ${dragOver ? "drag-over" : ""}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() =>
                    document.getElementById("blog-file-input").click()
                  }
                >
                  <div>
                    <span
                      uk-icon="icon: cloud-upload; ratio: 3"
                      className="blog-upload-icon"
                    ></span>
                    <h4 className="blog-upload-title">Subir Imagen</h4>
                    <p className="blog-upload-subtitle">
                      Arrastra y suelta tu imagen aquí
                    </p>
                    <p className="blog-upload-info">o</p>
                    <button
                      type="button"
                      className="uk-button uk-button-secondary blog-button-secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById("blog-file-input").click();
                      }}
                    >
                      Seleccionar Archivo
                    </button>
                    <p className="blog-upload-info uk-margin-small-top">
                      Formatos: JPG, PNG, GIF (máx. 5MB)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="blog-preview-image-container">
                  <img
                    src={newImage.source}
                    alt="Preview"
                    className="blog-preview-img"
                  />
                  <button
                    type="button"
                    className="blog-preview-remove"
                    onClick={removeImage}
                    aria-label="Eliminar imagen"
                  />
                </div>
              )}
              <input
                id="blog-file-input"
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="blog-file-input-hidden"
              />
            </div>
          </div>

          <div className="uk-width-1-1">
            <button
              type="submit"
              className="uk-button btn-golden-primary uk-width-1-1"
            >
              <span
                uk-icon="icon: file-edit"
                className="uk-margin-small-right"
              ></span>
              Publicar blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;