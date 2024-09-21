import React from 'react';
import logoKasaBlack from '../images/kasa-black.png'; // Remonte dans le dossier parent et va dans "images"

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoKasaBlack} alt="Logo Kasa Black" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
