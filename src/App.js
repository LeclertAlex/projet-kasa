import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './composant/Header'; // Header commun
import Footer from './composant/Footer'; // Footer commun
import Appartements from './composant/Appart'; // Liste des appartements (page d'accueil)
import AppartementDetail from './composant/AppartementDetail'; // Détail d'un appartement
import About from './composant/About'; // Page "About"
import Erreur from './composant/Erreur'; // Page d'erreur
import './App.css'; // Fichier CSS pour les styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Le header s'affiche sur toutes les pages */}
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Appartements />} />

          {/* Route pour la page de détail de l'appartement */}
          <Route path="/appartement/:id" element={<AppartementDetail />} />

          {/* Route pour la page "About" */}
          <Route path="/about" element={<About />} />

          {/* Route pour afficher une page d'erreur */}
          <Route path="*" element={<Erreur />} />
        </Routes>
        <Footer /> {/* Le footer s'affiche sur toutes les pages */}
      </div>
    </Router>
  );
}

export default App;
