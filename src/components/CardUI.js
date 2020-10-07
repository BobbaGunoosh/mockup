import React from "react";
import { Card, Button } from "react-bootstrap";

function CardUI({ img, title, text }) {
  return (
    <div>
      <Card className="text-center h-100" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardUI;
