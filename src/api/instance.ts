import {DEV_VERSION} from '../config';
import axios from 'axios';

export const baseURL = !DEV_VERSION
    ? "http://localhost:7542/2.0/"
    : "https://neko-back.herokuapp.com/2.0/";

export const instance = axios.create({
    baseURL,
    withCredentials: true,
});
