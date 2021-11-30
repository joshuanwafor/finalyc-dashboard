import { makeAutoObservable, observable, runInAction } from "mobx";
import { createContext, useContext } from "react";
import { Project } from "../api";
import toast from "react-hot-toast"
import {  CUSTOM_API } from "../configure/global_variables";


export class ProjectsManager {
    my_projects: Project[];
    constructor() {
        this.my_projects = [];
        makeAutoObservable(this, {
            my_projects: observable
        })
    }

    load = () => {
        CUSTOM_API.projectAPI?.getProjects().then(data => {
            runInAction(() => {
                this.my_projects = data.data;
                console.log(data.data);
            })
        })
    }

    add = async (project: Project): Promise<Project | undefined> => {
        try {
            let res = await CUSTOM_API.projectAPI?.postProject(project);
            runInAction(() => {
                // @ts-ignore
                this.my_projects.push(res.data);
                toast("Added project resource successfully")
            })
              // @ts-ignore
            return res.data;
        } catch (e) {
            return undefined
        }


    }

    update = (project: Project) => {
        CUSTOM_API.projectAPI?.putProjectsProject(project.id ?? "", project).then(res => {
            console.log(res)
            runInAction(() => {
                let data = this.my_projects.find(v => v.id == project.id);
                data = { ...project };
            })
            toast("Updated project resource successfully")
        }).catch(val => {

        })
    }
}


export const PROJECT_MANAGER = new ProjectsManager();

export const ProjectContext = createContext<ProjectsManager>(
    PROJECT_MANAGER,
);

export const useProjectStore = (): ProjectsManager => {
    return useContext<ProjectsManager>(ProjectContext);
};