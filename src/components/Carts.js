import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import CartItem from './CartItem'

const Carts = () => {

    const [orders, setOrder] = useState([]);

    useEffect(() => {
        fetchOrders()
      }, []);

    const fetchOrders = async () => {
        const result = await axios.post(
          'http://dbstechtrek.duckdns.org/getorderitems.php?customer_id=1'
        );
        console.log(result.data)
        setOrder(result.data)
      };

    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                <div>
                {orders.map(order =>
                    <CartItem
                        key={order.product_id}
                        product_id={order.product_id}
                        title={order.title}
                        order_id={order.order_id}
                        product_qty={order.product_qty}
                        total_price={order.total_price}
                    />)
                }
                </div>
            </Row>
        </Container>
    );

}

export default Carts;