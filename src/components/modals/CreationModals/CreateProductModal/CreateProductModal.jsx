import { useState, useEffect } from "react";
import "../FormModal.css";
import "../../../cards/cards.css";
import { useProducts } from "../../../../context/ProductsContext";
import { productSchema } from "../../../../schemas/product.schema";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateProductModal = ({ isOpen, onClose, mode = "create", product }) => {
  const isModifying = mode === "modify";
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  let imagesMenu = Object.keys(import.meta.glob("/src/assets/img/menu/*"));

  const {
    createProduct,
    modifyProduct,
    categories,
    errors: productErrors,
  } = useProducts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (isModifying && product) {
      reset({
        name: product.name || "",
        category: product.category?.name || "",
        image: product.image || "",
        description: product.description || "",
        roastLevel: product.roast_level || "",
        price: product.price || 0,
        stock: product.stock || 0,
        enabled: product.enabled !== undefined ? product.enabled : true,
        origin: product.origin || "",
        recommendations: product.recommendations || "",
        benefits: product.benefits || [],
      });
    }
  }, [isModifying, product, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "benefits",
  });

  const selectedCategory = watch("category");
  const selectedImage = watch("image");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFormSubmit = async (data) => {
    try {
      const selectedCategory = categories.find(
        (cat) => cat.name === data.category
      );

      const parsedData = {
        name: data.name,
        category: selectedCategory?._id || data.category,
        image: data.image,
        description: data.description,
        roast_level: data.roastLevel,
        price: data.price,
        stock: data.stock,
        enabled: data.enabled,
        origin: data.origin,
        recommendations: data.recommendations,
        benefits: data.benefits,
      };

      let success = false;

      if (mode === "create") {
        success = await createProduct(parsedData);
      } else {
        success = await modifyProduct(product._id, parsedData);
      }

      if (success) handleClose();
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const CategoryModal = () => (
    <div
      className="uk-modal uk-open login-modal-display"
      onClick={() => setShowCategoryModal(false)}
    >
      <div
        className="uk-modal-dialog uk-modal-body login-modal-container login-modal-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="uk-modal-title">Seleccionar Categoría</h3>
        <button
          className="modal-close-golden"
          type="button"
          onClick={() => setShowCategoryModal(false)}
          aria-label="Cerrar"
        ></button>

        {categories?.length ? (
          <ul className="uk-list uk-list-divider">
            {categories.map((cat) => (
              <li
                key={cat._id}
                className="uk-flex uk-flex-between uk-flex-middle"
                onClick={() => {
                  setValue("category", cat.name);
                  setShowCategoryModal(false);
                }}
              >
                <span>{cat.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay categorías registradas</p>
        )}
      </div>
    </div>
  );

  const ImageModal = () => (
    <div
      className="uk-modal uk-open login-modal-display"
      onClick={() => setShowImageModal(false)}
    >
      <div
        className="uk-modal-dialog uk-modal-body login-modal-container login-modal-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="uk-modal-title">Seleccionar Imagen del Producto</h3>
        <button
          className="modal-close-golden"
          type="button"
          onClick={() => setShowImageModal(false)}
          aria-label="Cerrar"
        ></button>

        <div
          className="uk-grid-small uk-child-width-1-3@s uk-child-width-1-4@m"
          data-uk-grid
        >
          {imagesMenu.map((src, index) => {
            const filename = src.split("/").pop();
            return (
              <div className="uk-flex uk-flex-center uk-width-1-3@s uk-width-1-4@m">
                <div
                  key={index}
                  className="uk-border-circle uk-overflow-hidden menu-product-image-container"
                  onClick={() => {
                    setValue("image", filename);
                    setShowImageModal(false);
                  }}
                >
                  <img
                    src={src}
                    alt={filename}
                    className="uk-cover menu-product-image"
                  />
                  <small className="uk-text-muted">{filename}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="uk-modal uk-open login-modal-display"
      onClick={handleBackdropClick}
    >
      <div
        className="uk-modal-dialog uk-modal-body login-modal-container login-modal-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-golden"
          type="button"
          onClick={handleClose}
          aria-label="Cerrar"
        ></button>

        <h2 className="uk-modal-title">
          {isModifying ? "Modificar Producto" : "Registrar Producto"}
        </h2>

        <form
          className="uk-form-stacked"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="uk-margin">
            <label className="uk-form-label">Nombre</label>
            <input
              className="uk-input login-modal-input"
              type="text"
              {...register("name")}
              placeholder="Nombre del Producto"
            />
            {errors.name && (
              <p className="uk-text-danger">{errors.name.message}</p>
            )}
          </div>

          <div className="uk-margin">
            <label className="uk-form-label">Categoría</label>
            <div className="uk-flex">
              <input
                className="uk-input login-modal-input"
                type="text"
                readOnly
                value={selectedCategory || ""}
                placeholder="Selecciona una categoría"
                onClick={() => setShowCategoryModal(true)}
              />
              <button
                type="button"
                className="uk-button-primary uk-margin-left"
                onClick={() => setShowCategoryModal(true)}
              >
                Elegir
              </button>
            </div>
            {errors.category && (
              <p className="uk-text-danger">{errors.category.message}</p>
            )}
          </div>

          <div className="uk-margin">
            <label className="uk-form-label">Imagen</label>
            <div className="uk-flex uk-flex-middle">
              <input
                className="uk-input login-modal-input uk-text-capitalize"
                type="text"
                readOnly
                value={selectedImage || ""}
                placeholder="Selecciona una imagen"
                onClick={() => setShowImageModal(true)}
              />
              <button
                type="button"
                className="button-select-image uk-button-primary uk-margin-left"
                onClick={() => setShowImageModal(true)}
              >
                Elegir
              </button>
              {selectedImage && (
                <img
                  src={imagesMenu.find((src) => src.includes(selectedImage))}
                  className="uk-margin-left product-preview-small"
                  alt="preview"
                />
              )}
            </div>
            {errors.image && (
              <p className="uk-text-danger">{errors.image.message}</p>
            )}
          </div>

          <div className="uk-margin">
            <label className="uk-form-label">Descripción</label>
            <textarea
              className="uk-textarea login-modal-input"
              {...register("description")}
              placeholder="Describe el producto"
            />
            {errors.description && (
              <p className="uk-text-danger">{errors.description.message}</p>
            )}
          </div>

          <div className="uk-margin">
            <label className="uk-form-label">Nivel de Tostado</label>
            <input
              className="uk-input login-modal-input"
              type="text"
              {...register("roastLevel")}
              placeholder="¿Qué tan cocinado está?"
            />
            {errors.roastLevel && (
              <p className="uk-text-danger">{errors.roastLevel.message}</p>
            )}
          </div>

          <div className="uk-margin">
            <label className="uk-form-label">Precio</label>
            <input
              className="uk-input login-modal-input"
              type="number"
              step="0.01"
              {...register("price", { valueAsNumber: true })}
              placeholder="0.00"
            />
            {errors.price && (
              <p className="uk-text-danger">{errors.price.message}</p>
            )}
          </div>

          <div className="uk-margin">
            <label className="uk-form-label">Stock</label>
            <input
              className="uk-input login-modal-input"
              type="number"
              min="0"
              max="100"
              {...register("stock", { valueAsNumber: true })}
              placeholder="Cantidad disponible"
            />
            {errors.stock && (
              <p className="uk-text-danger">{errors.stock.message}</p>
            )}
          </div>

          <div className="uk-margin">
            <label className="uk-flex uk-flex-middle">
              <input
                className="uk-checkbox uk-margin-small-right"
                type="checkbox"
                {...register("enabled")}
                defaultChecked={true}
              />
              <span className="uk-form-label checkbox-label-no-margin">
                Producto habilitado (visible en el menú)
              </span>
            </label>
            {errors.enabled && (
              <p className="uk-text-danger">{errors.enabled.message}</p>
            )}
          </div>

          <div className="uk-margin">
            <label className="uk-form-label">País de origen</label>
            <input
              className="uk-input login-modal-input"
              type="text"
              {...register("origin")}
              placeholder="Ej: Colombia"
            />
            {errors.origin && (
              <p className="uk-text-danger">{errors.origin.message}</p>
            )}
          </div>

          <div className="uk-margin">
            <label className="uk-form-label">Recomendaciones</label>
            <textarea
              className="uk-textarea login-modal-input"
              {...register("recommendations")}
              placeholder="Ej: Mantener en lugar fresco"
            />
            {errors.recommendations && (
              <p className="uk-text-danger">{errors.recommendations.message}</p>
            )}
          </div>

          <div className="uk-margin">
            <label className="uk-form-label">Beneficios</label>

            {fields.map((field, index) => (
              <div
                key={field.id}
                className="uk-flex uk-flex-middle uk-margin-small"
              >
                <input
                  className="uk-input login-modal-input uk-margin-small-right"
                  type="text"
                  {...register(`benefits.${index}`)}
                  placeholder={`Beneficio ${index + 1}`}
                />
                <button
                  type="button"
                  className="btn-delete-benefit"
                  onClick={() => remove(index)}
                >
                  Eliminar
                </button>
              </div>
            ))}

            <button
              type="button"
              className="btn-add-benefit"
              onClick={() => append()}
            >
              + Añadir Beneficio
            </button>

            {errors.benefits && (
              <p className="uk-text-danger">{errors.benefits.message}</p>
            )}
          </div>

          {productErrors?.length > 0 && (
            <div className="uk-text-danger uk-margin-small-bottom">
              {productErrors.map((err, idx) => (
                <div key={idx}>{err}</div>
              ))}
            </div>
          )}

          <div className="uk-flex uk-flex-between uk-flex-middle uk-margin-top">
            <button className="btn-golden-primary" type="submit">
              {isModifying ? "Guardar cambios" : "Registrar"}
            </button>
            <button
              className="btn-cancel-product"
              type="button"
              onClick={handleClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>

      {showCategoryModal && <CategoryModal />}
      {showImageModal && <ImageModal />}
    </div>
  );
};

export default CreateProductModal;
