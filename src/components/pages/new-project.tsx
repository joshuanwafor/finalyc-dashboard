
import { ListAreaTemplate } from "../templates/listareatemplate"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Project } from "../../api"
import React from "react"
import { useHistory } from "react-router"
import { useProjectStore } from "../../store/projects"

export const NewProjectScreen = () => {

    let { add } = useProjectStore()

    let history = useHistory()
    let [project, updateProject] = React.useState<Project>({});


    return <ListAreaTemplate title="New project" actions={<div><Button>Submit</Button></div>}>
        <div className="p-3">
            <Form>
                <Row>
                    <Col>
                        <h2 className="mb-2">Basic info</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Project title</Form.Label>
                            <Form.Control type="email" placeholder="Title" size="lg"
                                value={project.title}
                                onChange={(event) => {
                                    updateProject({
                                        ...project,
                                        title: event.target.value
                                    })
                                }}
                            />
                            <Form.Text className="text-muted" >
                                Project title
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Project descripion</Form.Label>
                            <Form.Control type="email" placeholder="Description" size="lg"
                                value={project.description}
                                onChange={(event) => {
                                    updateProject({
                                        ...project,
                                        description: event.target.value
                                    })
                                }} />
                            <Form.Text className="text-muted">
                                Project description
                            </Form.Text>
                        </Form.Group>

                        <h2 className="mt-2">Classification</h2>

                        <Form.Group className="mb-3" >
                            <Form.Label>Institution  type</Form.Label>
                            <Form.Select aria-label="Default select example" size="lg"
                                value={project.audience_type}
                                onChange={(event) => {
                                    updateProject({
                                        ...project,
                                        audience_type: event.target.value
                                    })
                                }}>
                                <option>Institution type</option>
                                <option value="HND">HND</option>
                                <option value="BSC">BSC</option>
                                <option value="MSC">MSC</option>
                            </Form.Select>
                        </Form.Group>

                        {/* <Form.Group className="mb-3" >
                            <Form.Label>Programme</Form.Label>
                            <Form.Select aria-label="Default select example" size="lg">
                                <option>Institution type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group> */}

                        <Button className="btn-lg w-100" onClick={() => {
                            add(project).then(v => {
                                console.log(v)
                                history.push("/projects/" + v?.id);
                            });

                        }}>Submit </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </ListAreaTemplate>
}

