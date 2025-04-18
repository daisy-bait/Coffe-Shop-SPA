const ResultadoApi = ({ usuarios }) => {
    return (
        <div className="uk-grid-small uk-child-width-1-3@s" uk-grid="true">
            {usuarios.map(usuario => (
                <div key={usuario.id}>
                    <div className="uk-card uk-card-default uk-card-body uk-text-center">
                        <img
                            src={usuario.avatar_url}
                            alt={`Avatar de ${usuario.login}`}
                            width={80}
                            className="uk-border-circle"
                        />
                        <h3 className="uk-card-title">{usuario.login}</h3>
                        <a href={usuario.html_url} target="_blank" rel="noreferrer" className="uk-button uk-button-primary">Ver perfil</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResultadoApi;
