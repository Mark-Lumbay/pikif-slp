import Joi from "joi";
import pkg from "firebase-admin";
const { firestore, auth } = pkg;

class userModel {
  async register(credentials) {
    const userSchema = Joi.object({
      email: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      authorization: Joi.string().required(),
    });

    const validate = userSchema.validate(credentials, {
      abortEarly: false,
    });

    if (validate.error) return false;
    const { email, password, firstName, lastName, authorization } = credentials;
    try {
      const user = await auth().createUser({
        email,
        password,
      });

      const uid = user.uid;
      await auth().setCustomUserClaims(uid, {
        firstName: firstName,
        lastName: lastName,
        authorization: authorization,
      });
      return true;
    } catch {
      return false;
    }
  }

  async addUserCreds(creds, uid) {
    try {
      await firestore().collection("users").doc(uid).set(creds);

      return true;
    } catch {
      return false;
    }
  }
}

export default new userModel();
