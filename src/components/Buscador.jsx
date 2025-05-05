import { useState } from "react";


const Buscador = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setQuery(input.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="uk-search uk-search-default uk-margin">
      <input
        type="text"
        placeholder="Buscar un usuario (ej: midudev)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="uk-search-input"
      />
      <button type="submit" className="uk-search-icon-flip" uk-search-icon="" />
    </form>

  )
}

export default Buscador