import 'uikit/dist/css/uikit.min.css';

import coffeeItems from "../data/coffeeItems"; // Asegúrate de que esta ruta sea correcta

const Menu = () => {
    return (
        <div className="first-child-adjustment uk-section uk-background-secondary uk-light uk-padding-small"
            style={{
                background: 'linear-gradient(to bottom, #1e1e1e, #2c2c2c)',
            }}>

            <div className="uk-container uk-container-xlarge uk-padding-small uk-light">
                {/* Encabezado */}
                <div className="uk-text-center uk-margin-large-bottom">
                    <h2 className="uk-heading-small uk-text-uppercase"
                        style={{ letterSpacing: '3px', fontWeight: 300, marginBottom: '10px' }}>
                        <span className="uk-display-inline-block uk-padding-small"
                            style={{ borderBottom: '2px solid rgba(212, 167, 98, 0.7)', color: '#f5f5f5' }}>
                            Nuestro Menú
                        </span>
                    </h2>
                    <p className="uk-text-lead" style={{ color: '#d4a762' }}>
                        Descubre la excelencia en cada taza
                    </p>
                </div>

                {/* Grid de productos */}
                <div className="uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1@s"
                    data-uk-grid
                    data-uk-height-match="target: > div > .uk-card"
                    style={{ marginTop: '20px' }}>

                    {Array.isArray(coffeeItems) && coffeeItems.map((item, index) => (
                        <div key={index}>
                            {/* Card del producto */}
                            <div className="uk-card uk-card-default uk-card-hover uk-flex uk-flex-column uk-height-1-1"
                                style={{ backgroundColor: '#2c2c2c', border: '1px solid rgba(212, 167, 98, 0.1)', borderRadius: '8px', padding: '15px' }}>

                                <div className="uk-flex uk-flex-middle uk-flex-wrap uk-child-width-expand@m uk-grid-small" data-uk-grid>
                                    {/* Imagen */}
                                    <div className="uk-flex uk-flex-center uk-width-1-3@s uk-width-1-4@m">
                                        <div className="uk-border-circle uk-overflow-hidden"
                                            style={{ width: '100px', height: '100px', minWidth: '80px', border: '2px solid #d4a762', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                                            <img src={item.img} alt={item.title} className="uk-cover"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                                        </div>
                                    </div>

                                    {/* Información básica */}
                                    <div style={{ flexGrow: 1 }}>
                                        <div className="uk-flex uk-flex-between uk-flex-middle">
                                            <h3 className="uk-card-title uk-margin-remove-bottom"
                                                style={{
                                                    color: '#f5f5f5',
                                                    fontSize: '1.2rem'
                                                }}>
                                                {item.title}
                                            </h3>
                                            <span className="uk-label"
                                                style={{
                                                    backgroundColor: 'rgba(212, 167, 98, 0.9)',
                                                    color: '#2c1608',
                                                    padding: '3px 10px',
                                                    borderRadius: '12px',
                                                    fontWeight: 'bold',
                                                    fontSize: '0.9rem'
                                                }}>
                                                {item.price}
                                            </span>
                                        </div>

                                        <div className="uk-margin-small-top">
                                            <span className="uk-badge"
                                                style={{
                                                    backgroundColor: 'rgba(94, 43, 22, 0.7)',
                                                    color: '#f5f5f5',
                                                    fontSize: '0.7rem',
                                                    padding: '2px 8px',
                                                    marginRight: '8px'
                                                }}>
                                                {item.origin}
                                            </span>
                                            {item.isPopular && (
                                                <span className="uk-badge"
                                                    style={{
                                                        backgroundColor: 'rgba(165, 42, 42, 0.7)',
                                                        color: 'white',
                                                        fontSize: '0.7rem',
                                                        padding: '2px 8px'
                                                    }}>
                                                    ★ Bestseller
                                                </span>
                                            )}
                                        </div>

                                        <p className="uk-margin-small-top"
                                            style={{
                                                color: 'rgba(245, 245, 245, 0.8)',
                                                fontSize: '0.85rem',
                                                lineHeight: '1.5'
                                            }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Botón para abrir modal */}
                                <div className="uk-text-center uk-padding-small">
                                    <button className="uk-button uk-button-default"
                                        style={{
                                            color: '#d4a762',
                                            backgroundColor: 'transparent',
                                            border: '1px solid rgba(212, 167, 98, 0.5)',
                                            borderRadius: '6px',
                                            padding: '3px 15px',
                                            fontSize: '0.85rem',
                                            transition: 'all 0.3s',
                                        }}
                                        data-uk-toggle={`target: #modal-${index}`}>
                                        Ver más detalles
                                    </button>
                                </div>
                            </div>

                            {/* Modal para este producto */}
                            <div id={`modal-${index}`} className="uk-modal-container uk-modal" data-uk-modal>
                                <div className="uk-modal-dialog uk-modal-body uk-light"
                                    style={{
                                        backgroundColor: '#2c2c2c',
                                        borderRadius: '8px'
                                    }}>

                                    <button className="uk-modal-close-default"
                                        type="button"
                                        data-uk-close
                                        style={{ color: '#d4a762' }}></button>

                                    <div className="uk-grid-collapse" data-uk-grid>
                                        {/* Columna de imagen en modal */}
                                        <div className="uk-width-1-3@m uk-width-1-1@s">
                                            <div className="uk-padding uk-flex uk-flex-center">
                                                <div className="uk-border-circle uk-overflow-hidden"
                                                    style={{
                                                        width: '300px',
                                                        height: '300px',
                                                        border: '3px solid #d4a762',
                                                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
                                                    }}>
                                                    <img src={item.img}
                                                        alt={item.title}
                                                        className="uk-cover"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Columna de contenido en modal */}
                                        <div className="uk-width-2-3@m uk-width-1-1@s uk-padding-large">
                                            <h2 className="uk-modal-title"
                                                style={{
                                                    color: '#d4a762',
                                                    borderBottom: '1px solid rgba(212, 167, 98, 0.3)',
                                                    paddingBottom: '10px'
                                                }}>
                                                {item.title}
                                            </h2>

                                            <div className="uk-margin-medium-top">
                                                <h3 style={{
                                                    color: '#f5f5f5',
                                                    fontSize: '1.2rem',
                                                    marginBottom: '15px'
                                                }}>
                                                    Ingredientes:
                                                </h3>
                                                <ul className="uk-list uk-list-bullet"
                                                    style={{ color: 'rgba(245, 245, 245, 0.8)' }}>
                                                    {(item.ingredients || []).map((ing, i) => (
                                                        <li key={i}>{ing}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="uk-margin-medium-top">
                                                <h3 style={{
                                                    color: '#f5f5f5',
                                                    fontSize: '1.2rem',
                                                    marginBottom: '15px'
                                                }}>
                                                    Preparación:
                                                </h3>
                                                <p style={{
                                                    color: 'rgba(245, 245, 245, 0.8)',
                                                    lineHeight: '1.6'
                                                }}>
                                                    {item.preparation || "Información no disponible."}
                                                </p>
                                            </div>

                                            <div className="uk-margin-medium-top">
                                                <div className="uk-grid-small" data-uk-grid>
                                                    <div>
                                                        <span className="uk-label"
                                                            style={{
                                                                backgroundColor: 'rgba(212, 167, 98, 0.15)',
                                                                color: '#d4a762',
                                                                fontSize: '0.9rem',
                                                                padding: '5px 10px'
                                                            }}>
                                                            Tostado: {item.roastLevel}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="uk-label"
                                                            style={{
                                                                backgroundColor: 'rgba(212, 167, 98, 0.15)',
                                                                color: '#d4a762',
                                                                fontSize: '0.9rem',
                                                                padding: '5px 10px'
                                                            }}>
                                                            Sabor: {item.flavorProfile}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu;
