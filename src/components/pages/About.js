import React from 'react'
import Mapa from '../Mapa/Mapa'
import Footer from '../Footer/Footer'

const About = () => {
    let hola = "adios"

        return (
            
            
            <React.StrictMode>
            <h1>Hola, {hola} </h1>
           
           <Mapa  />
           <Footer />
           
           </React.StrictMode>
        
    );
}

export default About;