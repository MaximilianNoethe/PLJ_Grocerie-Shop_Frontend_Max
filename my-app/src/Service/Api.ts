import axios, {AxiosInstance} from "axios";

export const defaultInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:80800',
})