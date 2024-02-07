import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen() {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  return (
    <Row>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>

      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroupItem>
            <h3>{product.name}</h3>
          </ListGroupItem>
          <ListGroupItem>{product.description}</ListGroupItem>
          <ListGroupItem>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </ListGroupItem>
          <ListGroupItem>Price: ${product.price}</ListGroupItem>
        </ListGroup>
      </Col>

      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Availability:</Col>
                <Col>
                  {product.countInStock > 0 ? "In stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Button
                  onClick={null}
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

    </Row>
  );
}

export default ProductScreen;