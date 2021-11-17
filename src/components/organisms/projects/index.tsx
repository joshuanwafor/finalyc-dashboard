
import { observer } from "mobx-react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useProjectStore } from "../../../store/projects"
import React from "react"
import { Link } from "react-router-dom";
export const ProjectsComp: React.FC = observer(() => {

    let { load, my_projects } = useProjectStore();

    React.useEffect(() => {
        load();
    }, []);

    let items = my_projects.slice();

    return <div>
        <Card>
            <Card.Header className="d-flex align-content-center align-items-center justify-content-between">
                <div className="h5">Projects</div>
                <Link to="/create-project"><Button>New</Button></Link>
            </Card.Header>
            <Card.Body>
                {items.map(v => {
                    return <div className="py-3 px-0 border-bottom btn d-block text-start">
                        <Link to={"/projects/" + v.id}>
                            <Row className="align-items-center">
                                <Col sm={{ span: "12" }} md={{ span: "8" }} >
                                    <div className="fw-bold">{
                                        v.title
                                    }</div>
                                    <div className="bg-gray">{
                                        v.description
                                    }</div>
                                </Col>
                                <Col sm={{ span: "12" }} md={{ span: "4" }} className="d-flex justify-content-end" >
                                    <Button variant="secondary" size={"sm"}>Share</Button>
                                </Col>
                            </Row>
                        </Link>
                    </div>
                })}
            </Card.Body>
        </Card>
    </div>
})