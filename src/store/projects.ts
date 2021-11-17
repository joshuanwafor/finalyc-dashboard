import { makeAutoObservable, observable, runInAction } from "mobx";
import { createContext, useContext } from "react";
import { Project } from "../api";
import { AppProjectApi } from "../configure/global_variables";


export class ProjectsManager {
    my_projects: Project[];
    constructor() {
        this.my_projects = [];
        makeAutoObservable(this, {
            my_projects: observable
        })
    }

    load = () => {
        AppProjectApi.getProjects().then(data => {
            runInAction(() => {
                this.my_projects = data.data;
                console.log(data.data);
            })
        })
    }

    add = async (project: Project): Promise<Project | undefined> => {
        try {
            let res = await AppProjectApi.postProject(project);
            runInAction(() => {
                this.my_projects.push(res.data)
            })
            return res.data;
        } catch (e) {
            return undefined
        }


    }

    update = (project: Project) => {
        AppProjectApi.putProjectsProject(project.id ?? "", project).then(res => {
            console.log(res)
            runInAction(() => {
                let data = this.my_projects.find(v => v.id == project.id);
                data = { ...project };
            })
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