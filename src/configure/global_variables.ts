import { ProjectApi, UserApi, DefaultApi, } from "../api/api"


let config: { isJsonMime: () => boolean, basePath?: string, "apiKey"?: string, } = { isJsonMime: () => true,
     basePath: process.env.NODE_ENV == "production" ? "https://mypapers.herokuapp.com/rest" : "http://localhost:8000/rest" };


console.log(config, "api config");

export let CUSTOM_API: {
    projectAPI?: ProjectApi
    defaultAPI?: DefaultApi,
    userAPI?: UserApi
} = {};



export function setUserAuthToken(token: string) {
    config.apiKey = token;

    CUSTOM_API.defaultAPI = new DefaultApi(config);
    CUSTOM_API.projectAPI = new ProjectApi(config)
    CUSTOM_API.userAPI = new UserApi(config)

}