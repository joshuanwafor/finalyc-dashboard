
import { ListAreaTemplate } from "../templates/listareatemplate"
import { Accordion, Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { observer } from "mobx-react"
import { useProjectStore } from "../../store/projects"
import { useParams } from "react-router-dom"
import React from "react";
import { Project } from "../../api"
import Editor from "rich-markdown-editor"
import Select from 'react-select'
import { useTaxonomies } from "../../store/taxonomies"

export const UpdateProjectScreen = observer(() => {
    let params = useParams<{ projectID: string }>()
    let { my_projects, load, update } = useProjectStore();
    let taxonomiesStore = useTaxonomies();
    let project: Project = {};

    project = my_projects.find((item) => item.id == params.projectID) ?? {};

    React.useEffect(() => {
        load();
        taxonomiesStore.load();
    }, []);

    if (project.id == undefined) {
        return <div>Error occured</div>
    }

    let taxonomiesOptions = taxonomiesStore.taxonomies.slice().map(v => {
        return { label: v.name, value: v.id }
    });

    let taxonomiesValue = taxonomiesOptions.filter(v => {
        let index = project.categories?.slice()?.findIndex((d=>d== v.value));
        if (index == -1) {
            return false;
        } else {
            return true;
        }
    })

    return <Container>
        <div className="p-3">
            <h4>Project details</h4>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Basic info</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Project title</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                value={project?.title}
                                onChange={(e) => {
                                    project.title = e.target.value
                                }} />
                            <Form.Text className="text-muted" >

                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Project description</Form.Label>
                            <Form.Control type="text" placeholder="Description"
                                as="textarea"
                                value={project?.description}
                                onChange={(e) => {
                                    project.description = e.target.value
                                }} />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Classification</Accordion.Header>
                    <Accordion.Body>

                        <Form.Group className="mb-3" >
                            <Form.Label>Institution</Form.Label>
                            <Form.Select aria-label="Default select example"
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
                        <Form.Label>Categories</Form.Label>
                        <Select
                            options={taxonomiesOptions}
                            isMulti
                            value={taxonomiesValue}
                            onChange={v => {
                                console.log(v);
                                project.categories = v.map(v => v.value);
                            }}
                        />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Project work</Accordion.Header>
                    <Accordion.Body>
                        <div className={"p-3 px-1"}>
                            <h6>Project Body</h6>
                            <Editor defaultValue={project.body} onChange={(valG) => {
                                let value = valG();
                                project.body = value;
                            }} />

                        </div>


                        <Row>
                            <Form.Group className="mb-3" as={Col}>
                                <Form.Label>Status</Form.Label>
                                <Form.Select aria-label="Default select example"
                                    onChange={(event) => {
                                        project.status = event.target.value

                                    }}
                                    value={project.status}>
                                    <option>Project status</option>
                                    <option value="processing">Processing</option>
                                    <option value="completed">Completed</option>
                                    <option value="muted">Muted</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col}>
                                <Form.Label>Chapters</Form.Label>
                                <Form.Select aria-label="Default select example"
                                    onChange={(event) => {
                                        project.chapters_count = parseInt(event.target.value)
                                    }}
                                    value={project.chapters_count}>
                                    <option>No. Chapters</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col}>
                                <Form.Label>Pages</Form.Label>
                                <Form.Control type="textarea" placeholder="5"
                                    onChange={(e) => {
                                        project.pages_count = parseInt(e.target.value)
                                    }} />
                            </Form.Group>
                        </Row>
                        <Row className="align-items-center my-3">
                            <Form.Group >
                                <Form.Check
                                    inline
                                    label="Has Abstract"
                                    name="group1"
                                    checked={project.has_abstract}
                                    onChange={(event) => {
                                        project.has_abstract = event.target.checked
                                    }}
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Check
                                    inline
                                    label="Has Questionaire"
                                    name="group1"
                                    checked={project.has_questionnaire}
                                    onChange={(event) => {
                                        project.has_questionnaire = event.target.checked
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Purchase amount</Form.Label>
                            <Form.Control type="number" placeholder="Project Work"
                                value={project.price}
                                onChange={(e) => {
                                    project.price = parseFloat(e.target.value)
                                }}
                            />
                    
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Form>
                <Row>
                    <Col>
                        <Button className="btn-lg w-100 w-md-50 my-3" onClick={() => {
                            update({ ...project })
                        }}>Submit </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </Container>
})

