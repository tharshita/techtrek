import React from "react";
import { useLocation, useHistory} from 'react-router-dom';
import { Col, Row, Form, Button } from 'react-bootstrap';

const Checkout = () => {

    // const location = useLocation();

    // const history = useHistory();

    // const routeHome = () => {
    //     history.push({
    //         pathname: '/Home',
    //         state: {
    //             left: balance - amount
    //         }
    //     });
    // };

    return (
        <>
            <Row type="flex" justify="center" align="center">
                <Col md={24}
                        style={{
                            textAlign: "center",
                        }}
                    >
                    <div>
                        <h1>You have successfully checked out</h1>
                    </div>
                </Col>
                <Col>
                    <Button>
                        Home
                    </Button>
                </Col>
            </Row>
        </>
    );

}

export default Checkout;