import React from "react";

class Mapa extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="info-mapa-horarios">
          <div className="info">
            <div className="info1">
              <h3 className="llegar">¿Cómo llegar?</h3>
              <div className="localizacion">
                <h2>Dirección</h2>
                <p className="direccion"> Carrer de Juan Valera, 178,</p>
                <p>08914, Badalona, Barcelona</p>
              </div>
              <div className="metro">
                <h2>En metro</h2>
                <div className="l10">
                  <p>Línea 10 Norte, parada La salut</p>
                </div>
                <div className="l2">
                  <p>Línea 2, parada Gorg</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5811.3746047965!2d2.2217941891720483!3d41.442901145918015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2488965bd3046819!2sAcademia%20Badalona%20Jiujitsu!5e0!3m2!1ses!2ses!4v1621496120032!5m2!1ses!2ses"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Mapa;
