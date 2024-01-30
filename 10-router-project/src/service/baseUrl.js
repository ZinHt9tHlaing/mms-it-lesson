import axios from "axios";
import { API_URL } from "../lib/constant";

export const baseUrl = axios.create({
    baseURL: API_URL,
})
