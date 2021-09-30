import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Login() {

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Title>Login</Card.Title>
                <Card.Text>
                    Username
                    Password
                </Card.Text>
                <Button variant="primary">
                    Login
                </Button>
            </Card>
        </Container>
    );
}

export default Login;