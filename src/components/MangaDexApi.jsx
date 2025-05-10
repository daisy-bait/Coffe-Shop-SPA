import { useState } from "react";
import useApiSearch from "../hook/useApiSearch";
import ResultadoMangaDex from "./ResultadoMangaDex";
import Error from "./Error";
import Buscador from "./Buscador";


const fetchMangaDex = async (query) => {
    const contentRating = ["safe", "suggestive", "erotica", "pornographic"];
    const translatedLanguage = ["es", "es-la"];

    const params = new URLSearchParams();

    if (query) params.append("title", query);
    params.append("offset", 0);
    params.append("limit", 12);
    contentRating.forEach(rating => params.append("contentRating[]", rating));
    translatedLanguage.forEach(lang => params.append("availableTranslatedLanguage[]", lang));
    params.append("includes[]", "cover_art");
    params.append("order[latestUploadedChapter]", "desc");

    const url = `api/mangadex/manga?${params.toString()}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.data.map(manga => {
        const coverArt = manga.relationships.find(r => r.type === "cover_art");

        return {
            id: manga.id,
            title: manga.attributes.title.en,
            description:
                manga.attributes.description.es ||
                manga.attributes.description["es-la"] ||
                "Sin descripción",
            imageUrl: coverArt
                ? `https://uploads.mangadex.org/covers/${manga.id}/${coverArt.attributes?.fileName}.256.jpg`
                : null,
            url: `https://mangadex.org/title/${manga.id}`
        };
    });
}

const MangaDexApi = () => {
    const [query, setQuery] = useState("");
    const { result, loading, error } = useApiSearch(query, fetchMangaDex);
    return (
        <>
            <p>Busqueda de mangas de MangaDex</p>
            <Buscador setQuery={setQuery} textHint={"Buscar un manga (ej: Bleach)"} />
            {error && <Error>Hubo un error al consultar la API</Error>}
            {loading ? (
                <p className="uk-text-center">Cargando...</p>
            ) : (
                <ResultadoMangaDex mangas={result} />
            )}
        </>
    )
}

export default MangaDexApi