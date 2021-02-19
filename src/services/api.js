import axios from "axios";

const api = axios.create({
    baseURL: "https://602f54444410730017c51c77.mockapi.io/",
  });
  
  export default api;