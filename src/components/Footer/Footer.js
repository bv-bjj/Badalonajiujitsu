import React from "react";
import logo4 from "../img/logo4.png";
import { SocialIcon } from "react-social-icons";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <>
          <footer>
            <div className="footer1">
              <div className="logo-footer">
                <img src={logo4} alt />
              </div>
              <div className="horarios">
                <h2>Horarios</h2>
                <ul id="ul2">
                  <li>Lunes: de 10:00 a 12:00 y 18:00 a 21:30</li>
                  <li>Martes: de 10:00 a 12:00 y 17:00 a 20.30</li>
                  <li>Miércoles: de 10:00 a 12:00 y 18:00 a 21:30</li>
                  <li>Jueves: de 10:00 a 12:00 y 17:00 a 20.30</li>
                  <li>Viernes: de 10:00 a 12:00 y 17:00 a 20.30</li>
                  <li>Sábado: de 10:00 a 12:00</li>
                </ul>
              </div>
              <div className="footer-container">
                <div className="texto-footer">
                  <h2>Información</h2>
                  <p>Teléfono: 685418117 </p>
                  <p>Contacto: info@badalonajiujitsu.com</p>
                  <p>
                    Dirección: Carrer de Juan Valera, 178, 08914, <br />{" "}
                    Badalona, Barcelona
                  </p>
                </div>
              </div>
            </div>
            <div className="last-footer">
              <hr className="linea2" />
              <p>
                Desarrollado por Barrioviajero - 2021 <br /> Todos los derechos
                reservados
              </p>
              <div className="redes-sociales-footer">
                <SocialIcon
                  url="https://www.facebook.com/Academia-Badalona-Jiujitsu-105699827432603/"
                  className="facebook"
                  target="_blank"
                  bgColor="red"
                  style={{ height: 35, width: 35 }}
                />

                <SocialIcon
                  url="https://www.instagram.com/badalonajiujitsu/"
                  className="instagram"
                  bgColor="red"
                  target="_blank"
                  style={{ height: 35, width: 35 }}
                />
              </div>
            </div>
          </footer>
        </>
      </React.Fragment>
    );
  }
}

export default Footer;
