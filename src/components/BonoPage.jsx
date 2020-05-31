import React from 'react';
import HeroBanner from './HeroBanner';

import bono from '../assets/bono.jpg';

import { bonos } from '../data/constants';

function BonoPage() {
  return (
    <div>
      <HeroBanner img={bono} />
      <div className="center pt4 ph2 ph4-ns" style={{ maxWidth: '72rem' }}>
        <h1>Bonos de Vivienda</h1>
        <div className="flex flex-column">
          {bonos.map((bono, index) => (
            <div className="mb4" key={`bono-${index}`}>
              <div
                style={{
                  background: `url(${bono.photo}) no-repeat center`,
                  height: "320px",
                }}
                className="fl w-100 w-40-l"
              >
              </div>
              <div className="fl w-100 w-60-l pl4-l">
                <h2 className="mb2 mt2 mt0-l">{bono.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: bono.description}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BonoPage;
