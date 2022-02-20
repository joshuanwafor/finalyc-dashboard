import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
  let linkStyle = { textDecoration: "none", color: "gray" };

  return (
    <Navbar
      expand="lg"
      className=" shadow shadow-sm bg-dark navbar-dark"
      fixed={"top"}
    >
      <Container>
        <Navbar.Brand className="fw-bold" href="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ujaymobile-01.appspot.com/o/logo.jpg?alt=media&token=3f2ef6f4-5221-4a3e-8160-d18d5c48b2c4"
            width={100}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="shadow-none border-0 text-light"
          style={{ color: "white" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto  text-dark col-12 justify-content-end align-items-center">
            <Nav.Item className="py-2 py-md-0 mx-md-2">
              <Link to="/projects" style={linkStyle}>
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item className="py-2 py-md-0 mx-md-2">
              <Link to="/orders" style={linkStyle}>
                Orders
              </Link>
            </Nav.Item>
            <Nav.Item className="py-2 py-md-0 mx-md-2">
              <Link to="/profile">
                <Button
                  className="btn-outline-info"
                  variant="outline"
                  size="sm"
                >
                  Profile
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
