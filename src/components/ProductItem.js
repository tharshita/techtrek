import React from 'react';
import { Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';

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
                    <b> Price: </b> {price}
                </Card.Subtitle>
                <Card.Subtitle>
                    <b> Quantity: </b> {qty}
                </Card.Subtitle>
                <>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="quantity">Quantity</InputGroup.Text>
                    <FormControl aria-label="quantity" type="number" min="1" max={qty} defaultValue="1"/>
                </InputGroup>
                </>
                <Button variant="outline-dark" type="submit">
                    Add to Cart
                </Button>
            </Card>
        </Col>
    );
}

export default ProductItem;