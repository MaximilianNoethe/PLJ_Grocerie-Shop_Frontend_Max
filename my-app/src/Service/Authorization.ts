import {AxiosInstance} from "axios";
import {defaultInstance} from "./Api.ts";

export type loginRequest = {
    userName: string;
    password: string;
}

const LoginService = (api: AxiosInstance = defaultInstance) => ({
    login: async (param: loginRequest) => {
        const answer = await api.post("login",param);
        console.log(answer);
        localStorage.setItem("accessToken", answer.data.accessToken);

        return answer;
    },
    logout: () => clearAuthTokens(),

});

function clearAuthTokens() {
    throw new Error("Function not implemented.")
}

export default LoginService;