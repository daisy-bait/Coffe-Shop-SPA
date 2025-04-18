import { useEffect, useState } from "react";
import Buscador from "./Buscador";
import Error from "./Error";
import ResultadoApi from "./ResultadoApi";

const Api = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query.trim() === "") return;

    const buscarUsuarios = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        const data = await response.json();

        const arrayUsers = data.items.map(user => ({
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
          html_url: user.html_url
        }));

        setUsers(arrayUsers);
        setError(false);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    buscarUsuarios();
  }, [query]);

  return (
    <div className="uk-container uk-margin-top">
      <h1 className="uk-text-center">Api</h1>
      <Buscador setQuery={setQuery} />
      {error && <Error>Hubo un error al consultar la API</Error>}
      {loading ? <p className="uk-text-center">Cargando...</p> : <ResultadoApi usuarios={users} />}
    </div>
  );
};

export default Api;
