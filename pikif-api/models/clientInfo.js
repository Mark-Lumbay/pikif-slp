import Database from "../database/database.js";

class ClientModel {
  addInfo(data) {
    // Perform checks here before creating
    return Database.addClientInfo("clientInfo", data);
  }

  addHousing(data) {
    // Perform checks here before creating
    return Database.addClientHousing("clientHousing", data);
  }

  addFindings(data) {
    // Perform checks here before creating
    return Database.addClientFindings("clientFindings", data);
  }
}

export default new ClientModel();
