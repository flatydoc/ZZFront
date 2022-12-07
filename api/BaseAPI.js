import axios from "axios";
import Cookie from "js-cookie";

export default class BaseApi {
  constructor() {
    let Cookies = Cookie.get();

    this.axios = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        Authorization: `Token ${Cookies.token}`,
        "Content-Type": "application/json",
      },
    });
  }
}
