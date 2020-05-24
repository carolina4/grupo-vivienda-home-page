import React from 'react';
import HeroBanner from './HeroBanner';
import ColorBanner from './ColorBanner';

import photo_family_1 from '../assets/family.jpg';
import ideal from '../assets/ideal.png';
import vision from '../assets/vision.png';
import politica from '../assets/politica.png';
import constructora from '../assets/constructora.png';
import prefa from '../assets/prefa.png';
import inmobiliaria from '../assets/inmobiliaria.png';
import logistica from '../assets/logistica.png';
import facebook from '../assets/facebook.png';

function SectionElement({ image, backgroundColor, title, children }) {
  return(
    <div className="tc w5 flex flex-column items-center mb4">
      <div
        className="br-100 w4 h4 flex items-center justify-center"
        style={{ backgroundColor: backgroundColor }}
      >
        <img src={image} className="w-60" alt="" />
      </div>
      <h2 style={{ color: backgroundColor }} className="mv2">{title}</h2>
      <div className="mv0 f4 ph2">
        {children}
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return(
    <React.Fragment>
      <h2 className="h-separator mb4">{title}</h2>
      <div className="flex justify-around flex-wrap">
        {children}
      </div>
    </React.Fragment>
  );
}

function HomePage() {
  return (
    <div className="w-100">
      <HeroBanner img={photo_family_1} />
      <div className="center pt4 ph3" style={{ maxWidth: '72rem' }}>
        <div className="tc center mw6-ns mb5">
          <h1>GRUPO VIVIENDA</h1>
          <h2>Construyendo Sonrisas</h2>
          <p>
            El GRUPO VIVIENDA es una empresa de construcción especialista en el trámite y
            construcción de casas de Bono; así como al desarrollo de proyectos urbanísticos a
            pequeña y mediana escala.
          </p>
        </div>

        <Section title="Sobre Nosotros">
          <SectionElement image={ideal} backgroundColor="#b2bc5a" title="Nuestro Ideal">
            Desarrollar los proyectos bajo estrictas normas de calidad, para así satisfacer las
            necesidades de nuestros clientes.
          </SectionElement>
          <SectionElement image={vision} backgroundColor="#7f7f7f" title="Visión">
            Ser la constructora de preferencia de las familias por excelencia en servicio y calidad.
          </SectionElement>
          <SectionElement image={politica} backgroundColor="#e1c442" title="Política de Calidad">
            Se resumen en “<b>Construyendo Sonrisas</b>”.
          </SectionElement>
        </Section>

        <Section title="Nuestros Servicios">
          <SectionElement image={constructora} backgroundColor="#b2bc5a" title="Constructora Vivienda">
            Construcción de casas de bono llave en mano, con diseños únicos (Habita Plus, 3D,
            Confort). Trámite de Bono Credito.
          </SectionElement>
          <SectionElement image={prefa} backgroundColor="#7f7f7f" title="Prefa Vivienda">
            Elaboración de casas prefabricadas en columnas y baldosas. Calidad certificada del
            concreto y del diseño estructural.
          </SectionElement>
          <SectionElement image={inmobiliaria} backgroundColor="#e1c442" title="Inmobiliaria Vivienda">
            Agencia de bienes raíces encargadas de facilitar la adquisición de lotes para bono
            crédito y para proyectos de vivienda.
          </SectionElement>
          <SectionElement image={logistica} backgroundColor="#699bd0" title="Logística Vivienda">
            Distribución, por medio de una flotilla propia, de las casas prefabricadas y de los
            materiales de construcción.
          </SectionElement>
        </Section>
      </div>

      <ColorBanner color="#b2bc5a" className="mv4">
        <h2 className="white-80">¿DESEA CONOCER MÁS DE NUESTROS SERVICIOS?</h2>
        <h3 className="white-80">Síganos en nuestro Facebook</h3>
        <a href="https://www.facebook.com/bonodevivienda/">
          <img src={facebook} alt="fb icon" style={{ width: "65px" }} />
        </a>
      </ColorBanner>
    </div>
  );
}

export default HomePage;
