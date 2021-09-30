import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

function ProductItem(props) {
    const { product_id, category_id, description, image, price, qty, title } = props;

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image} />
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Subtitle>
                    Price: {price}
                </Card.Subtitle>
                <Card.Subtitle>
                    Available Qty: {qty}
                </Card.Subtitle>
                <Button variant="primary">
                    Add to Cart
                </Button>
            </Card>
        </Col>
    );
}

export default ProductItem;