import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";
export const axiosService = axios.create({
  baseURL,
  headers: {},
});


