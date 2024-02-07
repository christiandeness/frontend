import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";
import "../SelectRoom.css";

function SelectRoom() {
  const firstRowProducts = products.slice(0, 2);
  const secondRowProducts = products.slice(2);

  return (
    <header>
      <div>
        <h1 className="title">Available Rooms</h1>
        <Row className="justify-content-evenly" style={{ marginBottom: "1rem" }}>
          {firstRowProducts.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={8} xl={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-evenly">
          {secondRowProducts.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={8} xl={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </header>
  );
}

export default SelectRoom;