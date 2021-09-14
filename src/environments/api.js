import axios from "axios";
const baseUrl = "https://vapi.vetroms.co.za/api/";
let config = {
  "Content-Type": "multipart/form-data",
  Accept: "application/json",
};

if (sessionStorage.getItem("token")) {
  config.authorization = `${sessionStorage.getItem("token")}`;
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
  config,
});

export default axiosInstance;
