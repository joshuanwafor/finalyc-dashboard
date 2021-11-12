import { Navbar, Container, Nav, NavDropdown, Button, Form, FormControl } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { DashboardScreen } from "../components/pages/dashboard"
import { NewProjectScreen } from "../components/pages/new-project"
import { OrdersScreen } from "../components/pages/orders"
import { ProfileScreen } from "../components/pages/profile"
import { ProjectsScreen } from "../components/pages/projects"
import { TicketsScreen } from "../components/pages/tickets"
export const AppDashboard = () => {
  return <Router>
    <Navbar bg="dark" expand="lg" className="border-bottom py-3" variant="dark" fixed={"top"}>
      <Container fluid>
        <Navbar.Brand href="#">FinalYC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/tickets">Tickets</Nav.Link>
            <Nav.Link href="/orders">
              Orders
            </Nav.Link>
            <Nav.Link href="/orders">
              Notifications
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Link to="/profile">
              <Button variant="success">Profile</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div style={{ height: 60 }}></div>
    <div className="my-5">
      <>
        <Switch>
          <Route path="/create-project">
            <NewProjectScreen />
          </Route>
          <Route path="/projects">
            <ProjectsScreen />
          </Route>
          <Route path="/orders">
            <OrdersScreen />
          </Route>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/tickets">
            <TicketsScreen />
          </Route>
          <Route path="/">
            <DashboardScreen />
          </Route>
        </Switch>
      </>
    </div>


  </Router>
}