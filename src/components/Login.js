import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Home from './Home';

function Login() {

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Title>Login</Card.Title>
                <Card.Text>
                    Username
                    Password
                </Card.Text>
                <Button variant="primary" onClick={Home}>
                    Login
                </Button>
            </Card>
        </Container>
    );
}

export default Login;