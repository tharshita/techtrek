import React from "react";
import { Col, Card, Button } from 'react-bootstrap';

const CartItem = (props) => {

    const { product_id, title, order_id, product_qty, total_price } = props;

    return (
        <Col>
            <Card style={{ width: '30rem' }}>
                <Card.Header>Order ID: {order_id}</Card.Header>
                <Card.Title> { title }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Product ID: { product_id }</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Quantity: {product_qty}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Total Price: ${total_price}</Card.Subtitle>
                <Button variant="danger">Remove Item</Button>
            </Card>
        </Col>
    );

}

export default CartItem;