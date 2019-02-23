import axios from 'axios';
import store from "../../Store";
import {searchBookById} from "../actions/bookActions";

export function request(config) {
    return axios(config).then(
        response => {
            console.info("Axios请求服务端返回结果是：", response.data.data);
            const book = response.data.data;
            store.dispatch(searchBookById(book));
        }
    ).catch(
        error => {
            console.error(error);
        }
    );
}

export function requestWithAction(config, action) {
    return axios(config).then(
        response => {
            console.info("Axios请求服务端返回结果是：", response.data);
            const data = response.data.data; 
            store.dispatch(action(data));
        }
    ).catch(
        error => {
            console.error(error);
        }
    );
}