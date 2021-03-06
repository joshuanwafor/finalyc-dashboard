
import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx"
import { User, UserApi } from "../api/api"
import firebase from "firebase/app"
import { signInWithEmailAndPassword, getAuth, User as FirebaseUser, createUserWithEmailAndPassword } from "firebase/auth"
import { createContext, useContext } from "react";
import { CUSTOM_API, setUserAuthToken, } from "../configure/global_variables";
import toast, { Toaster } from 'react-hot-toast';

const host = process.env.NODE_ENV == "production" ? "https://mypapers.herokuapp.com/rest" : "http://localhost:8000/rest";


const defaultUser = new UserApi();

class UserManager {

    user?: User;
    fbUser: FirebaseUser | null = null;
    userAuthToken: string | null = null;
    canSignin: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

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
            let user = await CUSTOM_API.userAPI?.getUser();
            console.log(user, " goes here");
            runInAction(() => {
                this.user = user?.data;
            })
        } catch (e) {
            console.log("---error occured in loading user")
            console.log(e);
        }
    }

    checkSignedInUser = async () => {
        let myAuth = getAuth();
        let user = myAuth.currentUser;

        try {
            if (user == null) {
                runInAction(() => {
                    this.canSignin = true;
                })
                return;
            }
            // get id token to retrieve new token from backend
            let idToken = await user.getIdToken(true);
            console.table(idToken);
            console.log("my logintoke")
            let res = await fetchAuthUser(idToken);

            // retrieve auth token from backend
            if (res != undefined) {
                console.dir(res, "token goes here ohh")
                this.loadToken(res.token);
            }
        } catch (e: any) {
            console.log(e);
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
        CUSTOM_API.userAPI?.updateUser(updateOb).then(v => { }).then(v => {
            toast("Updated account successfully")
        })
    }


    siginUpWithGoogle = async (email: string, password: string) => {
        localStorage.clear();

        createUserWithEmailAndPassword(getAuth(), email, password).then(v => {
            this.checkSignedInUser();
        }).catch(v => {
            toast(v.message, {});
        });
    }

    siginInWithGoogle = async (email: string, password: string) => {

        localStorage.clear();

        signInWithEmailAndPassword(getAuth(), email, password).then(v => {
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


async function fetchAuthUser(token: string) {
    try {
        let res = await fetch(host + "/user/auth", {
            method: "post",
            body: JSON.stringify({ token: token }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        console.log(res);
        return await res.json()
    } catch (e) {
        throw e;
    }
}