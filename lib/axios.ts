import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import Storage from "./storage";


const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL || "https://your-api-domain.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ---- Optional token helper ----
async function attachToken(config: AxiosRequestConfig = {}) {
  const token = await Storage.get("token");
  if (token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return config;
}

// ---- Extend Axios with helper methods ----
const apiWithToken = {
  ...api,

  getWithToken: async (url: string, config?: AxiosRequestConfig) =>
    api.get(url, await attachToken(config)),

  postWithToken: async (url: string, data?: any, config?: AxiosRequestConfig) =>
    api.post(url, data, await attachToken(config)),

  putWithToken: async (url: string, data?: any, config?: AxiosRequestConfig) =>
    api.put(url, data, await attachToken(config)),

  deleteWithToken: async (url: string, config?: AxiosRequestConfig) =>
    api.delete(url, await attachToken(config)),
};

export default apiWithToken;


// Usage
// get
//  await api.get("/posts"); // without token
//  await api.getWithToken("/user/profile");  //with token

// Post

// await api.post("/login", {
//   email: "test@mail.com",
//   password: "123456",
// });    // without token 

// await api.postWithToken("/posts", {
//   title: "Hello",
//   body: "My post",
// }); // withtoken




