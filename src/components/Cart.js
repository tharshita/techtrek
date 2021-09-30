import React, { useState } from "react";
import { Navbar, Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Carts from './Carts';

const Cart = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useHistory();

    const handleOk = () => {
        setShow(false);
        history.replace({
            pathname: '/Checkout',
            // state: {
            //     price: payee,
            // }
        });
    };

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
                    <Button variant="primary" onClick={handleShow}>Check Out</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Checkout</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>You are paying $XXX</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleOk}>
                                Confirm
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
        </>
    );

}

export default Cart;