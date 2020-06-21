import React from 'react';
import HeroBanner from './HeroBanner';
import FacebookBanner from './FacebookBanner';

import constructor from '../assets/constructor.jpg';

import { prefas } from '../data/constants';

function PrefaPage() {
  return (
    <div>
      <HeroBanner img={constructor} />
      <div className="center pt4 ph2 ph4-ns" style={{ maxWidth: '72rem' }}>
        <h1>Prefa Vivienda</h1>
        <h2>Nuestros Modelos:</h2>
        <div>
          {prefas.map((prefa, index) => (
            <div key={`prefa-${index}`} className="mb4">
              <h3>Modelo {index + 1} - {prefa.name}</h3>
              <div className="cf">
                <div className="fl w-100 w-50-l mb3">
                  <img src={prefa.fachada} alt={`Fachada ${prefa.name}`} />
                </div>
                <div className="fl w-100 w-50-l pl4-l">
                  <img src={prefa.planta} alt={`Planta ${prefa.name}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FacebookBanner />
    </div>
  );
}

export default PrefaPage;
