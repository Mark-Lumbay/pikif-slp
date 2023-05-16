import Joi from "joi";
import pkg from "firebase-admin";
const { firestore, auth } = pkg;
import { auth2 } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

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

    if (validate.error) {
      console.log(validate.error.details[0].message);
      return false;
    }
    const { email, password, firstName, lastName, authorization } = credentials;
    try {
      const user = await auth().createUser({
        email,
        password,
      });

      const uid = user.uid;
      await firestore()
        .collection("users")
        .doc(uid)
        .set({ firstName: firstName, lastName: lastName, auth: authorization });

      await auth().setCustomUserClaims(uid, {
        firstName: firstName,
        lastName: lastName,
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

  async getUserDetails(id) {
    try {
      const details = await auth().getUser(id);
      return details;
    } catch (err) {
      return { success: false, message: `Internal server error ${err}` };
    }
  }

  async updateUserDetails(data, id) {
    try {
      const res = await auth().setCustomUserClaims(id, data);
      return res;
    } catch (err) {
      return { success: false, message: `Internal server error 2 ${err}` };
    }
  }

  async updateUserEmail(email, id) {
    const { newEmail, currEmail } = email;
    try {
      // Check if email is correct
      const userRecord = await auth().getUser(id);
      const currentEmail = userRecord.email;

      if (currentEmail !== currEmail) {
        return { success: false, message: "Email Mismatch" };
      }

      const res = await auth().updateUser(id, { email: newEmail });
      console.log(res);
      return { success: true, data: res };
    } catch (err) {
      return { success: false, message: err };
    }
  }

  async updateUserPass(pass, id) {
    const { oldPass, newPass } = pass;

    try {
      const user = await auth().getUser(id);
      const email = user.email;

      const result = await signInWithEmailAndPassword(auth2, email, oldPass);
      if (!result) return { success: false };

      await auth().revokeRefreshTokens(id);
      await auth().updateUser(id, { password: newPass });

      return { success: true };
    } catch (err) {
      return { success: false, message: err };
    }
  }

  async getUserAuth(id) {
    try {
      const userRef = firestore().collection("users").doc(id);
      const userData = await userRef.get();
      const userAuth = userData.data();
      return { success: true, data: userAuth };
    } catch (err) {
      return { success: false, message: err };
    }
  }
}

export default new userModel();
