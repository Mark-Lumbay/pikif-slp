import Database from "../database/database.js";

class ClientFindings {
  addInfo(data) {
    // Perform checks here before creating
    return Database.addClientInfo("clientInfo", data);
  }
}

export default new ClientModel();
