import { useEffect, useState } from "react";
import Buscador from "./Buscador";
import Error from "./Error";
import ResultadoApi from "./ResultadoApi";
import GitHubApi from "./GitHubApi";

const Api = () => {


  return (
    <div className="uk-container">
      <div className="uk-section" style={{ marginTop: "6rem" }}>
        {/* Título de la página */}
        <h1 className="uk-text-center">APIs</h1>
        {/* Acordeón de APIs */}
        <ul uk-accordion="">
          {/* GitHub API  */}
          <li className="uk-open">
            <a href="" className="uk-accordion-title">GitHub API</a>
            <div className="uk-accordion-content">
              <GitHubApi />
            </div>
          </li>
          {/* MangaDex API */}
          <li>
            <a href="" className="uk-accordion-title">MangaDex API</a>
            <div className="uk-accordion-content">
              <p>Para más rato</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Api;
