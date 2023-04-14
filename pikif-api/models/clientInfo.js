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
}

export default new ClientModel();
