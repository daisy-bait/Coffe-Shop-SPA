import mainCoffeBackground from "../assets/img/coffe-soft-header.svg"

const Home = () => {
    return (
        <div className="uk-background-cover uk-position-top uk-height-large"
            style={{
                height: `1000px`,
                backgroundImage: `url(${mainCoffeBackground})`
            }}
        >
            <div className="uk-container" style={{marginTop: `6rem`}}>
                <h1> Título Tienda Café </h1>
                <div className="uk-overlay uk-overlay-primary uk-padding-small" >
                    <p>Bienvenido a <strong>Nombre del Café</strong>, un lugar donde cada taza de café
                        cuenta una historia. Aquí encontrarás la combinación perfecta de calidad,
                        comodidad y calidez para hacer de tus mañanas algo especial.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
