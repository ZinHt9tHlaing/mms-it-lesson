import axios from "axios";
import { API_ENDPOINT } from "../lib/constant";

export const api = axios.create({
  baseURL: API_ENDPOINT,
});
