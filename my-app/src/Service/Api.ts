import axios, {
    AxiosError,
    AxiosInstance,
    InternalAxiosRequestConfig,
} from "axios";

export const defaultInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
})

defaultInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
        if (localStorage.getItem("user") !== "") {

            config.auth = {username:"ADMIN",password:"ADMIN"};
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);