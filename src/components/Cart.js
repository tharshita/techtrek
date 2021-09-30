import '../App.css';
import React from "react";
// import { useHistory } from 'react-router-dom';
import { Navbar, Container, Row, Col, Card, Button } from 'react-bootstrap';

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
                <Card style={{ width: '60rem' }}>
                    <Card.Body>
                        <Card.Title>Item #</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Item Desc</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card style={{ width: '60rem' }}>
                    <Card.Body>
                        <Card.Title>Item #</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Item Desc</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Col className="text-center">
                    <Button variant="primary">Primary</Button>
                </Col>
            </Row>
        </Container>
        </>
    );

}

export default Cart;