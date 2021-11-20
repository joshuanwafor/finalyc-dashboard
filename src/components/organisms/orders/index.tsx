
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useOrders } from "../../../store/order"
import React from "react";

export const OrdersComp: React.FC = () => {
    let orders = useOrders()

    React.useEffect(() => {
        orders.load()
    }, []);

    let items = orders.mytransactions.slice();
    return <div>
        <Card>
            <Card.Header className="d-flex align-content-center align-items-center justify-content-between">
                <div className="h5">My Orders</div>
            </Card.Header>
            <Card.Body>
                {items.map(v => {
                    return <div className="py-3 px-0 border-bottom btn d-block text-start">
                        <Row className="align-items-center">
                            <Col sm={{ span: "12" }} md={{ span: "8" }} >
                                <div className="fw-bold">{v.id}</div>
                                <div className="bg-gray">{v.description}</div>
                            </Col>
                            <Col sm={{ span: "12" }} md={{ span: "4" }} className="d-flex justify-content-end" >
                                <Button variant="secondary" size={"sm"}>Share</Button>
                            </Col>
                        </Row>
                    </div>
                })}
            </Card.Body>
        </Card>
    </div>
}