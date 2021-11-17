
import { ListAreaTemplate } from "../templates/listareatemplate"
import { Button, Col, Form, Row } from "react-bootstrap"
import { observer } from "mobx-react"
import { useProjectStore } from "../../store/projects"
import { useParams } from "react-router-dom"
import React from "react";
import { Project } from "../../api"

export const UpdateProjectScreen = observer(() => {
    let params = useParams<{ projectID: string }>()
    let { my_projects, load, update } = useProjectStore();
    let project: Project = {};

    project = my_projects.find((item) => item.id == params.projectID) ?? {};

    React.useEffect(() => {
        load();
    }, [])

    if (project.id == undefined) {
        return <div>Error occured</div>
    }

    return <ListAreaTemplate title="New project" actions={<div><Button>Submit</Button></div>}>
        <div className="p-3">
            <Form>
                <Row>
                    <Col>
                        <h2 className="mb-2">Basic info</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Project title</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" size="lg"
                                value={project?.title}
                                onChange={(e) => {
                                    project.title = e.target.value
                                }} />
                            <Form.Text className="text-muted" >
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Project description</Form.Label>
                            <Form.Control type="text" placeholder="Description" size="lg"
                                value={project?.description}
                                onChange={(e) => {
                                    project.description = e.target.value
                                }} />
                            <Form.Text className="text-muted">
                                Description goes here
                            </Form.Text>
                        </Form.Group>

                        <h2 className="mt-2">Classification</h2>

                        <Form.Group className="mb-3" >
                            <Form.Label>Institution</Form.Label>
                            <Form.Select aria-label="Default select example" size="lg"
                                value={project.audience_type}
                                onChange={(e) => {
                                    project.audience_type = e.target.value
                                }}
                            >
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


                        <h2 className="mt-2">Project work</h2>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Summary of chapter 1</Form.Label>
                            <Form.Control type="textarea" placeholder="Summary" size="lg"
                                onChange={(e) => {
                                    project.body = e.target.value
                                }} />
                            <Form.Text className="text-muted" >
                                Project summary
                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full project work</Form.Label>
                            <Form.Control type="file" placeholder="Project Work" size="lg" />
                            <Form.Text className="text-muted" >
                               Project full package
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Purchase amount</Form.Label>
                            <Form.Control type="number" placeholder="Project Work" size="lg"
                             onChange={(e) => {
                                project.price = parseFloat(e.target.value)
                            }}  
                            />
                            <Form.Text className="text-muted">
                                Project price
                            </Form.Text>
                        </Form.Group>
                        <Button className="btn-lg w-100" onClick={()=>{
                          update({...project})
                        }}>Submit </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </ListAreaTemplate>
})

