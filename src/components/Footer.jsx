import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/logo-large.png';

function Footer() {
  return (
    <div className="flex flex-column items-center tc mb4">
      <img src={logo} alt="Logo" style={{ width: '140px' }} />
      <div className="mb3 b">@Grupo Vivienda - Costa Rica - Derechos reservados</div>
      <div className="mb3">HORARIO DE ATENCION: LUNES A VIERNES DE 8 A 5 Y SABADOS DE 8 A 12 MEDIO DIA</div>
      <div className="mb3 i">Teléfono: +506 2685-4132</div>
      <div className="w4 flex justify-between">
        <a href="tel:26854132" className="black">
          <FontAwesomeIcon icon={faPhone} size="lg" />
        </a>
        <a href="https://www.facebook.com/bonodevivienda/" className="black">
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
        </a>
        <a href="mailto:info@grupovivienda.com" className="black">
          <FontAwesomeIcon icon={faMailBulk} size="lg" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
