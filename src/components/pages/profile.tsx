
import { ListAreaTemplate } from "../templates/listareatemplate"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { useUserStore } from "../../store/user"
import { observer } from "mobx-react-lite";
import { SetupAccount } from "./set-up-account";

export const ProfileScreen = observer(() => {
    let userStore = useUserStore();
    if (userStore.user == undefined) {
        return <div></div>;
    }

    let { fullname, email, phone, paystack_bank_integration, bio } = userStore.user;
    return <div className="p-0">
        <Container>
            <Row className="jusity-content-center">
                <Col xs={{ span: "12" }} md={{ span: "8" }} className="mt-2">
                    <Card>
                        <Card.Header>
                            <div>User Info</div>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control type="text" placeholder="Fullname"
                                        value={fullname}
                                        onChange={(event) => {
                                            userStore.updateProp("fullname", event.target.value)
                                        }} />
                                </Form.Group>

                                <Row>
                                    <Col md={{ span: "6" }}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="Email"
                                                value={email} disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col md={{ span: "6" }}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control type="text" placeholder="Phone"
                                                value={phone}
                                                onChange={(event) => {
                                                    userStore.updateProp("phone", event.target.value)
                                                }} />

                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control type="text" placeholder="Bio"
                                        value={bio} onChange={(event) => {
                                            // @ts-ignore
                                            userStore.updateProp("bio", event.target.value)
                                        }} />

                                </Form.Group>

                                <Button onClick={() => {
                                    userStore.updateUser()
                                }}>Save</Button>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={{ span: "12" }} md={{ span: "8" }} className="mt-4">
                    <Card>
                        <Card.Header>
                            <div>Bank Info</div>
                        </Card.Header>
                        <Card.Body>
                            {paystack_bank_integration == undefined ? <SetupAccount /> : <div>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Bank name</Form.Label>
                                        <Form.Control type="text"
                                            value={paystack_bank_integration?.business_name}
                                            disabled
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Bank name</Form.Label>
                                        <Form.Control type="text"
                                            value={paystack_bank_integration?.settlement_bank}
                                            disabled
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Bank name</Form.Label>
                                        <Form.Control type="text"
                                            value={paystack_bank_integration?.account_number}
                                            disabled
                                        />
                                    </Form.Group>
                                </div>
                            </div>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>

})
