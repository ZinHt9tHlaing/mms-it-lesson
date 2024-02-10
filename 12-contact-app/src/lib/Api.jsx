import axios from "axios";
import { API_ENDPOINT } from "./constant";

export const api = axios.create({
  baseURL: API_ENDPOINT,
});
