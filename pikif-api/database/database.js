import pkg from "firebase-admin";
const { firestore } = pkg;

class Database {
  async addClient(collectionName, data) {
    const result = await firestore().collection(collectionName).add(data);
    return result.id;
  }
}

export default new Database();
