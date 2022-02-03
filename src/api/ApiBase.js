const axios = require("axios");

const Client = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    //'Authorization': 'token'
  },
});

export default Client;
