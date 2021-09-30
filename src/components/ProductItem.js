import React, { useState } from 'react';
import { Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

function ProductItem(props) {
    const { product_id, category_id, description, image, price, qty, title } = props;
    const [quantity, setQuantity] = useState(1);

    const onChangeHandler = (event) => {
        const value = event.target.value;
        setQuantity(value);
      }

    const addToCart = async () => {
        //TODO get customer id from local host
        let formData = new FormData();
        formData.append('customer_id', 1)
        formData.append('price', price)
        formData.append('qty', quantity)
        formData.append('product_id', product_id)
        const config = {
            headers: {
                'content-type': 'application/form-data'
            }
        }
        axios.post('http://dbstechtrek.duckdns.org/addtocart.php', formData, config)
        .then(response => alert(response.data));
    };

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
                    <FormControl name="quantity" type="number" min="1" max={qty} defaultValue="1" onChange={onChangeHandler}/>
                </InputGroup>
                </>
                <Button variant="outline-dark" type="submit" onClick={addToCart}>
                    Add to Cart
                </Button>
            </Card>
        </Col>
    );
}

export default ProductItem;