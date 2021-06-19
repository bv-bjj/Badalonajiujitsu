import React from "react";
import { Card } from "react-bootstrap";

const Tarjeta = (props) => (
  <div className="d-flex justify-content-center items-center">
    <Card style={{ width: "30rem", margin: "15px" }}>
      <Card.Img variant="top"  src={props.imagenUrl} />
      <Card.Title className="m-3 d-flex justify-content-center items-center">{props.titulo}</Card.Title>
      
      <Card.Body>
        <Card.Text className="text-dark pr-2" id="font">{props.descripcion}</Card.Text>
        <Card.Text className=" text-dark pr-2" id="font2">Horarios: {props.horario}</Card.Text>
      </Card.Body>
    </Card>
  </div>
   
);

export default Tarjeta;

