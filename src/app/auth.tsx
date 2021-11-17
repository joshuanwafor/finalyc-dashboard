import { observer } from "mobx-react";
import React from "react";
import { Alert, Button, Card, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { useUserStore } from "../store/user";


export const AuthScreen: React.FC<{}> = observer(() => {

    let [email, setEmail] = React.useState("");
    let [password, setPassword] = React.useState("");

    let { siginInWithGoogle } = useUserStore();

    return <div>
        <Navbar bg="dark" expand="lg" variant="dark" className="mb-5">
            <Container>
                <Navbar.Brand href="#home">Final Y.C.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Apply</Nav.Link>
                        <Nav.Link href="#link">Terms & Conditions</Nav.Link>
                        <Nav.Link href="#link">Marketplace</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container>
            <Row className="justify-content-center">
                <Col md={{ span: "5" }}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Signin</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                        value={email}
                                        onChange={(target) => {
                                            setEmail(target.target.value)
                                        }} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                        value={password}
                                        onChange={(target) => {
                                            setPassword(target.target.value)
                                        }} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100" onClick={() => {
                                    siginInWithGoogle(email, password);
                                }}>
                                    Submit
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>


                    <Alert className="mt-3">
                        Don't have an account!!! No worries, connect with us as a partner.{" "}
                        <Alert.Link href="#">Connect</Alert.Link>
                    </Alert>

                </Col>
            </Row>
        </Container>
    </div>
});