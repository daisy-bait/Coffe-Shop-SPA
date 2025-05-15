import React, { useEffect, useState, useMemo } from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import espressoImg from "../assets/img/menu/espresso.jpg";
import mocaccinoImg from "../assets/img/menu/mocaccino.jpg";
import americanoImg from "../assets/img/menu/americano.jpg";
import macchiatoImg from "../assets/img/menu/macchiato.jpg";
import espressoDobleImg from "../assets/img/menu/espresso-doble.jpg";
import campesinoImg from "../assets/img/menu/campesino.jpg";
import irlandesImg from "../assets/img/menu/irlandes.jpg";
import bombonImg from "../assets/img/menu/bombon.jpg";
import carajilloImg from "../assets/img/menu/carajillo.jpg";
import cappuccinoImg from "../assets/img/menu/cappuccino.jpg";
import vienesImg from "../assets/img/menu/vienes.jpg";
import latteImg from "../assets/img/menu/latte.jpg";
import irlandesCappuccinoImg from "../assets/img/menu/irlandes-cappuccino.jpg";
import cappuccinoFrioImg from "../assets/img/menu/cappuccino-frio.jpg";
import saborizadoFrioImg from "../assets/img/menu/saborizado-frio.jpg";
import almendraIceImg from "../assets/img/menu/almendra-ice.jpg";
const Recomendado = () => {
    useEffect(() => {
        UIkit.use(Icons);
    }, []);

    const coffeeItems = [
        {
            id: 1,
            title: "Espresso Sencillo",
            price: "$5.200",
            description: "La esencia pura del café en su forma más concentrada.",
            img: espressoImg,
            isPopular: false,
            origin: "Colombia",
            recommendation: "Perfecto para empezar el día con energía. Nuestro espresso premium tiene un balance perfecto entre acidez y cuerpo.",
            benefits: ["Despierta tus sentidos", "Alto contenido de antioxidantes", "Aroma intenso"]
        },
        {
            id: 2,
            title: "Americano",
            price: "$6.000",
            description: "Café suave y diluido para quienes prefieren un sabor menos intenso.",
            img: americanoImg,
            isPopular: false,
            origin: "Colombia",
            recommendation: "Una opción ligera y prolongada ideal para una conversación larga.",
            benefits: ["Hidratación prolongada", "Bajo en calorías", "Sabor suave"]
        },
        {
            id: 3,
            title: "Macchiato",
            price: "$7.000",
            description: "Espresso con un toque de leche vaporizada.",
            img: macchiatoImg,
            isPopular: false,
            origin: "Italia",
            recommendation: "Ideal si te gusta el espresso con un pequeño giro cremoso.",
            benefits: ["Equilibrio entre fuerte y suave", "Menor acidez", "Aroma suave"]
        },
        {
            id: 4,
            title: "Espresso Doble",
            price: "$6.500",
            description: "El doble de energía en una taza intensa.",
            img: espressoDobleImg,
            isPopular: true,
            origin: "Colombia",
            recommendation: "Para días exigentes o amantes del sabor fuerte.",
            benefits: ["Energía prolongada", "Sabor intenso", "Alta concentración de antioxidantes"]
        },
        {
            id: 5,
            title: "Campesino",
            price: "$8.000",
            description: "Receta tradicional colombiana con panela y canela.",
            img: campesinoImg,
            isPopular: false,
            origin: "Colombia",
            recommendation: "Un sabor típico y reconfortante de las montañas.",
            benefits: ["Energía natural", "Dulzor tradicional", "Mejora la digestión"]
        },
        {
            id: 6,
            title: "Irlandés",
            price: "$12.000",
            description: "Café con un toque de whisky y crema batida.",
            img: irlandesImg,
            isPopular: true,
            origin: "Irlanda",
            recommendation: "Perfecto para las tardes frías o para cerrar el día.",
            benefits: ["Relajante", "Sabor profundo", "Textura cremosa"]
        },
        {
            id: 7,
            title: "Bombón",
            price: "$9.000",
            description: "Café con leche condensada. Dulce y cremoso.",
            img: bombonImg,
            isPopular: false,
            origin: "España",
            recommendation: "Un postre en forma de café.",
            benefits: ["Alto en energía", "Textura sedosa", "Ideal como digestivo"]
        },
        {
            id: 8,
            title: "Carajillo",
            price: "$10.000",
            description: "Mezcla de café y licor fuerte, usualmente brandy.",
            img: carajilloImg,
            isPopular: false,
            origin: "España",
            recommendation: "Perfecto para cerrar una buena comida con intensidad.",
            benefits: ["Digestivo", "Combina energía y relajación", "Sabor único"]
        },
        {
            id: 9,
            title: "Cappuccino",
            price: "$9.000",
            description: "Espresso, leche vaporizada y espuma equilibrados.",
            img: cappuccinoImg,
            isPopular: true,
            origin: "Italia",
            recommendation: "La opción clásica para cualquier hora del día.",
            benefits: ["Espuma suave", "Sabor equilibrado", "Ideal para acompañar postres"]
        },
        {
            id: 10,
            title: "Mocaccino",
            price: "$15.000",
            description: "El matrimonio perfecto entre café y chocolate.",
            img: mocaccinoImg,
            isPopular: true,
            origin: "Mezcla Especial",
            recommendation: "Nuestro dulce recomendado para hoy. La combinación perfecta para los amantes del chocolate.",
            benefits: ["Balance perfecto café-chocolate", "Textura cremosa", "Endulzado natural"]
        },
        {
            id: 11,
            title: "Vienés",
            price: "$11.000",
            description: "Café cubierto con abundante crema batida.",
            img: vienesImg,
            isPopular: false,
            origin: "Austria",
            recommendation: "Lujo y suavidad en una sola taza.",
            benefits: ["Cremoso", "Atractivo visual", "Perfecto como postre"]
        },
        {
            id: 12,
            title: "Latte",
            price: "$9.500",
            description: "Espresso con abundante leche vaporizada.",
            img: latteImg,
            isPopular: false,
            origin: "Italia",
            recommendation: "Ideal para quienes prefieren un café suave y cremoso.",
            benefits: ["Baja acidez", "Textura suave", "Sabor prolongado"]
        },
        {
            id: 13,
            title: "Irlandés Cappuccino",
            price: "$13.000",
            description: "Fusión de cappuccino con licor irlandés.",
            img: irlandesCappuccinoImg,
            isPopular: false,
            origin: "Fusión",
            recommendation: "Combina lo mejor del cappuccino con el carácter del licor.",
            benefits: ["Cremoso y profundo", "Ideal para eventos", "Sabor exótico"]
        },
        {
            id: 14,
            title: "Cappuccino Frío",
            price: "$10.000",
            description: "Refrescante versión helada del clásico cappuccino.",
            img: cappuccinoFrioImg,
            isPopular: true,
            origin: "Italia",
            recommendation: "La mejor elección para días calurosos.",
            benefits: ["Refrescante", "Espuma fría", "Energía sin calor"]
        },
        {
            id: 15,
            title: "Saborizado Frío",
            price: "$11.000",
            description: "Café frío con sabores como vainilla, caramelo o avellana.",
            img: saborizadoFrioImg,
            isPopular: false,
            origin: "Personalizado",
            recommendation: "Ajustado a tu gusto, con un toque dulce y refrescante.",
            benefits: ["Versátil", "Dulce y suave", "Ideal para personalizar"]
        },
        {
            id: 16,
            title: "Almendra Ice",
            price: "$11.500",
            description: "Café frío con leche de almendras, sin lactosa.",
            img: almendraIceImg,
            isPopular: false,
            origin: "Vegano",
            recommendation: "Perfecto si prefieres una opción ligera y sin lácteos.",
            benefits: ["Sin lactosa", "Bajo en calorías", "Alternativa vegetal"]
        }
    ];


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
       <div
    className="uk-section uk-light uk-background-secondary uk-height-viewport"
    style={{
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
        {/* Imagen circular */}
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


    );
};

export default Recomendado;
