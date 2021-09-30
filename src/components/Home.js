import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import Products from './Products';

function Home() {

    return (
        <Container>
            <h1> Home </h1>
            <Button variant="outline-dark">View Cart</Button>
            <Products></Products>
        </Container>
    );
}

export default Home;