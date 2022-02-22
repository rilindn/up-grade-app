const axios = require("axios");

const token = localStorage.getItem("token");

const Client = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
});

export default Client;
