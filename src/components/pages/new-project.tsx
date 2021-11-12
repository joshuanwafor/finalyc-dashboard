
import { ListAreaTemplate } from "../templates/listareatemplate"
import { Button, Col, Form, Row } from "react-bootstrap"

export const NewProjectScreen = () => {
    return <ListAreaTemplate title="New project" actions={<div><Button>Submit</Button></div>}>
        <div className="p-3">
            <Form>
                <Row>
                    <Col>
                        <h2 className="mb-2">Basic info</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Project title</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" size="lg" />
                            <Form.Text className="text-muted" >
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Project caption</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" size="lg" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Description</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" size="lg" />
                            <Form.Text className="text-muted" >
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <h2 className="mt-2">Classification</h2>

                        <Form.Group className="mb-3" >
                            <Form.Label>Institution</Form.Label>
                            <Form.Select aria-label="Default select example" size="lg">
                                <option>Institution type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Programme</Form.Label>
                            <Form.Select aria-label="Default select example" size="lg">
                                <option>Institution type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>


                        <h2 className="mt-2">Project work</h2>

                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Summary of chapter 1</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" size="lg" />
                            <Form.Text className="text-muted" >
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full project work</Form.Label>
                            <Form.Control type="file" placeholder="Project Work" size="lg" />
                            <Form.Text className="text-muted" >
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Purchase amount</Form.Label>
                            <Form.Control type="number" placeholder="Project Work" size="lg" />
                            <Form.Text className="text-muted" >
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button className="btn-lg w-100">Submit </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </ListAreaTemplate>
}

