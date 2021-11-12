
import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx"
import { Course, DefaultApi, CourseApi, User, UserApi } from "../api/api"
import firebase from "firebase/app"
import { createContext, useContext } from "react";
import { AppUserAPI, setUserAuthToken } from "../configure/global_variables";

const defaultUser = new UserApi();

class UserManager {
    user: User | null = null;
    fbUser: firebase.User | null = null;
    userAuthToken: string | null = null;
    canSignin: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    load = async () => {
        if (localStorage.getItem("tollgator-user-auth-token") != null) {
            this.loadToken(localStorage.getItem("tollgator-user-auth-token") ?? "");
            return
        }
        // allow signin
        runInAction(() => {
            this.canSignin = true;
        })
    }

    loadToken(token: string) {
        localStorage.setItem("tollgator-user-auth-token", token);
        runInAction(() => {
            this.userAuthToken = token;
        })
        setUserAuthToken(token);
        this.loadUserProfile();
    }

    loadUserProfile = async () => {
        console.log("loading profile...")
        try {
            let user = await AppUserAPI.getUser();
            console.log(user, " goes here");
            runInAction(() => {
                this.user = user.data;
            })
        } catch (e) {
            console.log("---error occured in loading user")
            console.log(e);
        }
    }

    checkSignedInUser = async () => {
        try {
            let user = firebase.auth().currentUser;
            console.log(user, "-- current");
            if (user == null) {
                runInAction(() => {
                    this.canSignin = true;
                })
                return;
            }

            // get id token to retrieve new token from backend
            let idToken = await user.getIdToken();
            let res = await defaultUser.getUserAuthToken({ token: idToken })
            // retrieve auth token from backend
            if (res.status == 200 && res.data.token != undefined) {
                this.loadToken(res.data.token);
            }
        } catch (e) {
            console.log(e);
        }
    }

    updateUser = async () => {

    }

    siginInWithGoogle = async () => {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        var provider = new firebase.auth.GoogleAuthProvider();
        let response = await firebase.auth().signInWithPopup(provider);
        this.checkSignedInUser();
    }

}

export const USER_MANAGER = new UserManager();

export const UserContext = createContext<UserManager>(
    USER_MANAGER,
);

export const useUserStore = (): UserManager => {
    return useContext<UserManager>(UserContext);
};