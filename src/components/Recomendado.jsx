import React, { useEffect, useState, useMemo } from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import coffeeItems from "../data/coffeeItems"; 
const Recomendado = () => {
    const [imageError, setImageError] = useState(false);

    const productoRecomendado = useMemo(() => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        return coffeeItems[dayOfYear % coffeeItems.length];
    }, []);

    const handleImageError = () => setImageError(true);

    return (
        <div className="first-child-adjustment uk-section uk-background-secondary uk-light uk-padding-small">
            <div className="uk-container uk-container-xlarge uk-light uk-background-secondary"
                style={{
                    background: 'linear-gradient(to bottom, #1e1e1e, #2c2c2c)',
                    backgroundColor: '#1e1e1e',
                    padding: '40px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* TÍTULO */}
                <h1 className="uk-heading-line uk-text-center">
                    <span style={{ color: '#d4a762', fontSize: '2rem', margin: '10px' }}>☕ Descubre el Sabor del Día</span>
                </h1>

                <div
                    className="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-1@s uk-child-width-1-2@m"
                    data-uk-grid
                    style={{
                        backgroundColor: '#2c2c2c',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        width: '100%',
                        maxWidth: '960px',
                        height: 'auto',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Imagen*/}
                    <div className="uk-flex uk-flex-center uk-flex-middle uk-padding">
                        <img
                            src={imageError ? '/default-coffee.jpg' : productoRecomendado?.img}
                            alt={productoRecomendado?.title || "Recomendación del día"}
                            onError={handleImageError}
                            style={{
                                width: '220px',
                                height: '220px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                border: '4px solid #d4a762',
                            }}
                        />
                    </div>

                    {/* Contenido */}
                    <div className="uk-padding uk-flex uk-flex-column uk-flex-between">
                        <div>
                            <h3 className="uk-card-title" style={{ color: '#f5f5f5', marginBottom: '10px' }}>
                                {productoRecomendado?.title || "Cargando recomendación..."}
                            </h3>

                            <div className="uk-margin-small">
                                <span
                                    className="uk-label"
                                    style={{
                                        backgroundColor: 'rgba(212, 167, 98, 0.9)',
                                        color: '#2c1608',
                                        fontSize: '1rem',
                                        padding: '6px 12px'
                                    }}
                                >
                                    {productoRecomendado?.price || "$ --"}
                                </span>

                                {productoRecomendado?.isPopular && (
                                    <span
                                        className="uk-label uk-margin-small-left"
                                        style={{
                                            backgroundColor: 'rgba(165, 42, 42, 0.7)',
                                            color: 'white'
                                        }}
                                    >
                                        Más Popular
                                    </span>
                                )}
                            </div>

                            <p style={{ color: 'rgba(245, 245, 245, 0.85)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                {productoRecomendado?.description || "Seleccionando nuestra mejor recomendación para ti..."}
                            </p>

                            <div className="uk-margin-small">
                                <strong style={{ color: '#d4a762' }}>Categoría:</strong>{' '}
                                <span style={{ color: '#f5f5f5' }}>{productoRecomendado?.category || "Café de especialidad"}</span>
                            </div>
                            <div className="uk-margin-small">
                                <strong style={{ color: '#d4a762' }}>Intensidad:</strong>{' '}
                                <span style={{ color: '#f5f5f5' }}>{productoRecomendado?.intensity || "Media-Alta"}</span>
                            </div>
                            <div className="uk-margin-small">
                                <strong style={{ color: '#d4a762' }}>Tipo de grano:</strong>{' '}
                                <span style={{ color: '#f5f5f5' }}>{productoRecomendado?.beanType || "Arábica"}</span>
                            </div>
                            <div className="uk-margin-small">
                                <strong style={{ color: '#d4a762' }}>Proceso:</strong>{' '}
                                <span style={{ color: '#f5f5f5' }}>{productoRecomendado?.process || "Lavado"}</span>
                            </div>

                            <div className="uk-margin-small">
                                <span className="uk-badge" style={{ backgroundColor: 'rgba(94, 43, 22, 0.7)', color: '#f5f5f5' }}>
                                    Origen: {productoRecomendado?.origin || "Colombia"}
                                </span>
                            </div>
                        </div>

                        {productoRecomendado?.recommendation && (
                            <div className="uk-margin-top">
                                <p style={{ color: '#d4a762', fontSize: '0.9rem', fontStyle: 'italic' }}>
                                    {productoRecomendado.recommendation}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Recomendado;
