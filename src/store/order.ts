import { makeAutoObservable, observable, runInAction } from "mobx";
import { createContext, useContext } from "react";
import { Project,Order } from "../api";
import { AppProjectApi, AppDefaultAPI, CUSTOM_API,  } from "../configure/global_variables";


export class _Manager {
    mytransactions: Order[];
    constructor() {
        this. mytransactions= [];
        makeAutoObservable(this, {
            mytransactions: observable
        })
    }

    load = () => {
       CUSTOM_API.userAPI?.getUserSales().then(data => {
            runInAction(() => {
                this.mytransactions = data.data;
                console.log(data.data);
            })
        })
    }
}


export const _MANAGER = new _Manager();

export const MContext = createContext<_Manager>(
    _MANAGER,
);

export const useOrders= (): _Manager=> {
    return useContext<_Manager>(MContext);
};