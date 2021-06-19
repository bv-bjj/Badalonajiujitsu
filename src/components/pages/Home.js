import React from "react";
import Testimonios from "../Testimonios/Testimonios";
import Titulo from "../Titulo/Titulo";
import Informacion from "../Informacion/Informacion";
import Mapa from "../Mapa/Mapa";
import Footer from "../Footer/Footer";
import Aprende from "../Aprende/Aprende";


const Home = () => {
  return (
    <React.StrictMode>
      <Titulo />
      <Informacion />
      <Mapa />
      <Aprende />
      <Testimonios />
      <Footer />
    </React.StrictMode>
  );
};

export default Home;
