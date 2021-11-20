
import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx"
import { User, UserApi } from "../api/api"
import firebase from "firebase/app"
import { signInWithEmailAndPassword, getAuth, User as FirebaseUser } from "firebase/auth"
import { createContext, useContext } from "react";
import { AppUserAPI, CUSTOM_API, setUserAuthToken, } from "../configure/global_variables";
import toast, { Toaster } from 'react-hot-toast';


const defaultUser = new UserApi();

class UserManager {

    user?: User;
    fbUser: FirebaseUser | null = null;
    userAuthToken: string | null = null;
    canSignin: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

    // load = async () => {
    //     if (localStorage.getItem("fyc-app-auth-token") != null) {
    //         this.loadToken(localStorage.getItem("fyc-app-auth-token") ?? "");
    //         return
    //     }
    //     // allow signin
    //     runInAction(() => {
    //         this.canSignin = true;
    //     })
    // }

    loadToken(token: string) {
        setUserAuthToken(token);
        this.loadUserProfile();
        runInAction(() => {
            this.userAuthToken = token;
            this.canSignin = false;
        })
    }

    loadUserProfile = async () => {
        console.log("loading profile...");
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
        console.log("before checking user")
        try {
            let myAuth = getAuth();
            let user = myAuth.currentUser;

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
                console.log("token goes here-", idToken)
            }
        } catch (e: any) {
            console.log(e.message);
        }
    }

    updateProp = (prop: string, value: any) => {

        runInAction(() => {
            // @ts-ignore
            this.user[prop] = value
        })
    }

    updateUser = async () => {
        let updateOb = {
            fullname: this.user?.fullname,
            bio: this.user?.bio,
            phone: this.user?.phone
        }
        CUSTOM_API.userAPI?.updateUser(updateOb).then(v => { })
    }

    siginInWithGoogle = async (email: string, password: string) => {

        localStorage.clear();
        
        let response = await signInWithEmailAndPassword(getAuth(), email, password).then(v => {
            this.checkSignedInUser();
        }).catch(v => {
            toast(v.message, {});
        });

    }

}

export const USER_MANAGER = new UserManager();

export const UserContext = createContext<UserManager>(
    USER_MANAGER,
);

export const useUserStore = (): UserManager => {
    return useContext<UserManager>(UserContext);
};