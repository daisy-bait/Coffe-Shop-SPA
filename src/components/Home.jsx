import mainCoffeBackground from "../assets/img/coffe-soft-header.svg"

const Home = () => {
    return (
        <div className="provisional-view-adjustment">
            <div className="uk-background-cover uk-height-large uk-light provisional-first-child-adjustment uk-flex"
                style={{
                    backgroundImage: `url(${mainCoffeBackground})`,
                }}
            >
                <div className="uk-container uk-margin-large-top">
                    <h1> Título Tienda Café </h1>
                    <div className="uk-overlay uk-overlay-primary uk-padding-small" >
                        <p>Bienvenido a <strong>Nombre del Café</strong>, un lugar donde cada taza de café
                            cuenta una historia. Aquí encontrarás la combinación perfecta de calidad,
                            comodidad y calidez para hacer de tus mañanas algo especial.
                        </p>
                    </div>
                </div>
            </div>
            <div className="uk-background-muted uk-padding-large" >
                <h4> Menú </h4>
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
