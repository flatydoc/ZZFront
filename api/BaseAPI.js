import axios from "axios";

export default class BaseApi {
  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
