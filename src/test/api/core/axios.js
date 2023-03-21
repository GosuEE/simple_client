import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

instance.defaults.timeout = 2500;

export default instance;
