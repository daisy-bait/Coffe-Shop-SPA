import "../cards.css";

const RecommendedCard = ({ product, onImageError }) => {
  console.log(product);
  return (
    <div
      className="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-1@s uk-child-width-1-2@m recomendado-card"
      data-uk-grid
    >
      <div className="uk-flex uk-flex-center uk-flex-middle uk-padding">
        <img
          src={
            product.image
              ? `/src/assets/img/menu/${product.image}`
              : "/src/assets/img/coffe-image-1.jpg"
          }
          alt={product.title}
          onError={onImageError}
          className="recomendado-image"
        />
      </div>
      <div className="uk-padding uk-flex uk-flex-column uk-flex-between">
        <div>
          <h3 className="uk-card-title recomendado-product-title">
            {product.name}
          </h3>
          <div className="uk-margin-small">
            <span className="uk-label recomendado-price">
              {"$ " + product.price.toLocaleString()}
            </span>
              <span className="uk-label uk-margin-small-left recomendado-popular">
                POPULAR
              </span>
          </div>
          <p className="recomendado-description">
            {product?.description ||
              "Seleccionando nuestra mejor recomendación para ti..."}
          </p>
          <div className="uk-margin-small">
            <strong className="recomendado-info-label">Categoría:</strong>{" "}
            <span className="recomendado-info-value">
              {product.category.name}
            </span>
          </div>
          <div className="uk-margin-small">
            <strong className="recomendado-info-label">Intensidad:</strong>{" "}
            <span className="recomendado-info-value">
              {product.roast_level || "Media-Alta"}
            </span>
          </div>
          <div className="uk-margin-small">
            <strong className="recomendado-info-label">Tipo de grano:</strong>{" "}
            <span className="recomendado-info-value">
              {product?.beanType || "Arábica"}
            </span>
          </div>
          <div className="uk-margin-small">
            <strong className="recomendado-info-label">Proceso:</strong>{" "}
            <span className="recomendado-info-value">
              {product?.process || "Lavado"}
            </span>
          </div>
          <div className="uk-margin-small">
            <span className="uk-badge recomendado-origin-badge">
              Origen: {product?.origin || "Colombia"}
            </span>
          </div>
        </div>
        {product?.recommendations && (
          <div className="uk-margin-top">
            <p className="recomendado-special">{product.recommendations}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedCard;
