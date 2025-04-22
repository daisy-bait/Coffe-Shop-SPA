import { useEffect, useState } from "react"

const useApiSearch = (query, fetchFunction) => {
    const [result, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(!query.trim()) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const data = await fetchFunction(query);
                setResults(data);
                setError(false);
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false);
            }

        };

        fetchData();

    }, [query])

    return { result, loading, error };
}

export default useApiSearch