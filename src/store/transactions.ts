import { makeAutoObservable, observable } from "mobx";
import { Project } from "../api";

export class TaxonomiesManager{
    my_taxonomies: Project[];
    constructor(){
        this.my_taxonomies= [];
        makeAutoObservable(this, {
            my_taxonomies: observable
        })
    }

    load= ()=>{

    }

    update= (project: Project)=>{

    }
}