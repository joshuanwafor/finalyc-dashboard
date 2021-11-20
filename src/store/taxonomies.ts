import { makeAutoObservable, observable, runInAction } from "mobx";
import { createContext, useContext } from "react";
import { Project } from "../api";
import { AppProjectApi, AppDefaultAPI,CUSTOM_API } from "../configure/global_variables";



export class TaxonomyManager {
    taxonomies: any[];
    constructor() {
        this.taxonomies = [];
        makeAutoObservable(this, {
            taxonomies: observable
        })
    }

    load = () => {
        AppDefaultAPI.getTaxonomies().then(data => {
            runInAction(() => {
                this.taxonomies = data.data;
                console.log(data.data);
            })
        })
    }
}


export const _MANAGER = new TaxonomyManager();

export const MContext = createContext<TaxonomyManager>(
    _MANAGER,
);

export const useTaxonomies = (): TaxonomyManager => {
    return useContext<TaxonomyManager>(MContext);
};