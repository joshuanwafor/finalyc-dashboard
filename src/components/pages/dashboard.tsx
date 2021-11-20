
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useUserStore } from "../../store/user"
import { ProjectsComp } from "../organisms/projects"

export const DashboardScreen = () => {
    let userStore = useUserStore();
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
                            <div className="my-1">
                                <div className="pl-2">{userStore.user?.fullname ?? "Set fullname"}</div>
                            </div>
                            <div>
                                <i className="bi bi-envelope "></i>
                                <div className="pl-2">{userStore.user?.email}</div>
                            </div>
                            <div className="my-1">
                                <i className="bi bi-phone mr-2"></i>
                                <div className="pl-2">{userStore.user?.phone ?? "Set Phone num"}</div>
                            </div>
                            <div className="my-1">
                                <i className="bi bi-globe mr-2"></i>
                                <div className="pl-2">Nigeria</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="mt-4">
                        <Card.Header>
                            <Card.Text>System info</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="my-1">
                                <i className="bi bi-hand-thumbs-up-fill"></i>
                                <div className="pl-2">System's functional</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}


