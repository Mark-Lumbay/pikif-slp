import Database from "../database/database.js";

class InformantModel {
  addInfo(data) {
    return Database.addInformantInfo("informantInfo", data);
  }
}

export default new InformantModel();
