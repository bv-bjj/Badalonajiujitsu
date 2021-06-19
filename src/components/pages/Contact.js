import React from "react";
import Tarjeta from "./Tarjeta";
import descarga from "../img/descarga.png";
import Footer from "../Footer/Footer";

class Programas extends React.Component {
  constructor() {
    super();
    this.state = {
      tarjetas: [
        {
          titulo: "Jiu Jitsu adultos",
          imagenUrl: descarga,
          descripcion:
          "El grappling, traducido al castellano como agarres, se refiere a todos aquellos sistemas de lucha cuerpo a cuerpo que no involucran golpes para vencer al rival, sino que se utilizan técnicas de derribo, de posición o sumisión para conseguir puntos o forzar su rendición. Este tipo de sistemas son muy utilizados en el mundo, muchos de estos sistemas de grappling o agarres son luchas tradicionales de una etnia o región.Todos estos sistemas tienen un amplio uso en Artes marciales mixtas, defensa personal y distintos deportes, hasta tal punto que el judo y la lucha, ya sea grecorromana o libre, son el primer y el segundo deporte de contacto más practicados en todo el mundo. El grappling puede ser realizado tanto en una situación de lucha de pie, como en el suelo. Las técnicas de agarre de pie incluyen luxaciones y proyecciones, estas técnicas pueden considerarse precursoras de la lucha en el suelo, al forzar al adversario a caer en una posición desfavorable. Diversos sistemas de lucha emplean el agarre como elemento fundamental de habilidad."       ,
          horario: "Todos los días",
        },
      {
          titulo: "Grappling adultos",
          imagenUrl: descarga,
          descripcion:
          "El grappling, traducido al castellano como agarres, se refiere a todos aquellos sistemas de lucha cuerpo a cuerpo que no involucran golpes para vencer al rival, sino que se utilizan técnicas de derribo, de posición o sumisión para conseguir puntos o forzar su rendición. Este tipo de sistemas son muy utilizados en el mundo, muchos de estos sistemas de grappling o agarres son luchas tradicionales de una etnia o región.Todos estos sistemas tienen un amplio uso en Artes marciales mixtas, defensa personal y distintos deportes, hasta tal punto que el judo y la lucha, ya sea grecorromana o libre, son el primer y el segundo deporte de contacto más practicados en todo el mundo. El grappling puede ser realizado tanto en una situación de lucha de pie, como en el suelo. Las técnicas de agarre de pie incluyen luxaciones y proyecciones, estas técnicas pueden considerarse precursoras de la lucha en el suelo, al forzar al adversario a caer en una posición desfavorable. Diversos sistemas de lucha emplean el agarre como elemento fundamental de habilidad."         ,
          horario: "Miércoles a las 20:00 y viernes a las 10:30",
        },
          
      {
        titulo: "Jiu jitsu kids",
          imagenUrl: descarga,
          descripcion:
          "El grappling, traducido al castellano como agarres, se refiere a todos aquellos sistemas de lucha cuerpo a cuerpo que no involucran golpes para vencer al rival, sino que se utilizan técnicas de derribo, de posición o sumisión para conseguir puntos o forzar su rendición. Este tipo de sistemas son muy utilizados en el mundo, muchos de estos sistemas de grappling o agarres son luchas tradicionales de una etnia o región.Todos estos sistemas tienen un amplio uso en Artes marciales mixtas, defensa personal y distintos deportes, hasta tal punto que el judo y la lucha, ya sea grecorromana o libre, son el primer y el segundo deporte de contacto más practicados en todo el mundo. El grappling puede ser realizado tanto en una situación de lucha de pie, como en el suelo. Las técnicas de agarre de pie incluyen luxaciones y proyecciones, estas técnicas pueden considerarse precursoras de la lucha en el suelo, al forzar al adversario a caer en una posición desfavorable. Diversos sistemas de lucha emplean el agarre como elemento fundamental de habilidad."         ,
          horario: "Todos los días",
        }
        ],
    };
  }
  render() {
    return (
      <React.StrictMode>
      <div className="d-flex flex-column justify-content-center" id="containerGrande">
        <div id="tituloProgramas">
          <h3>Nuestros programas</h3>
        </div>

        <div className="d-flex flex-column items-center justify-content-center" id="container2">
          {this.state.tarjetas.map((tarjeta) => (
            <Tarjeta
              imagenUrl={tarjeta.imagenUrl}
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              horario={tarjeta.horario}
            />
          ))}
        </div>
      </div>
      
      <Footer />
      

      </React.StrictMode>
    );
  }
}

export default Programas;
