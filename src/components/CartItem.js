import React from "react";
import { Col, Card, Button } from 'react-bootstrap';

const CartItem = (props) => {

    const { product_id, order_id, product_qty, total_price } = props;

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Title>Product ID: { product_id }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Order ID: {order_id}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Product Quantity: {product_qty}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Total Price: ${total_price}</Card.Subtitle>
                <Button variant="danger">Remove Item</Button>
            </Card>
        </Col>
    );

}

export default CartItem;