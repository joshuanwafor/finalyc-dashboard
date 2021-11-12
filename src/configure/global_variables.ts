import { CourseApi, CourseItemApi, UserApi, DefaultApi } from "../api/api"


let config : {isJsonMime:()=>boolean, basePath?:string}= {isJsonMime: () => true };

if(process.env.NODE_ENV=="production"){
    config.basePath="https://tollgator-backend.herokuapp.com/rest";
}

export let USER_AUTH_TOKEN = localStorage.getItem("tollgator-user-auth-token");

export let AppCourseAPI: CourseApi;
export let AppDefaultAPI: DefaultApi;
export let AppCourseItemAPI: CourseItemApi;
export let AppUserAPI: UserApi= new UserApi(config);


export function setUserAuthToken(token: string) {

    let config : {"apiKey":string, isJsonMime:()=>boolean, basePath?:string}= { apiKey: token, isJsonMime: () => true };

    if(process.env.NODE_ENV=="production"){
        config.basePath="https://tollgator-backend.herokuapp.com/rest";
    }

    AppCourseAPI= new CourseApi(config)
    AppUserAPI= new UserApi(config)
    AppCourseItemAPI= new CourseItemApi(config);
    AppDefaultAPI= new DefaultApi(config);
}