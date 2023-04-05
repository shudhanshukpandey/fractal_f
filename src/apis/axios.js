import axios from "axios";

const localURL = "http://127.0.0.1:5020";

const instance = axios.create({
    baseURL: localURL,
    headers:{
        "Casper":"ghost"
    }
  });

  export default instance