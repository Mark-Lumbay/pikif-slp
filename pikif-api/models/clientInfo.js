import Joi from "joi";
import pkg from "firebase-admin";
const { firestore, auth } = pkg;

class ClientModel {
  async addClientInfo(collectionName, data) {
    const result = await firestore().collection(collectionName).add(data);
    return result;
  }
  async getClientInfo(collectionName, data) {
    const getclientpls = firestore.collection('clientInfo');
    const result = await getclientpls.get(data);
    result.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
  })
   
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

  getClientInfo(data){
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
    return this.getClientInfo("clientInfo", data);
  }
}

export default new ClientModel();
