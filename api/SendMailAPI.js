import BaseAPI from "./BaseAPI";

class SendMailAPI extends BaseAPI {
  send(data) {
    return this.axios.post("/mail/send", data);
  }
}

export default new SendMailAPI();
