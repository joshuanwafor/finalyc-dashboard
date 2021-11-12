
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { ProjectsComp } from "../organisms/projects"

export const DashboardScreen = () => {
    return <div>
        <Container>
            <Row className="">
                <Col xs={{ span: "12" }} md={{ span: "8" }} className="mt-2">
                    <ProjectsComp />
                </Col>
                <Col xs={{ span: "12" }} md={{ span: "4" }} className="mt-2" >
                    <Card>
                        <Card.Header>
                            <Card.Text>Profile</Card.Text>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                    <Card className="mt-4">
                        <Card.Header>
                            <Card.Text>System inf</Card.Text>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}


