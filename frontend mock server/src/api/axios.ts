import axios from "axios";

const axiosInsatnce = axios.create({
  baseURL: "http://localhost:5000/",
});

export default axiosInsatnce;
