import { useState } from "react";
import useApiSearch from "../hook/useApiSearch";
import Buscador from "./Buscador";
import Error from "./Error";
import ResultadoApi from "./ResultadoApi";

const fetchGitHubUsers = async (query) => {
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();

    return data.items.map(user => ({
        id: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url
    }));
}

const GitHubApi = () => {
    const [query, setQuery] = useState("");
    const { result, loading, error } = useApiSearch(query, fetchGitHubUsers);

    return (
        <>
            <p>Busqueda de usuarios de GitHub</p>
            <Buscador setQuery={setQuery} textHint={"Buscar un usuario (ej: midudev)"} />
            {error && <Error>Hubo un error al consultar la API</Error>}
            {loading ? (
                <p className="uk-text-center">Cargando...</p>
            ) : (
                <ResultadoApi usuarios={result} />
            )}
        </>
    )
}

export default GitHubApi