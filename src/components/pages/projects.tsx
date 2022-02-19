import { ListAreaTemplate } from "../templates/listareatemplate";
import { Button, Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectsComp } from "../organisms/projects";

export const ProjectsScreen = () => {
  return (
    <div className="p-0" style={{minHeight:"70vh"}}>
      <Container>
        <Row className="jusity-content-center">
          <Col xs={{ span: "12" }} md={{ span: "12" }} className="mt-2 ">
            <div style={{ flex: 1 }}>
              <ProjectsComp />
            </div>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function NoProject() {
  return (
    <div
      style={{ height: "200px" }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <div className="text-dark mb-2">
        You've not added any project to your bucket...
      </div>
      <Link to="create-project">
        <Button size="lg">Get started</Button>
      </Link>
    </div>
  );
}
