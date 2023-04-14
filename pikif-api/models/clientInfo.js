import Database from "../database/database.js";

class ClientModel {
  addInfo(info) {
    return Database.addClient("client", info);
  }
}

export default new ClientModel();
