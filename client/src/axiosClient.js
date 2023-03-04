import axios from "axios";

//const baseUrl = process.env.REACT_APP_URL;
const baseUrl = "https://backend-pi.up.railway.app/pokemon/"

const client = axios.create({
    baseURL: baseUrl,
    });

export default client
