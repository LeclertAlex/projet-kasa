import React from 'react';
import { Link } from 'react-router-dom'; // Importation du composant Link
import appartementsData from '../data/appartements.json';
import ericImage from '../images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import '../App.css';

const Appartements = () => {
  return (
    <div className="appart-page">
      {/* Texte ajouté */}
      <h1 className="slogan">Chez vous, partout et ailleurs</h1>

      {/* Grand carré avec l'image */}
      <div className="appart-image">
        <img src={ericImage} alt="Eric Muhr" />
      </div>

      {/* Conteneur pour la liste des appartements */}
      <div className="cartes-section">
        <div className="cartes-container">
          {appartementsData.map((appartement) => (
            <div className="carte" key={appartement.id}>
              {/* Si l'image existe, on l'entoure avec un lien vers la page de détail */}
              {appartement.cover && (
                <Link to={`/appartement/${appartement.id}`}>
                  <img src={appartement.cover} alt={appartement.title} />
                </Link>
              )}
              <h3>{appartement.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Conteneur pour les trois carrés (si nécessaire) */}
      <div className="square-container">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
  );
};

export default Appartements;
