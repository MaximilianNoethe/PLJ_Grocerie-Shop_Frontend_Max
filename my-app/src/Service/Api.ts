import axios, {
    AxiosError,
    AxiosInstance,
    InternalAxiosRequestConfig,
} from "axios";

export const defaultInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:80800',
})

defaultInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
        if (localStorage.getItem("accessToken") !== "") {
            config.headers.Authorization = `Basic ${localStorage.getItem(
                "accessToken"
            )}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);