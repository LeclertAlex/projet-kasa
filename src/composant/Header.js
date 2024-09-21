// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation
import logo from '../images/kasa.png'; // Importation de ton logo

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> {/* Lien vers la page d'accueil */}
          <img src={logo} alt="Logo Kasa" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link> {/* Lien vers la page d'accueil */}
          </li>
          <li>
            <Link to="/about">À Propos</Link> {/* Lien vers la page "À Propos" */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;