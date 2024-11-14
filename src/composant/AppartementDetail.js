import React from 'react';
import { useParams } from 'react-router-dom';
import appartementsData from '../data/appartements.json'; // Données des appartements
import equipmentsList from '../data/equipments'; // Liste des équipements
import Slideshow from './Slideshow'; // Slideshow des images
import Collapse from './Collapse'; // Import du composant Collapse
import {  Navigate  } from 'react-router-dom';
import '../App.css';

const AppartementDetail = () => {
  const { id } = useParams();
  const appartement = appartementsData.find((apt) => apt.id === id);


  if (!appartement) {
    return < Navigate  to="/404" />;
  }

  const generateTags = (title, location) => {
    const titleWords = title.split(' ');
    const locationWords = location.split(' ');
    return [titleWords[0], titleWords[1] || '', locationWords[locationWords.length - 1]];
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
        {/* Utilisation du composant Collapse pour la description */}
        <Collapse title="Description" content={appartement.description} buttonClass="detail-button" />

        {/* Utilisation du composant Collapse pour les équipements */}
        <Collapse title="Équipements" content={equipmentsList} isList={true} buttonClass="detail-button" />
      </div>
    </div>
  );
};

export default AppartementDetail;
