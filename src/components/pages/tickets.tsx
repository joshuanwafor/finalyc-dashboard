
import { ListAreaTemplate } from "../templates/listareatemplate"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProjectsComp } from "../organisms/projects"

export const TicketsScreen = () => {
    return <div className="p-0">
        <Container>
            <Row className="jusity-content-center">
                <Col xs={{ span: "12" }} md={{ span: "8" }} className="mt-2">
                    <Card>
                        <Card.Header>
                            <Card.Text>Tickets</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            Coming soon...
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>

}

function NoProject() {
    return <div style={{ height: "200px" }} className="d-flex justify-content-center align-items-center flex-column">
        <div className="text-dark mb-2">Oops you've not added any project to your bucket...</div>
        <Link to="create-project">
            <Button size="lg">Get started</Button>
        </Link>
    </div>
}