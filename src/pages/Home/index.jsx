import React from "react";
import { Container, Row, Alert, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default () => {
  const products = useSelector((state) => state.products.list);
  return (
    <Container>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                  <Link to={`/${product.id}/details`}>
                    <Button variant="outline-primary">Details</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Alert variant="primary">{products[0].description}</Alert>
      </Row>
    </Container>
  );
};
