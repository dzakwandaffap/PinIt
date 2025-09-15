import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3113/api", 
});

api.interceptors.request.use(
    (config) => { 
        const token = localStorage.getItem('token'); // pastikan key-nya sesuai
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
    
)
export default api;