import pkg from "firebase-admin";
const { firestore } = pkg;

class Database {
  async addClientInfo(collectionName, data) {
    const result = await firestore().collection(collectionName).add(data);
    return result;
  }
}

export default new Database();
