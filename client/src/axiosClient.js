import axios from "axios";

//const baseUrl = process.env.REACT_APP_URL;
const baseUrl = "http://localhost:3001/pokemon/"

const client = axios.create({
    baseURL: baseUrl,
    });

export default client
