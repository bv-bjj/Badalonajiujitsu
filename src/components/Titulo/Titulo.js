import React from "react";

class Titulo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="container-inicial"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="sub-container-inicial">
            <div className="titulo">
              <h1>
                Badalona <br /> Jiu Jitsu
              </h1>
              <h2>
                Academia especializada <br /> en Brazilian Jiujitsu.{" "}
              </h2>
              <h3 className="probar">
                ¿Te gustaría probar una clase con nosotros?
              </h3>
              <a href="#hola" className="myButton">
                ¡Reserva tu clase!
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Titulo;
