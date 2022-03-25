import axios from "axios";
//axiosを使って
export default axios.create({
  baseURL: "http://localhost:3000/api",
  //backendのURL(ここから通信受けますよー)
  headers: {
    "Content-type": "application/json"
  }
});