import 'uikit/dist/css/uikit.min.css';

import espressoImg from "../assets/img/menu/espresso.jpg";
import americanoImg from "../assets/img/menu/americano.jpg";
import macchiatoImg from "../assets/img/menu/macchiato.jpg";
import espressoDobleImg from "../assets/img/menu/espresso-doble.jpg";
import campesinoImg from "../assets/img/menu/campesino.jpg";
import irlandesImg from "../assets/img/menu/irlandes.jpg";
import bombonImg from "../assets/img/menu/bombon.jpg";
import carajilloImg from "../assets/img/menu/carajillo.jpg";
import cappuccinoImg from "../assets/img/menu/cappuccino.jpg";
import mocaccinoImg from "../assets/img/menu/mocaccino.jpg";

const Menu = () => {

    const coffeeItems = [
        {
            id: 1,
            title: "Espresso Sencillo",
            price: "$5.200",
            origin: "Colombia",
            roastLevel: "Tostado Medio",
            flavorProfile: "Fuerte y Audaz",
            description: "La esencia pura del café en su forma más concentrada.",
            detailedDescription: "Un shot intenso de café recién molido, extraído a alta presión para obtener todos los sabores y aromas.",
            ingredients: [
                "18g de café molido fino",
                "30ml de agua a 90°C"
            ],
            preparation: "Extracción a 9 bares de presión durante 25-30 segundos",
            volume: "30ml",
            caffeineContent: "Alto",
            img: espressoImg,
            isPopular: false,
            isNew: false,
            category: "espresso",
            rating: 4.5,
            brewTime: "30 segundos"
        },
        {
            id: 2,
            title: "Café Americano",
            price: "$6.000",
            origin: "Colombia",
            roastLevel: "Tostado Medio",
            flavorProfile: "Suave y Balanceado",
            description: "Versión alargada del espresso, perfecta para disfrutar lentamente.",
            detailedDescription: "Un espresso diluido en agua caliente para crear una bebida más larga pero manteniendo la intensidad del café.",
            ingredients: [
                "1 shot de espresso (30ml)",
                "150ml de agua caliente"
            ],
            preparation: "Preparar un espresso y agregar agua caliente",
            volume: "180ml",
            caffeineContent: "Moderado",
            img: americanoImg,
            isPopular: true,
            isNew: false,
            category: "espresso",
            rating: 4.2,
            brewTime: "1 minuto"
        },
        {
            id: 3,
            title: "Macchiato",
            price: "$5.500",
            origin: "Colombia",
            roastLevel: "Tostado Medio",
            flavorProfile: "Cremoso y Rico",
            description: "El equilibrio perfecto entre espresso y espuma de leche.",
            detailedDescription: "Un espresso 'manchado' con una pequeña cantidad de espuma de leche para suavizar su intensidad.",
            ingredients: [
                "1 shot de espresso (30ml)",
                "10ml de espuma de leche"
            ],
            preparation: "Preparar espresso y agregar una cucharada de espuma de leche",
            volume: "40ml",
            caffeineContent: "Alto",
            img: macchiatoImg,
            isPopular: false,
            isNew: true,
            category: "espresso",
            rating: 4.3,
            brewTime: "2 minutos"
        },
        {
            id: 4,
            title: "Espresso Doble",
            price: "$6.500",
            origin: "Colombia",
            roastLevel: "Tostado Oscuro",
            flavorProfile: "Intenso y Robusto",
            description: "Doble dosis de energía y sabor concentrado.",
            detailedDescription: "Dos shots de espresso en una sola taza, para los amantes del café fuerte y con carácter.",
            ingredients: [
                "36g de café molido fino",
                "60ml de agua a 90°C"
            ],
            preparation: "Extracción doble a 9 bares de presión durante 25-30 segundos",
            volume: "60ml",
            caffeineContent: "Muy alto",
            img: espressoDobleImg,
            isPopular: false,
            isNew: false,
            category: "espresso",
            rating: 4.7,
            brewTime: "35 segundos"
        },
        {
            id: 5,
            title: "Café Campesino",
            price: "$10.500",
            origin: "Colombia",
            roastLevel: "Tostado Medio",
            flavorProfile: "Especiado y Dulce",
            description: "Tradición colombiana en cada sorbo.",
            detailedDescription: "Una preparación típica de la zona cafetera colombiana que combina café con especias y panela.",
            ingredients: [
                "1 shot de espresso",
                "150ml de agua caliente",
                "1 rama de canela",
                "2 estrellas de anís",
                "15g de panela"
            ],
            preparation: "Preparar espresso, agregar agua caliente y mezclar con especias y panela",
            volume: "180ml",
            caffeineContent: "Moderado",
            img: campesinoImg,
            isPopular: true,
            isNew: false,
            category: "especialidad",
            rating: 4.8,
            brewTime: "3 minutos",
            traditional: "Bebida tradicional colombiana"
        },
        {
            id: 6,
            title: "Café Irlandés",
            price: "$14.000",
            origin: "Mezcla Especial",
            roastLevel: "Tostado Oscuro",
            flavorProfile: "Alcohólico y Cremoso",
            description: "La combinación perfecta de café y whiskey.",
            detailedDescription: "Un clásico irlandés que combina café, whiskey y crema batida para una experiencia reconfortante.",
            ingredients: [
                "1 shot de espresso",
                "30ml de whiskey irlandés",
                "10ml de jarabe de azúcar",
                "Crema batida"
            ],
            preparation: "Mezclar espresso caliente con whiskey y azúcar, coronar con crema batida",
            volume: "150ml",
            caffeineContent: "Moderado",
            img: irlandesImg,
            isPopular: true,
            isNew: false,
            category: "especialidad",
            rating: 4.9,
            brewTime: "4 minutos",
            alcoholContent: "15%"
        },
        {
            id: 7,
            title: "Café Bombón",
            price: "$7.800",
            origin: "Colombia",
            roastLevel: "Tostado Medio",
            flavorProfile: "Dulce y Cremoso",
            description: "La tentación dulce para los amantes del café.",
            detailedDescription: "Espresso combinado con leche condensada y coronado con espuma de leche para un contraste de sabores.",
            ingredients: [
                "1 shot de espresso",
                "20ml de leche condensada",
                "20ml de espuma de leche"
            ],
            preparation: "Verter leche condensada en fondo de taza, agregar espresso y coronar con espuma",
            volume: "70ml",
            caffeineContent: "Moderado",
            img: bombonImg,
            isPopular: false,
            isNew: true,
            category: "dulce",
            rating: 4.6,
            brewTime: "2 minutos",
            sweetnessLevel: "Alto"
        },
        {
            id: 8,
            title: "Café Carajillo",
            price: "$11.000",
            origin: "Colombia",
            roastLevel: "Tostado Oscuro",
            flavorProfile: "Fuerte y con Alcohol",
            description: "Energía y tradición en una sola taza.",
            detailedDescription: "Preparación española adaptada con aguardiente colombiano para un toque local vigorizante.",
            ingredients: [
                "1 shot de espresso",
                "30ml de aguardiente",
                "1 cucharadita de azúcar (opcional)"
            ],
            preparation: "Mezclar espresso recién preparado con aguardiente y azúcar al gusto",
            volume: "60ml",
            caffeineContent: "Alto",
            img: carajilloImg,
            isPopular: false,
            isNew: false,
            category: "especialidad",
            rating: 4.4,
            brewTime: "2 minutos",
            alcoholContent: "20%"
        },
        {
            id: 9,
            title: "Capuccino Caliente Saborizado",
            price: "$11.000",
            origin: "Mezcla Especial",
            roastLevel: "Tostado Medio",
            flavorProfile: "Saborizado y Espumoso",
            description: "La versión más aromática del clásico capuccino.",
            detailedDescription: "Capuccino tradicional con un toque de sabores como vainilla, avellana o caramelo para una experiencia única.",
            ingredients: [
                "1 shot de espresso",
                "100ml de leche vaporizada",
                "20ml de espuma de leche",
                "Siropes de sabores a elección"
            ],
            preparation: "Preparar espresso, agregar leche vaporizada y espuma, mezclar con sirope",
            volume: "150ml",
            caffeineContent: "Moderado",
            img: cappuccinoImg,
            isPopular: true,
            isNew: false,
            category: "capuccino",
            rating: 4.5,
            brewTime: "3 minutos",
            flavorOptions: ["Vainilla", "Avellana", "Caramelo", "Chocolate"]
        },
        {
            id: 10,
            title: "Mocaccino",
            price: "$15.000",
            origin: "Mezcla Especial",
            roastLevel: "Tostado Medio",
            flavorProfile: "Chocolateado y Dulce",
            description: "El matrimonio perfecto entre café y chocolate.",
            detailedDescription: "Deliciosa combinación de espresso, chocolate derretido y leche texturizada para los amantes del dulce.",
            ingredients: [
                "1 shot de espresso",
                "20g de chocolate negro",
                "150ml de leche texturizada",
                "Crema batida (opcional)"
            ],
            preparation: "Mezclar chocolate derretido con espresso, agregar leche texturizada y coronar con crema",
            volume: "180ml",
            caffeineContent: "Moderado",
            img: mocaccinoImg,
            isPopular: true,
            isNew: false,
            category: "dulce",
            rating: 4.8,
            brewTime: "4 minutos",
            sweetnessLevel: "Moderado"
        }

    ];

    return (
        <div className="uk-position-top">
            <div className="first-child-adjustment uk-section uk-background-secondary uk-light uk-padding-small"
                style={{
                    background: 'linear-gradient(to bottom, #1e1e1e, #2c2c2c)',
                }}>

                <div className="uk-container uk-container-xlarge uk-padding-small uk-light"
                    style={{
                        background: 'linear-gradient(to bottom, #1e1e1e, #2c2c2c)'
                    }}>

                    {/* Encabezado */}
                    <div className="uk-text-center uk-margin-large-bottom">
                        <h2 className="uk-heading-small uk-text-uppercase"
                            style={{
                                letterSpacing: '3px',
                                fontWeight: 300,
                                marginBottom: '10px'
                            }}>
                            <span className="uk-display-inline-block uk-padding-small"
                                style={{
                                    borderBottom: '2px solid rgba(212, 167, 98, 0.7)',
                                    color: '#f5f5f5'
                                }}>
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

                        {coffeeItems.map((item, index) => (
                            <div key={index}>
                                {/* Card del producto */}
                                <div className="uk-card uk-card-default uk-card-hover"
                                    style={{
                                        backgroundColor: '#2c2c2c',
                                        border: '1px solid rgba(212, 167, 98, 0.1)',
                                        borderRadius: '8px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>

                                    {/* Contenido principal */}
                                    <div className="uk-flex uk-flex-middle"
                                        style={{
                                            flexGrow: 1,
                                            padding: '15px'
                                        }}>

                                        {/* Imagen circular */}
                                        <div className="uk-margin-right"
                                            style={{
                                                width: '150px',
                                                minWidth: '150px',
                                                height: '150px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                            <div className="uk-border-circle uk-overflow-hidden"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    border: '2px solid #d4a762',
                                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                                }}>
                                                <img src={item.img}
                                                    alt={item.title}
                                                    className='uk-cover'
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        objectPosition: 'center'
                                                    }} />
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
                                                        {item.ingredients.map((ing, i) => (
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
                                                        {item.preparation}
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
        </div>

    )
}

export default Menu
