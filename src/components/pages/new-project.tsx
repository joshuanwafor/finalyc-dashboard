
import { ListAreaTemplate } from "../templates/listareatemplate"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Project } from "../../api"
import React from "react"
import { useHistory } from "react-router"
import { useProjectStore } from "../../store/projects"
import toast from "react-hot-toast"
import { uploadFile } from "../../services/storage"
export const NewProjectScreen = () => {
    let [file, updateFile]= React.useState<File| null>(null)

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
                                <option value="hnd">HND</option>
                                <option value="bsc">BSC</option>
                                <option value="msc">MSC</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Package</Form.Label>
                            <Form.Control type="file" size="lg"
                            accept=".zip,.rar,.7zip"
                            id="file-holder"
                            required
                                onChange={(event) => {
                                    const  filelist= window.document.getElementById("file-holder");
                                    // @ts-ignore
                                    updateFile(filelist.files[0])
                                }} />
                            <Form.Text className="text-muted">
                                Project description
                            </Form.Text>
                        </Form.Group>

                        <Button className="btn-lg w-100" onClick={async () => {
                            if(file==null){
                                toast("Select project package");
                                return;
                            }

                            toast("Uploading package....");
                            let link=await  uploadFile(file);
                            updateProject({
                                ...project, 
                                resource_url: link
                            })
                            add(project).then(v => {
                                history.push("/projects/" + v?.id);
                            });

                        }}>Submit </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </ListAreaTemplate>
}

