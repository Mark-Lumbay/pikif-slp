import Joi from "joi";
import pkg from "firebase-admin";
const { firestore, auth } = pkg;

class ClientModel {
  async addClientInfo(collectionName, data) {
    const result = await firestore().collection(collectionName).add(data);
    return result;
  }

  async getInfo(collectionName, data) {
    const { firstName, lastName } = data;

    const clientRef = firestore().collection(collectionName);
    const query = clientRef
      .where("clientInfo.firstName", "==", firstName)
      .where("clientInfo.lastName", "==", lastName);

    try {
      const snapshot = await query.get();

      if (snapshot.empty) {
        return { status: false, message: "No Matching Documents" };
      }

      const users = [];
      snapshot.forEach((doc) => {
        const userData = doc.data();
        users.push({
          id: doc.id,
          ...userData,
        });
      });
      return { status: true, result: users };
    } catch {
      return { status: false, message: "Internal Server Error" };
    }
  }
  async updateClientFindings(collectionName, data) {
     const result = await firestore().collection(collectionName).update(data);
     return result;
  }

  addInfo(data) {
    // Perform checks here before creating
    const clientInfoSchema = Joi.object({
      clientInfo: Joi.object({
        active: Joi.boolean().required(),
        interviewDate: Joi.string().required(),
        firstName: Joi.string().required(),
        middleName: Joi.string().required(),
        lastName: Joi.string().required(),
        status: Joi.string().required(),
        age: Joi.number().required(),
        sex: Joi.string().required(),
        address: Joi.string().required(),
        birthDate: Joi.string().required(),
        birthPlace: Joi.string().required(),
        religion: Joi.string().required(),
        contactNum: Joi.string().required(),
        educAttn: Joi.string().required(),
        categoryObj: Joi.array().required(),
        condition: Joi.string().required(),
        materials: Joi.object({
          roof: Joi.string().required(),
          walls: Joi.string().required(),
          floor: Joi.string().required(),
        }).required(),
        appliances: Joi.string().required(),
      }).required(),
      informantInfo: Joi.object({
        interviewDate: Joi.string().required(),
        firstName: Joi.string().required(),
        middleName: Joi.string().required(),
        lastName: Joi.string().required(),
        status: Joi.string().required(),
        age: Joi.number().required(),
        sex: Joi.string().required(),
        address: Joi.string().required(),
        birthDate: Joi.string().required(),
        birthPlace: Joi.string().required(),
        religion: Joi.string().required(),
        contactNum: Joi.string().required(),
        occupation: Joi.string().required(),
        income: Joi.object({
          type: Joi.string().required(),
          amount: Joi.string().required(),
        }).required(),
        employment: Joi.string().required(),
        employmentStat: Joi.string().required(),
        employerName: Joi.string().required(),
        workAdd: Joi.string().required(),
        assistance: Joi.string().required(),
        otherInc: Joi.string().required(),
        monthlyInc: Joi.string().required(),
        probs: Joi.string().required(),
      }).required(),
      initialFindings: Joi.object({
        findings: Joi.string().required(),
        date: Joi.string().required(),
      }).required(),
    });

    const validate = clientInfoSchema.validate(data, {
      abortEarly: false,
    });

    if (validate.error) return false;
    return this.addClientInfo("clientInfo", data);
  }

  getClientInfo(data) {
    const params = {
      firstName: data.firstName,
      lastName: data.lastName,
    };

    const searchSchema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    });

    const validate = searchSchema.validate(params);
    if (validate.error)
      return { status: false, message: "Search parameters incomplete/wrong" };

    return this.getInfo("clientInfo", params);
  }
  updateFinding(data) {
   const docRef = firestore().collection('clientFindings').doc(data);
   data = {
    date : data.date,
    findings : data.findings};
   docRef.update(data);
   console.log;
   return this.updateClientFindings;
  }

  async loadDashboard() {
    const query = firestore().collection("clientInfo");

    try {
      const snapshot = await query.get();
      const documents = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        documents.push({
          id: doc.id,
          firstName: data.clientInfo.firstName,
          middleName: data.clientInfo.middleName,
          lastName: data.clientInfo.lastName,
          age: data.clientInfo.age,
          sex: data.clientInfo.sex,
          category: data.clientInfo.category,
          educAttn: data.clientInfo.educAttn,
        });
      });
      return { status: true, data: documents };
    } catch (error) {
      return { status: false, message: "Internal Server Error" };
    }
  }

  async getSpecClient(id) {
    const docId = id;
    const docRef = firestore().collection("clientInfo").doc(docId);

    try {
      const doc = await docRef.get();
      if (!doc.exists) {
        return { status: false, message: "Data does not exist" };
      }

      const data = doc.data();
      return { status: true, data: data };
    } catch (error) {
      return { status: false, message: "Error retrieving client info" };
    }
  }
}

export default new ClientModel();
