
import { ListAreaTemplate } from "../templates/listareatemplate"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"

export const ProfileScreen = () => {
    return <div className="p-0">
        <Container>
            <Row className="jusity-content-center">
                <Col xs={{ span: "12" }} md={{ span: "8" }} className="mt-2">
                    <Card>
                        <Card.Header>
                            <div>User Info</div>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control type="text" placeholder="Fullname" />
                                    <Form.Text className="text-muted" >
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Row>
                                    <Col md={{ span: "6" }}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="Fullname" />
                                            <Form.Text className="text-muted" >
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col md={{ span: "6" }}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control type="text" placeholder="Phone" />
                                            <Form.Text className="text-muted" >
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control type="text" placeholder="Bio" />
                                    <Form.Text className="text-muted" >
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={{ span: "12" }} md={{ span: "8" }} className="mt-4">
                    <Card>
                        <Card.Header>
                            <div>Bank Info</div>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>

}
