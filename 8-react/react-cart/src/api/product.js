import axios from "axios";
import { baseUrl } from "../config/config";

export const productApi = axios.create({
  baseURL: baseUrl + "/products",
  headers: {
    "Content-Type": "application/json",
  },
});
