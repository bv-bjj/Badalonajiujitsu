import React from "react";
import Horario from "../img/horario.png";
import Footer from "../Footer/Footer";


const Horarios = () => {
  return (
    <React.StrictMode>
      <div id="horariodiv1">
        <div className="">
          <h2>Horarios</h2>
          <img id="horariogrande" src={Horario} />
        </div>
        <div className="tarifagrande">
          <h2>Tarifa</h2>
          <div>
            <h3>60 euros mensuales. Todos los días y todos los horarios </h3>
            <h3>Precios especiales para cuerpos de seguridad </h3>
          </div>
        </div>
      </div>

     
      <Footer />
    </React.StrictMode>
  );
};

export default Horarios;
