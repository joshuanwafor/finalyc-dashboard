import { observer } from "mobx-react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { projectsManager, useProjectStore } from "../../../store/projects";
import React from "react";
import { Link } from "react-router-dom";
export const ProjectsComp: React.FC = observer(() => {
  let { load, my_projects } = useProjectStore();

  React.useEffect(() => {
    load();
  }, []);

  let items = my_projects.slice();

  return (
    <div>
      <Card>
        <Card.Header className="d-flex align-content-center align-items-center justify-content-between">
          <div className="h4 p-0 m-0">Projects</div>
          <Link to="/create-project">
            <Button size="sm">New</Button>
          </Link>
        </Card.Header>
        <Card.Body className="p-0">
          {items.map((v) => {
            return (
              <div className="py-3 px-3 border-bottom btn d-block text-start">
                <Row className="align-items-center text-decoration-none text-dark">
                  <Col sm={{ span: "12" }} md={{ span: "8" }}>
                    <div className="fw-bold">
                      {v.title}{" "}
                      <Badge bg="secondary">
                        {v.review_status ?? "pending"}
                      </Badge>
                    </div>
                    <div className="bg-gray">
                      {v.description ?? "".slice(0, 255)}...
                    </div>
                  </Col>
                  <Col
                    sm={{ span: "12" }}
                    md={{ span: "4" }}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className=""
                        size="sm"
                      >
                        More
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link to={"/projects/" + v.id}>Edit</Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            projectsManager.delete(v);
                          }}
                        >
                          Delete
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Share</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
});
