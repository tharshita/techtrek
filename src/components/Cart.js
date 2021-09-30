import React from "react";
import { Navbar, Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carts from './Carts';

const Cart = () => {

    return (
        <>
        {/* <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Techtrek Commerce</Navbar.Brand>
            </Container>
        </Navbar> */}

        <Container>
            <Row xs={2} md={4} lg={6}>
                <Col>
                    <h1>Orders</h1>
                </Col>
            </Row>
            <Row>
                <Carts />
            </Row>
            <Row>
                <Col className="text-center">
                    <Button variant="primary">Check Out</Button>
                </Col>
            </Row>
        </Container>
        </>
    );

}

export default Cart;