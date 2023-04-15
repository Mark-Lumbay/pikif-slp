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
    });

    const validate = userSchema.validate(credentials, {
      abortEarly: false,
    });

    if (validate.error) return false;
    const { email, password, firstName, lastName } = credentials;
    try {
      await auth().createUser({
        email,
        password,
        firstName,
        lastName,
      });
      return true;
    } catch {
      return false;
    }
  }
}

export default new userModel();
