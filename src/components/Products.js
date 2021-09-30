import React, { useEffect, useState } from 'react';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import axios from 'axios';
import ProductItem from './ProductItem';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
      }, []);

    const fetchProducts = async () => {
        const result = await axios.get(
          'http://dbstechtrek.duckdns.org/getproducts.php',
        );
        console.log(result.data)
        setProducts(result.data)
      };
    

    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {products.map(product =>
                    <ProductItem
                        key={product.product_id}
                        product_id={product.product_id}
                        category_id={product.category_id}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                        qty={product.qty}
                        title={product.title}
                    />)
                }
            </Row>
        </Container>
    );
}

export default Products;