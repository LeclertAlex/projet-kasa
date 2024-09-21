// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Remplace Switch par Routes
import Header from './composant/Header'; // Header commun à toutes les pages
import Footer from './composant/Footer'; // Footer commun à toutes les pages
import Appartements from './composant/Appart'; // Liste des appartements (page d'accueil)
import AppartementDetail from './composant/AppartementDetail'; // Page de détail pour chaque appartement
import './App.css'; // Fichier CSS pour les styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Le Header est affiché sur toutes les pages */}
        
        <Routes>
          {/* Page d'accueil affichant la liste des appartements */}
          <Route path="/" element={<Appartements />} />
          
          {/* Page de détail d'un appartement, accessible via un ID dynamique */}
          <Route path="/appartement/:id" element={<AppartementDetail />} />
        </Routes>

        <Footer /> {/* Le Footer est affiché sur toutes les pages */}
      </div>
    </Router>
  );
}

export default App;
