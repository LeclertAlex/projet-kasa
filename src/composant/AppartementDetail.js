import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import appartementsData from '../data/appartements.json'; // Données des appartements
import equipmentsList from '../data/equipments'; // Liste des équipements
import Slideshow from './Slideshow'; // Slideshow des images
import '../App.css';

const AppartementDetail = () => {
  const { id } = useParams();
  const appartement = appartementsData.find((apt) => apt.id === id);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  if (!appartement) {
    return <p>Appartement non trouvé</p>;
  }

  const generateTags = (title, location) => {
    const titleWords = title.split(' ');
    const firstTag = titleWords[0];
    const secondTag = titleWords.length > 1 ? titleWords[1] : '';
    const locationWords = location.split(' ');
    const thirdTag = locationWords[locationWords.length - 1];

    return [firstTag, secondTag, thirdTag];
  };

  const tags = generateTags(appartement.title, appartement.location);

  return (
    <div className="appartement-detail">
      <Slideshow images={appartement.pictures} />

      <div className="appartement-info-container">
        <div className="appartement-info">
          <h1 className="appartement-title">{appartement.title}</h1>
          <p className="appartement-location">{appartement.location}</p>

          <div className="appartement-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="appartement-host">
          <div className="host-profile">
            <p className="host-name">John Doe</p>
            <img
              src="https://via.placeholder.com/64"
              alt="Profil de l'hôte"
              className="profile-picture"
            />
          </div>
          <div className="appartement-rating">
            <span>{'⭐'.repeat(5)}</span>
          </div>
        </div>
      </div>

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
                {equipmentsList.map((equipment, index) => (
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
