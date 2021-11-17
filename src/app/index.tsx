import { Navbar, Container, Nav, NavDropdown, Button, Form, FormControl } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { DashboardScreen } from "../components/pages/dashboard"
import { NewProjectScreen } from "../components/pages/new-project"
import { OrdersScreen } from "../components/pages/orders"
import { ProfileScreen } from "../components/pages/profile"
import { ProjectsScreen } from "../components/pages/projects"
import { TicketsScreen } from "../components/pages/tickets"
import { observer } from "mobx-react"
import firebase, { initializeApp } from "firebase/app";
import React from "react"
import { AuthScreen } from "./auth"
import { useUserStore } from "../store/user"
import { UpdateProjectScreen } from "../components/pages/update-project"


export const AppDashboard = observer(() => {
  let { load, siginInWithGoogle, fbUser, canSignin, checkSignedInUser, userAuthToken } = useUserStore();

  let linkStyle = { textDecoration: "none", color: "rgba(230,230,230,.9)" };


  React.useEffect(() => {
    checkSignedInUser();
  }, []);

  if (userAuthToken == null || userAuthToken == undefined) {
    return <AuthScreen />;
  }



  return <Router>
    <Navbar bg="dark" expand="lg" className="border-bottom py-3" variant="dark" fixed={"top"}>
      <Container fluid>
        <Navbar.Brand href="#">FinalYC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Item>
              <Link to="/projects"
                className="px-2"
                style={linkStyle}>Projects</Link></Nav.Item>
            <Nav.Item>
              <Link to="/orders"
                className="px-2"
                style={linkStyle}>Orders</Link></Nav.Item>
            <Nav.Item>
              <Link to="/tickets"
                className="px-2"
                style={linkStyle}>Tickers</Link></Nav.Item>
            <Nav.Item>
              <Link to="/notifications"
                className="px-2"
                style={linkStyle}>Notifications</Link></Nav.Item>
          </Nav>
          <div>
            <Link to="/profile">
              <Button variant="success">Profile</Button>
            </Link>
            <Link to="/profile">
              <Button className="btn-dark">Logout</Button>
            </Link>
          </div>
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
          <Route path="/projects/:projectID" component={() => {
            return <UpdateProjectScreen />
          }} />
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
});