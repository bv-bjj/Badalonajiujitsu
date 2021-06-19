import React from "react";
import img from "../img/img.jpeg";

class Testimonios extends React.Component {
  render() {
    
    return (
      
      <React.Fragment>
        
        <>
          <h3 className="titulo-alumnos">Testimonios</h3>
          <div className="testimonios2">
            <div className="testimonios">
              <div className="testimonio">
                <div className="testimonio-foto">
                  <img src={img} alt />
                </div>
                <div className="testimonio-texto">
                  <p>
                    "Una academia para aprender y guerrear con un magnífico
                    ambiente y muy buen nivel. Perfecta también para que los
                    peques aprendan divirtiéndose y esforzándose. Aunque hay
                    clases fijas suele haber entrenamientos pactados fuera de
                    estos horarios."
                  </p>
                  <h3>Ivan </h3>
                </div>
              </div>
              <div className="testimonio">
                <div className="testimonio-foto">
                  <img src={img} alt />
                </div>
                <div className="testimonio-texto">
                  <p>
                    "Muy buen nivel para aprender, exigirse y disfrutar.
                    Hermosas instalaciones, horarios para adultos y niños y
                    sobretodo excelente grupo con gran calidad humana siempre
                    dispuestos a ayudar, crecer, seguir mejorando y contagiando
                    la mejor energía."
                  </p>
                  <h3>Georgina</h3>
                </div>
              </div>
            </div>
          </div>
        </>
      </React.Fragment>
    );
  }
}

export default Testimonios;
