import React from 'react';
import 'uikit/dist/css/uikit.min.css';

import sofia from '../assets/img/nosotros/sofia.jpg';
import juan from '../assets/img/nosotros/juan.jpg';
import maria from '../assets/img/nosotros/maria.jpg';
import styled from '@emotion/styled'



const Contenedor = styled.div`
    background-image: linear-gradient(to bottom, #1e1e1e, #2c2c2c);

`
const Nosotros = () => {
  return (
    <Contenedor>
    <div className="uk-container uk-container-large uk-padding uk-light" 
         style={{ background: 'linear-gradient(to bottom, #1e1e1e, #2c2c2c)' }}>
      
      {/* Sección del título */}
      <div className="uk-text-center uk-margin-large-bottom">
        <h2 className="uk-heading-small uk-text-uppercase" style={{ letterSpacing: '2px' }}>
          <span className="uk-display-inline-block uk-padding-small" 
                style={{ borderBottom: '2px solid #d4a762', color: '#f5f5f5', letterSpacing: '3px',
                    fontWeight: 300,
                    marginBottom: '10px'}}>
            Sobre Nosotros
          </span>
        </h2>
      </div>

      {/* Contenido principal */}
      <div className="uk-grid-medium uk-child-width-1-2@m" data-uk-grid>
        {/* Columna izquierda (historia) */}
        <div>
          <div className="uk-card uk-card-default uk-card-body" 
               style={{ backgroundColor: '#2c2c2c', borderRadius: '8px' }}>
            <h3 className="uk-card-title" style={{ color: '#d4a762' }}>Nuestra Historia</h3>
            <p style={{ color: '#f5f5f5' }}>
              Fundada en 2025, nuestra cafetería nació de la pasión por el café de especialidad y la tradición colombiana.
              Cada taza que servimos cuenta la historia de los caficultores que cultivan los granos con dedicación.
            </p>
          </div>
        </div>

        {/* Columna derecha (misión) */}
        <div>
          <div className="uk-card uk-card-default uk-card-body" 
               style={{ backgroundColor: '#2c2c2c', borderRadius: '8px' }}>
            <h3 className="uk-card-title" style={{ color: '#d4a762' }}>Nuestra Misión</h3>
            <p style={{ color: '#f5f5f5' }}>
              Ofrecer experiencias únicas a través de café de alta calidad, promoviendo prácticas sostenibles y apoyando
              a las comunidades cafetaleras. Queremos que cada visita sea memorable.
            </p>
          </div>
        </div>
      </div>

      {/* Equipo */}
      <div className="uk-margin-large-top">
  <h3 className="uk-text-center" style={{ color: '#d4a762' }}>Conoce al Equipo</h3>
  <div className="uk-grid-small uk-child-width-1-3@m" data-uk-grid>
    {[
      { name: "Sofía", role: "Barista Principal", img: sofia },
      { name: "Juan", role: "Maestro Tostador", img: juan },
      { name: "María", role: "Gerente", img: maria }
    ].map((member, index) => (
      <div key={index}>
        <div
          className="uk-card uk-card-default uk-flex uk-flex-column"
          style={{
            borderRadius: '8px',
            overflow: 'hidden',
            height: '100%', 
            minHeight: '450px', 
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="uk-card-media-top">
            <img
              src={member.img}
              alt={member.name}
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
          </div>
          <div
            className="uk-card-body uk-flex-1"
            style={{ backgroundColor: '#2c2c2c', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h4 style={{ color: '#d4a762', marginBottom: '10px' }}>{member.name}</h4>
            <p style={{ color: '#f5f5f5', margin: 0 }}>{member.role}</p>
          </div>
        </div>
      </div>
          ))}
        </div>
      </div>
    </div>
    </Contenedor>
  );
};

export default Nosotros;