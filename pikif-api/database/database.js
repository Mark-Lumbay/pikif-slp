import pkg from "firebase-admin";
const { firestore } = pkg;

class Database {
  async addClientInfo(collectionName, data) {
    const result = await firestore().collection(collectionName).add(data);
    return result;
  }

  async addInformantInfo(collectionName, data) {
    const result = await firestore().collection(collectionName).add(data);
    return result;
  }

  async addClientHousing(collectionName, data) {
    const result = await firestore().collection(collectionName).add(data);
    return result.id;
  }
}

export default new Database();
