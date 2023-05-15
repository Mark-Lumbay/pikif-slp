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

    try {
      const clientRef = firestore().collection(collectionName);
      const query = clientRef
        .where("clientInfo.firstName", "==", firstName)
        .where("clientInfo.lastName", "==", lastName);
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

  addInfo(data) {
    // Perform checks here before creating
    const clientInfoSchema = Joi.object({
      clientInfo: Joi.object({
        active: Joi.boolean().required(),
        interviewDate: Joi.string().required(),
        firstName: Joi.string().required(),
        middleName: Joi.string(),
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
        category: Joi.string().required(),
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
        educAttn: Joi.string().required(),
        assistance: Joi.string().required(),
        otherInc: Joi.string().required(),
        monthlyInc: Joi.string().required(),
        probs: Joi.object()
          .pattern(Joi.number().integer(), Joi.string())
          .required(),
      }).required(),
      initialFindings: Joi.array().items(
        Joi.object({
          date: Joi.string().required(),
          findings: Joi.string().required(),
        }).required()
      ),
    });

    const validate = clientInfoSchema.validate(data, {
      abortEarly: false,
    });

    if (validate.error) {
      console.log(validate.error.details[0].message);
      return false;
    }
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
  async updateFinding(data, id) {
    const findingID = firestore().collection("clientFindings");
    const query = findingID.where("personId", "==", id);
    try {
      const snapshot = await query.get();
      if (snapshot.empty) {
        return { status: false, message: "No Matching Documents" };
      }
      const user = snapshot.docs[0].data();
      console.log(user);
      const personId = snapshot.docs[0].id;
      console.log(personId);
      const docRef = firestore().collection("clientFindings").doc(personId);
      const result = await docRef.update(data);
      return result;
    } catch (error) {
      return { status: false, message: error.message };
    }
  }

  async updateClient(data, id) {
    try {
      const user = firestore().collection("clientInfo").doc(id);
      const userData = await user.get();

      const clientInfo = data.clientInfo || userData.data().clientInfo;
      const informantInfo = data.informantInfo || userData.data().informantInfo;
      const initialFindings =
        data.initialFindings || userData.data().initialFindings;

      if (
        clientInfo !== userData.data().clientInfo ||
        informantInfo !== userData.data().informantInfo ||
        initialFindings !== userData.data().initialFindings
      ) {
        await user.update({
          clientInfo,
          informantInfo,
          initialFindings,
        });
      }

      return { success: true };
    } catch (err) {
      return { success: false, message: `Error occured: ${err}` };
    }
  }

  async loadDashboard() {
    const query = firestore().collection("clientInfo");

    try {
      const snapshot = await query.get();
      const documents = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        // const name = `${data.clientInfo.firstName} ${data.clientInfo.middleName} ${data.clientInfo.lastName}`;
        documents.push({
          id: doc.id,
          ...data,
          // status: data.clientInfo.active,
          // fullName: name,
          // age: data.clientInfo.age,
          // sex: data.clientInfo.sex,
          // category: data.clientInfo.category,
          // educAttn: data.clientInfo.educAttn,
        });
      });
      return { status: true, data: documents };
    } catch (error) {
      return { status: false, message: "Internal Server Error" };
    }
  }

  async addClientFindings(id, newFindings) {
    const docId = id;
    try {
      const docRef = firestore().collection("clientInfo").doc(docId);
      const clientDoc = await docRef.get();
      const initialFindings = await clientDoc.data().initialFindings;

      const updatedFindings = [];
      updatedFindings.push(initialFindings);
      updatedFindings.push(newFindings);

      await docRef.update({
        initialFindings: updatedFindings,
      });

      return { success: true, message: "Data Added" };
    } catch (err) {
      return { success: false, message: "Error retrieving client info" };
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

  async toggleStatus(id) {
    const docRef = firestore().collection("clientInfo").doc(id);

    try {
      const doc = await docRef.get();
      if (!doc.exists) {
        res.status(404).send("Client not found");
        return;
      }

      // "true" to "active" and "false" to "inactive"
      const activeStatus = doc.data().clientInfo.active;
      const newActiveStatus = !activeStatus; // Toggle the value of the "active" field
      console.log(newActiveStatus);
      const updatePayload = {
        clientInfo: {
          active: newActiveStatus,
        },
      };

      await docRef.update(updatePayload);
      return;
    } catch (error) {
      console.error(error);
      return { status: false, message: "Internal Server Error" };
    }
  }
}

export default new ClientModel();
