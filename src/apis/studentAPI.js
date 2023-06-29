import request from "../request";
import { CommonAPI } from "./commonAPI";
export class StudentAPI {
    static API_PATH = "student";

    static getAll = (pageNo) => {
        return request({
            method: "GET",
            url: `/${this.API_PATH}/${pageNo}`,
        });
    }

    static add  = (data) => {
        return request({
            method: "POST",
            url: `/${this.API_PATH}${CommonAPI.ADD}`,
            data: data,
            payload: data,
        });
    }
}