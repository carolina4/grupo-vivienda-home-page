import casa1 from '../assets/casa1.jpg';
import casa2 from '../assets/casa2.jpg';
import casa3 from '../assets/casa3.jpg';
import casa4 from '../assets/casa4.jpg';

import confortMini from '../assets/confort-sm.jpg';
import hab3dMini from '../assets/hab-3d-sm.jpg';
import habPlusMini from '../assets/hab-plus-sm.jpg';
import discapacidadPlanta from '../assets/discapacidad/planta.png';
import discapacidadFachada from '../assets/discapacidad/fachada.png';

import prefa1Planta from '../assets/prefas/modelo1/planta.png';
import prefa1Fachada from '../assets/prefas/modelo1/fachada.png';
import prefa2Planta from '../assets/prefas/modelo2/planta.png';
import prefa2Fachada from '../assets/prefas/modelo2/fachada.png';
import prefa3Planta from '../assets/prefas/modelo3/planta.png';
import prefa3Fachada from '../assets/prefas/modelo3/fachada.png';
import prefa4Planta from '../assets/prefas/modelo4/planta.png';
import prefa4Fachada from '../assets/prefas/modelo4/fachada.png';
import prefa5Planta from '../assets/prefas/modelo5/planta.png';
import prefa5Fachada from '../assets/prefas/modelo5/fachada.png';
import prefa6Planta from '../assets/prefas/modelo6/planta.png';
import prefa6Fachada from '../assets/prefas/modelo6/fachada.png';
import prefa7Planta from '../assets/prefas/modelo7/planta.png';
import prefa7Fachada from '../assets/prefas/modelo7/fachada.png';
import prefa8Planta from '../assets/prefas/modelo8/planta.png';
import prefa8Fachada from '../assets/prefas/modelo8/fachada.png';
import prefa9Planta from '../assets/prefas/modelo9/planta.png';
import prefa9Fachada from '../assets/prefas/modelo9/fachada.png';
import prefa10Planta from '../assets/prefas/modelo10/planta.png';
import prefa10Fachada from '../assets/prefas/modelo10/fachada.png';
import prefa11Planta from '../assets/prefas/modelo1/planta.png';
import prefa11Fachada from '../assets/prefas/modelo1/fachada.png';
import prefa12Planta from '../assets/prefas/modelo12/planta.png';
import prefa12Fachada from '../assets/prefas/modelo12/fachada.png';
import prefa13Planta from '../assets/prefas/modelo13/planta.png';
import prefa13Fachada from '../assets/prefas/modelo13/fachada.png';
import prefa14Planta from '../assets/prefas/modelo14/planta.png';
import prefa14Fachada from '../assets/prefas/modelo14/fachada.png';

export const bonos = [
  {
    name: "Bono Puro",
    photo: casa2,
    photo_description: "Bono Puro",
    description: `
      <div>
        Contamos con 3 diferentes modelos:
        <ul>
          <li>
            <b>Modelo Confort:</b> Diseño de casas de bono exclusivo de GRUPO VIVIENDA.
          </li>
          <li>
            <b>Casa Habita plus:</b> La Mejor Casa de Bono en todo el país. Diseño con 8 metros de
            fachada, closet en el dormitorio principal y finos acabados.
          </li>
          <li>
            <b>Casa habitad 3D</b>
          </li>
        </ul>
        <div class="flex flex-wrap">
          <div>
            <h3 class="mb1">Modelo Confort</h3>
            <img src=${confortMini} height=230 />
          </div>
          <div>
            <h3 class="mb1">Habitad plus</h3>
            <img src=${habPlusMini} height=230 />
          </div>
          <div>
            <h3 class="mb1">Habitad 3D</h3>
            <img src=${hab3dMini} height=230 />
          </div>
        </div>
      </div>`,
  },
  {
    name: "Bono articulo 59",
    photo: casa1,
    photo_description: "Bono articulo 59",
    description: `
      <div>
        <p>
          Para familias que no cuentan con lote propio, con ingresos familiares bajos y cuyo estudio
          socioeconómico establece que viven en situación de extrema necesidad, existe el Programa
          de Bono Especial, al cual se puede acceder en forma individual o como parte de un proyecto
          de vivienda.
        </p>
        <p>
          Se tramitan bonos de vivienda bajo el programa de artículo 59 de la Ley del Sistema
          Financiero Nacional para la Vivienda (SFNV) aquellos calificados como extrema necesidad y
          situación de emergencia o erradicación de tugurios y asentamientos en precario.
        </p>
        <p>
          Además de las condiciones generales, la familia que desea un bono bajo este programa debe
          cumplir con los siguientes requisitos:
        </p>
        <ol>
          <li>
            Ingreso familiar menor a ¢403.983 mensuales.
          </li>
          <li>
            Estudio Social, por parte de un trabajador social autorizado y avalado por el BANHVI y
            el Colegio de Trabajadores Sociales.
          </li>
        </ol>
        <p>
          Casos de Emergencia<br />
          En aquellos casos que se presenten como emergencia se debe adjuntar los siguientes
          documentos:
        <p>
        <ol>
          <li>
            Informe de la Comisión Nacional de Prevención de Riesgos y Atención de Emergencias
            (CNE), recomendando la reubicación o declarando como inhabitable la propiedad.
          </li>
          <li>
            Informe del Ministerio de Vivienda y Asentamientos Humanos recomendando la reubicación
            de la familia o la reconstrucción total o parcial de la vivienda.
          </li>
          <li>
            Ficha de Información Social (FIS) del núcleo familiar. La aplicación de este documento
            solo rige en casos de emergencias, debidamente declarados por el Poder Ejecutivo. En
            cualquiera de estas situaciones, si la familia era propietaria del terreno se debe
            presentar un informe del Instituto Nacional de Seguros (INS) que indique si la familia
            recibió o no indemnización. En caso de que se haya recibido, el monto del bono será
            complemento esta indemnización.
          </li>
        </ol>
      </div>`,
  },
  {
    name: "Bono Discapacidad",
    photo: casa3,
    photo_description: "Bono Discapacidad",
    description: `
      <div>
        <p>
          La Ley faculta a las familias que tienen entre sus miembros una o más personas con
          impedimento físico total y permanente, a recibir un bono familiar y medio, con el fin de
          que adquieran una vivienda con las adaptaciones constructivas y de ubicación que requiera
          la persona con la discapacidad.
        </p>
        <p>
          Para aplicar a este bono especial, es necesario solicitar un certificado médico para el
          bono de vivienda a la Comisión Calificadora de la Caja Costarricense del Seguro Social
          (CCSS). Este certificado debe indicar si la persona valorada sufre un impedimento físico
          total y permanente.
        </p>
        <p>
          En caso de que la persona que sufre la discapacidad no tenga núcleo familiar y pueda
          atenderse a sí misma, debe presentar además para la verificación de una condición, una
          certificación del Consejo Nacional de Rehabilitación y Educación Especial.
        </p>
        <h3>
          Requisitos:
        </h3>
        <ol>
          <li>
            Tener uno o más miembros con impedimento físico total y permanente: para comprobar esta
            condición, la familia debe solicitar el certificado médico para el bono de vivienda
            mencionado donde se indique el porcentaje de discapacidad del miembro de la familia que
            la tiene.
          </li>
          <li>
            No tener casa propia o más de una propiedad: si la familia tiene un lote puede utilizar
            el bono y medio para construir la vivienda y si tiene una casa pero requiere de
            ampliaciones, reparaciones o mejoras puede utilizarlo para este fin. También puede
            utilizar el bono para compra de lote y construcción o compra de una vivienda existente.
          </li>
          <li>
            No haber recibido con anterioridad otro bono, ya que éste se otorga solo una vez.
          </li>
          <li>
            Tener un ingreso familiar menor a ¢1.615.932, es decir, seis salarios mínimos de un
            obrero no especializado de la industria de la construcción, el cual es ajustado
            semestralmente.
          </li>
          <li>
            Ser costarricense o tener una situación de residencia legalizada.
          </li>
        </ol>
        <div class="flex flex-wrap justify-between">
          <div>
            <h3 class="mb1">Fachada</h3>
            <img src=${discapacidadFachada} height=120 />
          </div>
          <div>
            <h3 class="mb1">Planta</h3>
            <img src=${discapacidadPlanta} height=210 />
          </div>
        </div>
      </div>`,
  },
  {
    name: "Bono Adulto Mayor",
    photo: casa4,
    photo_description: "Bono Adulto Mayor",
    description: `
      <div>
        <p>
          La Ley del Sistema Financiero Nacional para la Vivienda establece como un derecho de las
          personas adultas mayores a recibir un bono y medio para que solucionen su problema de
          vivienda y mejoren su calidad de vida.
        </p>
        <p>
          Califican para este programa aquellos adultos mayores sin núcleo familiar o parejas de 65
          años o más, que cuenten con las capacidades físicas y mentales para habitar solos.
        </p>
        <h3>
          Requisitos:
        </h3>
        <ol>
          <li>
            Ser un adulto mayor: para comprobar esta condición, la entidad autorizada donde se
            realiza el trámite debe emitir una certificación en donde se haga constar la condición
            de Persona Adulta Mayor Sola. Esta certificación debe realizarla un profesional
            competente que haya recibido la debida capacitación por parte del Consejo Nacional de la
            Persona Adulta Mayor (CONAPAM).
          </li>
          <li>
            No tener casa propia o más de una propiedad: si la persona tiene un lote puede utilizar
            el bono para construir la vivienda y si tiene una casa pero requiere de ampliaciones,
            reparaciones o mejoras puede solicitar el bono para este fin. También puede utilizar el
            bono para compra de lote y construcción o compra de una vivienda existente.
          </li>
          <li>
            No haber recibido con anterioridad otro bono, ya que éste se otorga solo una vez.
          </li>
          <li>
            Tener un ingreso familiar menor a ¢1.615.932, es decir, seis salarios mínimos de un
            obrero no especializado de la industria de la construcción, el cual es ajustado
            semestralmente.
          </li>
          <li>
            Ser costarricense o tener una situación de residencia legalizada.
          </li>
        </ol>
        <p>
          Duración del trámite: de 3 a 6 meses
        </p>
        <div class="flex flex-wrap justify-between">
          <div>
            <h3 class="mb1">Fachada</h3>
            <img src=${discapacidadFachada} height=120 />
          </div>
          <div>
            <h3 class="mb1">Planta</h3>
            <img src=${discapacidadPlanta} height=210 />
          </div>
        </div>
      </div>`,
  },
  {
    name: "Bono Crédito",
    photo: casa2,
    photo_description: "Bono Crédito",
    description: `
      <div>
        <p>
          Se ofrece este bono a familias de clase media con ingresos menores a ¢1.615.932
          financiamiento para la compra o construcción de vivienda propia mediante programas de bono
          diseñados especialmente para familias de ingresos medios.
        </p>
        <p>
          Además de las condiciones solicitadas para obtener un Bono de Vivienda en cualquiera de
          sus modalidades, los programas para clase media implican la adquisición de un crédito
          hipotecario.
        </p>
        <p>
          Es un programa que incluye la mezcla de un Crédito en condiciones de tasa y plazo muy
          accesibles más la ayuda de un Bono de Vivienda, que se puede usar para aportar la prima.
        </p>
        <h3>
          Requisitos:
        </h3>
        <ol>
          <li>
            Los interesados deben contar con ingresos entre ¢807.966 y ¢1.615.932 y cuya aspiración
            sea conseguir una vivienda cuyo costo no supere los ¢65.801.000.
          </li>
          <li>
            Pueden optar por este programa parejas casadas o en unión libre con o sin hijos, parejas
            del mismo sexo con al menos tres años de convivencia, mujeres jefas de hogar, entre
            otros núcleos familiares, que no cuenten con los recursos suficientes para obtener una
            casa propia, puedan resolver su problema habitacional.
          </li>
          <li>
            Se otorga un Bono Familiar de Vivienda de entre ¢4,4 millones a ¢6,3 millones
            (dependiendo de sus ingresos) que pueden ser aplicado a la prima de forma total o
            parcial. Opcionalmente se puede aplicar a la cuota del crédito.
          </li>
          <li>
            La tasa de interés máxima de las operaciones es equivalente a Tasa Básica Pasiva (TBP)
            más 2,20 puntos porcentuales durante los primeros 3 años del crédito y de TBP más 2,65
            puntos porcentuales a partir del año 4.
          </li>
          <li>
            Se puede aplicar para: compra de vivienda existente, compra de lote y construcción (no
              se puede solo para comprar lote) y construcción en lote propio (o bien lote de un
                familiar de hasta segundo grado).
          </li>
          <li>
            Aplica para el financiamiento de soluciones cuyo costo no exceda el tope de vivienda de
            interés social vigente (actualmente en ¢65.801.000).
          </li>
        </ol>
        <p>
          El consejo es que se acerque a la oficina de Grupo Vivienda o llamen a el numero 2685-4132
          para que le aplique el estudio correspondiente con base en sus ingresos.
        </p>
      </div>`,
  },
];

export const prefas = [
  {
    name: "53m2",
    fachada: prefa7Fachada,
    planta: prefa7Planta,
  },
  {
    name: "54m2",
    fachada: prefa2Fachada,
    planta: prefa2Planta,
  },
  {
    name: "54m2",
    fachada: prefa8Fachada,
    planta: prefa8Planta,
  },
  {
    name: "56m2",
    fachada: prefa12Fachada,
    planta: prefa12Planta,
  },
  {
    name: "57m2",
    fachada: prefa1Fachada,
    planta: prefa1Planta,
  },
  {
    name: "60m2",
    fachada: prefa9Fachada,
    planta: prefa9Planta,
  },
  {
    name: "75m2",
    fachada: prefa6Fachada,
    planta: prefa6Planta,
  },
  {
    name: "80m2",
    fachada: prefa10Fachada,
    planta: prefa10Planta,
  },
  {
    name: "80m2",
    fachada: prefa14Fachada,
    planta: prefa14Planta,
  },
  {
    name: "85m2",
    fachada: prefa5Fachada,
    planta: prefa5Planta,
  },
  {
    name: "90m2",
    fachada: prefa3Fachada,
    planta: prefa3Planta,
  },
  {
    name: "90m2",
    fachada: prefa4Fachada,
    planta: prefa4Planta,
  },
  {
    name: "90m2",
    fachada: prefa13Fachada,
    planta: prefa13Planta,
  },
  {
    name: "98m2",
    fachada: prefa11Fachada,
    planta: prefa11Planta,
  },
];
