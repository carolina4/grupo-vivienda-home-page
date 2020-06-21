import React from 'react';
import ColorBanner from './ColorBanner';

import facebook from '../assets/facebook.png';

function FacebookBanner() {
  return (
    <ColorBanner color="#b2bc5a" className="mv4">
      <h2 className="white-80">¿DESEA CONOCER MÁS DE NUESTROS SERVICIOS?</h2>
      <h3 className="white-80">Síganos en nuestro Facebook</h3>
      <a href="https://www.facebook.com/bonodevivienda/">
        <img src={facebook} alt="fb icon" style={{ width: "65px" }} />
      </a>
    </ColorBanner>
  );
}

export default FacebookBanner;
