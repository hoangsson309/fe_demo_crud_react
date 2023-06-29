import axios from "axios";
import AppConfig from "./app.config";

const request = axios.create({
    baseURL: AppConfig.apiUrl,
});

export default request;