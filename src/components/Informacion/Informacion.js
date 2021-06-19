import React from "react";
import Descarga from "../img/descarga.png";

class Informacion extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="nuestros-programas">
          <h2>Nuestros programas</h2>
          <div className="programas">
            <div className="programa">
              <figure className="hover-img">
                <img src={Descarga} />
                <figcaption>
                  <h3>Jiu Jitsu Adultos</h3>
                  <p>De lunes a sábado</p>
                </figcaption>
              </figure>
              <div className="titulo-div">
                <h3 className="titulo-programa">Gi adultos</h3>
              </div>
            </div>
            <div className="programa">
              <figure className="hover-img">
                <img src={Descarga} />
                <figcaption>
                  <h3>Grappling Adultos</h3>
                  <p>Miércoles: 20:00</p>
                  <p>Viernes: 10:30</p>
                </figcaption>
              </figure>
              <div className="titulo-div">
                <h3>Grappling adultos</h3>
              </div>
            </div>
            <div className="programa">
              <figure className="hover-img">
                <img src={Descarga} />
                <figcaption>
                  <h3>Jiu Jitsu Kids</h3>
                  <p>Lunes: 17:30</p>
                  <p>Miércoles: 17:30</p>
                </figcaption>
              </figure>
              <div className="titulo-div">
                <h3>Jiu Jitsu Kids</h3>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Informacion;
