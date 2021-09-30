import React from "react";
import { Navbar, Container } from 'react-bootstrap';

const Nav = () => {
    return (
        <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Techtrek Commerce</Navbar.Brand>
            </Container>
        </Navbar>
    );
  };
  
export default Nav;