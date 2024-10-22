import React from 'react';
import aboutList from '../data/aboutList'; // Assure-toi que le fichier aboutList est bien exporté
import '../App.css'; // Assure-toi que les styles sont bien ajoutés
import Collapse from './Collapse'; // Import du composant Collapse

const About = () => {
  return (
    <div className="about-page">
      {/* Grand rectangle avec l'image */}
      <div className="about-image">
        <img src={require('../images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg')} alt="À propos de Kasa" />
      </div>

      {/* Menu déroulant pour chaque section */}
      <div className="about-sections">
        {aboutList.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} buttonClass="about-button" />
        ))}
      </div>
    </div>
  );
};

export default About;
