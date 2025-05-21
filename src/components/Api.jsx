import GitHubApi from "./GitHubApi";
import MangaDexApi from "./MangaDexApi";
import animeBackground from "../assets/img/fondo_6.jpg"

const Api = () => {

  return (

    <div className="uk-background-cover first-child-adjustment"
      style={{
        backgroundImage: `url(${animeBackground})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="uk-container uk-section">
        {/* Título de la página */}
        <h1 className="uk-heading-line uk-text-center uk-margin-large-bottom" style={{ color: 'white' }} >Explora APIs</h1>
        {/* Acordeón de APIs */}
        <ul className="uk-accordion" uk-accordion="multiple: true">
          {/* GitHub API  */}
          <li className="uk-card uk-card-default uk-card-body uk-box-shadow-medium uk-border-rounded uk-background-default">
            <a href="" className="uk-accordion-title uk-text-lead uk-text-bold"><span uk-icon="icon: github; ratio: 2"></span> GitHub API</a>
            <div className="uk-accordion-content uk-padding-small">
              <GitHubApi />
            </div>
          </li>
          {/* MangaDex API */}
          <li className="uk-card uk-card-default uk-card-body uk-box-shadow-medium uk-border-rounded uk-background-default">
            <a href="" className="uk-accordion-title uk-text-lead uk-text-bold">📚 MangaDex API</a>
            <div className="uk-accordion-content">
              <MangaDexApi />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Api;
