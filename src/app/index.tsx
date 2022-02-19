import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DashboardScreen } from "../components/pages/dashboard";
import { NewProjectScreen } from "../components/pages/new-project";
import { OrdersScreen } from "../components/pages/orders";
import { ProfileScreen } from "../components/pages/profile";
import { ProjectsScreen } from "../components/pages/projects";
import { TicketsScreen } from "../components/pages/tickets";
import { observer } from "mobx-react";
import React from "react";
import { AuthScreen } from "./auth";
import { useUserStore } from "../store/user";
import { UpdateProjectScreen } from "../components/pages/update-project";
import { Footer } from "../components/organisms/footer";
import { Header } from "../components/organisms/header";

export const AppDashboard = observer(() => {
  let {
    siginInWithGoogle,
    fbUser,
    canSignin,
    checkSignedInUser,
    userAuthToken,
  } = useUserStore();

  React.useEffect(() => {
    checkSignedInUser();
  }, []);

  if (userAuthToken == null || userAuthToken == undefined) {
    return <AuthScreen />;
  }

  return (
    <Router>
      <Header />

      <div style={{ height: 60 }}></div>
      <div className="my-5">
        <>
          <Switch>
            <Route path="/create-project">
              <NewProjectScreen />
            </Route>
            <Route
              path="/projects/:projectID"
              component={() => {
                return <UpdateProjectScreen />;
              }}
            />
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

      <Footer />
    </Router>
  );
});
