import { useState } from "react";


const Buscador = ({ setQuery, textHint }) => {
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
        placeholder={`${textHint}...`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="uk-search-input"
      />
      <button type="submit" className="uk-search-icon-flip" uk-search-icon="" />
    </form>

  )
}

export default Buscador