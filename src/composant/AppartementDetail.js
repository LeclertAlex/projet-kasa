import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import appartementsData from '../data/appartements.json';
import '../App.css';

const AppartementDetail = () => {
  const { id } = useParams();
  const appartement = appartementsData.find((apt) => apt.id === id);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  if (!appartement) {
    return <p>Appartement non trouvé</p>;
  }

  // Définir l'hôte par défaut
  const defaultHost = {
    name: "John Doe",
    picture: "https://via.placeholder.com/64", // URL d'une image par défaut (W64 H64)
  };

  return (
    <div className="appartement-detail">
      {/* Conteneur pour l'image */}
      <div className="appartement-image">
        <img src={appartement.cover} alt={appartement.title} />
      </div>

      {/* Conteneur pour regrouper le titre, l'adresse et l'hôte sous l'image */}
      <div className="appartement-info-container">
        <div className="appartement-info">
          <h1 className="appartement-title">{appartement.title}</h1>
          <p className="appartement-location">{appartement.location}</p>
        </div>

        {/* Hôte avec le nom, l'image, et les étoiles sous l'image en position absolue */}
        <div className="appartement-host">
          <div className="host-profile">
            <p className="host-name">{defaultHost.name}</p> {/* Nom avant l'image */}
            <img
              src={defaultHost.picture}
              alt={`Profil de l'hôte ${defaultHost.name}`}
              className="profile-picture"
            />
          </div>
          {/* Étoiles de notation en position absolue sous le profil */}
          <div className="appartement-rating">
            <span>{'⭐'.repeat(5)}</span>
          </div>
        </div>
      </div>

      {/* Menus déroulants pour la description et les équipements */}
      <div className="appartement-buttons">
        <div className="dropdown">
          <button onClick={() => setShowDescription(!showDescription)}>
            Description <span>{showDescription ? "▲" : "▼"}</span>
          </button>
          {showDescription && (
            <div className="dropdown-content">
              <p>{appartement.description}</p>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => setShowEquipments(!showEquipments)}>
            Équipements <span>{showEquipments ? "▲" : "▼"}</span>
          </button>
          {showEquipments && (
            <div className="dropdown-content">
              <ul>
                {appartement.equipments && appartement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppartementDetail;
