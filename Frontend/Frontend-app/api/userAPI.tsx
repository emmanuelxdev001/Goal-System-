import axios from "axios";

const url: string = "http://localhost:2299/api";

export const createAccount = () => {
    return axios.post(`${url}/register-user`).then((res) => {
        return res.data;
    });
};

export const loginAccount = () => {
    return axios.post(`${url}/login-user`).then((res) => {
        return res.data;
    });
};

