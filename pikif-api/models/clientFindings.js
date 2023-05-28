import Database from "../database/database.js";

class ClientFindings {
  addInfo(data) {
    // Perform checks here before creating
    return Database.addClientFindings("clientFindings", data);
  }
}

export default new ClientFindings();
