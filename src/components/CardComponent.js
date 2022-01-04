import React from "react";
import { Card } from "react-bootstrap";

const CardComponent = ({character}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={character.img} style={{width:'100%'}} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
