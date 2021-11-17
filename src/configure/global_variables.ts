import { ProjectApi, UserApi, DefaultApi, } from "../api/api"


let config: { isJsonMime: () => boolean, basePath?: string } = { isJsonMime: () => true };

if (process.env.NODE_ENV == "production") {
    config.basePath = "https://tollgator-backend.herokuapp.com/rest";
}

export let CUSTOM_API: {
    projectAPI?: ProjectApi
    defaultAPI?: DefaultApi,
    userAPI?: UserApi
} = {};

export let USER_AUTH_TOKEN = localStorage.getItem("tollgator-user-auth-token");

export let AppProjectApi: ProjectApi;
export let AppDefaultAPI: DefaultApi;
export let AppUserAPI: UserApi = new UserApi(config);





export function setUserAuthToken(token: string) {
    alert("setting token")
    let config: { "apiKey": string, isJsonMime: () => boolean, basePath?: string } = { apiKey: token, isJsonMime: () => true };

    if (process.env.NODE_ENV == "production") {
        config.basePath = "https://finalyc.herokuapp.com/rest";
    }


    CUSTOM_API.defaultAPI = new DefaultApi(config);
    CUSTOM_API.projectAPI = new ProjectApi(config)
    CUSTOM_API.userAPI = new UserApi(config)
    
    AppProjectApi = new ProjectApi(config)
    AppUserAPI = new UserApi(config)
    AppDefaultAPI = new DefaultApi(config);
}