import { Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { DashboardScreen } from "../components/pages/dashboard"
import { NewProjectScreen } from "../components/pages/new-project"
import { OrdersScreen } from "../components/pages/orders"
import { ProfileScreen } from "../components/pages/profile"
import { ProjectsScreen } from "../components/pages/projects"
import { TicketsScreen } from "../components/pages/tickets"
import { observer } from "mobx-react"
import React from "react"
import { AuthScreen } from "./auth"
import { useUserStore } from "../store/user"
import { UpdateProjectScreen } from "../components/pages/update-project"


export const AppDashboard = observer(() => {
  let { siginInWithGoogle, fbUser, canSignin, checkSignedInUser, userAuthToken } = useUserStore();

  let linkStyle = { textDecoration: "none", color: "gray" };


  React.useEffect(() => {
    checkSignedInUser();
  }, []);

  if (userAuthToken == null || userAuthToken == undefined) {
    return <AuthScreen />;
  }



  return <Router>
    <Navbar expand="lg" className=" py-3 shadow shadow-sm"  fixed={"top"} style={{borderTop:"2px solid orange", background:"ghostwhite"}}>
      <Container fluid>
        <Navbar.Brand className="fw-bold">
          <Link to="/" className="text-decoration-none text-dark" >
            MyPapers
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  className="shadow-none border-0"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  text-dark"
          >
            <Nav.Item className="py-2 py-md-0 mx-md-2">
              <Link to="/projects"

                style={linkStyle}>Projects</Link></Nav.Item>
            <Nav.Item className="py-2 py-md-0 mx-md-2">
              <Link to="/orders"

                style={linkStyle}>Orders</Link></Nav.Item>
            <Nav.Item className="py-2 py-md-0 mx-md-2">
              <Link to="/tickets"

                style={linkStyle}>Tickets</Link></Nav.Item>
          </Nav>
          <div>
            <Link to="/profile">
              <Button variant="success">Profile</Button>
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