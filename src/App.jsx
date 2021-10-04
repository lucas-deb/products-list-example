import React from "react";
import { Container, Row, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const item = useSelector((state) => state.products.list[0]);
  return (
    <Container>
      <Row>
        <Alert variant="primary">{item.description}</Alert>
      </Row>
    </Container>
  );
}

export default App;
