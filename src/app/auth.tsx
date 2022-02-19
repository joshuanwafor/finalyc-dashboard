import { observer } from "mobx-react";
import React from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Tab,
  TabContainer,
  Row,
} from "react-bootstrap";
import { useUserStore } from "../store/user";

export const AuthScreen: React.FC<{}> = observer(() => {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let { siginInWithGoogle } = useUserStore();

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ujaymobile-01.appspot.com/o/logo.jpg?alt=media&token=3f2ef6f4-5221-4a3e-8160-d18d5c48b2c4"
              width={100}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto col-12  justify-content-end">
              <Nav.Link href="https://wa.me/2349017283616?text= Hello Joshua, i'll love to register on mypapers.shop as a partner... ">
                Apply
              </Nav.Link>
              <Nav.Link href="https://mypapers.shop/terms-and-conditions">
                Terms & Conditions
              </Nav.Link>
              <Nav.Link href="https://mypapers.shop">Marketplace</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="justify-content-center mb-3">
              <Col md={{ span: "5" }}>
                <Nav variant="pills" className="justify-content-cnter">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Signin</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Create Account</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row className="justify-content-center">
                  <Col md={{ span: "5" }}>
                    <Card>
                      <Card.Header>
                        <Card.Title>Login</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                              value={email}
                              onChange={(target) => {
                                setEmail(target.target.value);
                              }}
                            />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(target) => {
                                setPassword(target.target.value);
                              }}
                            />
                          </Form.Group>
                          <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                            onClick={() => {
                              siginInWithGoogle(email, password);
                            }}
                          >
                            Submit
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <SignUp />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Container>
    </div>
  );
});

function SignUp() {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let { siginUpWithGoogle } = useUserStore();

  return (
    <div>
      <Row className="justify-content-center">
        <Col md={{ span: "5" }}>
          <Card>
            <Card.Header>
              <Card.Title>Register</Card.Title>
            </Card.Header>
            <Card.Body>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(target) => {
                      setEmail(target.target.value);
                    }}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(target) => {
                      setPassword(target.target.value);
                    }}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  onClick={() => {
                    siginUpWithGoogle(email, password);
                  }}
                >
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
