
import { Container, Row, Col, Card, Button } from "react-bootstrap"

export const TicketsComp: React.FC = () => {
    return <div>
        <Card>
            <Card.Header className="d-flex align-content-center align-items-center justify-content-between">
                <div className="h5">My Tickets</div>
            </Card.Header>
            <Card.Body>
                {[1, 2, 3, 4, 5].map(v => {
                    return <div className="py-3 px-0 border-bottom btn d-block text-start">
                        <Row className="align-items-center">
                            <Col sm={{ span: "12" }} md={{ span: "8" }} >
                                <div className="fw-bold">Ticket title</div>
                                <div className="bg-gray">Project description goes here a little of it.</div>
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