import axios from "axios";
import { baseUrl } from "../config/config";

export const categoryApi = axios.create({
  baseURL: baseUrl + "/categories",
  headers: {
    "Content-Type": "application/json",
  },
});
