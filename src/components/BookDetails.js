import React from "react";
import { Badge, Button, Col, Container, Image, Row } from "react-bootstrap";
export default function BookDetails() {
  return (
    <Container fluid className="my-4">
      <Row>
        <Col
          xs={4}
          className={
            "border d-flex justify-content-center align-items-center p-3"
          }
        >
          <Image src="/assets/karnali.jpg" />
        </Col>
        <Col className="border p-3">
          <h5 className="text-muted">About the book</h5>
          <hr />
          <Row>
            <Col className="p-0">
              <h2>Karnali Province </h2>
            </Col>
            <Col className="d-flex gap-2 justify-content-end">
              <Button>Get</Button>
              <Button variant="outline-success">Buy</Button>
            </Col>
          </Row>
          <small className="text-muted">By Atrhuh Gunn</small>
          <h4>Rs. 499</h4>
          <p>Published on 19 Dec 2022</p>
          <Badge>Action</Badge>

          <p className="text-muted">
            Owned by <b>Manoj Bastakoti</b>
          </p>
          <p>
            The Karnali Province is one of the seven provinces of Nepal. It is
            located in the far west of Nepal, bordering Tibet, China to the
            north and India to the south. The province has an area of 34,000 km2
            (13,000 sq mi) and a population of 1,000,000. The provincial capital
            is Surkhet. The province is divided into 5 districts: Bajhang,
            Bajura, Dadeldhura, Darchula and Surkhet.
          </p>
        </Col>
      </Row>
      <h1>Exchange</h1>
    </Container>
  );
}
