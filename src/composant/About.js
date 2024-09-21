import React, { useState } from 'react';
import aboutList from '../data/aboutList'; // Assure-toi que le fichier aboutList est bien exporté ici
import '../App.css'; // Assure-toi que les styles sont bien ajoutés

const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="about-page">
      {/* Grand rectangle avec l'image */}
      <div className="about-image">
        <img src={require('../images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg')} alt="À propos de Kasa" />
      </div>

      {/* Menu déroulant pour chaque section */}
      <div className="about-sections">
        {aboutList.map((item, index) => (
          <div className="about-section" key={index}>
            <button onClick={() => toggleSection(index)} className="about-title">
              {item.title} <span>{openSection === index ? "▲" : "▼"}</span>
            </button>
            {openSection === index && (
              <div className="about-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
