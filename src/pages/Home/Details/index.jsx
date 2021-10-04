import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

export default () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.list.find((item) => item.id === Number(id))
  );

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to="/">
            <Button variant="outline-primary">Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
