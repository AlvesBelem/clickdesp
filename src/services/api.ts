import axios, { AxiosError } from "axios";

export function setupAPIClient(ctx = undefined) {

    const api = axios.create({
        baseURL: 'http://localhost:8080',
        // headers:{
        //     Authorization: `Bearer ${cookies['@clickdesp.token']}`
        // }
    })

    api.interceptors.response.use(response => {
        return response;
    })

    return api;
}