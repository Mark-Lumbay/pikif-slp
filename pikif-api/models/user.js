import Joi from "joi";
import pkg from "firebase-admin";
const { firestore, auth } = pkg;
import { auth2 } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

class userModel {
  async changeUserStatus(newStatus, id) {
    const updateData = {
      isActive: newStatus,
    };
    try {
      const user = firestore().collection("users").doc(id);
      await user.set(updateData, { merge: true });
      await auth().revokeRefreshTokens(id);

      return { success: true };
    } catch (err) {
      return { success: false, message: err };
    }
  }

  async getActiveStatus(id) {
    try {
      const userRef = firestore().collection("users").doc(id);
      const doc = await userRef.get();

      const isActive = doc.data().isActive;
      return { success: true, data: isActive };
    } catch (err) {
      return { success: false, message: err };
    }
  }

  async getAuditLog() {
    try {
      const docRef = firestore().collection("auditLog");
      const snapshot = await docRef.get();
      const logs = [];

      snapshot.forEach((log) => {
        const logEntry = log.data();
        const date = logEntry.timestamp.toDate().toString();
        logs.push({
          uid: logEntry.uid,
          name: logEntry.name,
          email: logEntry.email,
          action: logEntry.action,
          timestamp: date,
        });
      });

      return { status: true, data: logs };
    } catch (err) {
      return { status: false, message: `Server Error: ${err}` };
    }
  }

  async getAccessLvl() {
    try {
      const docRef = firestore().collection("users");
      const snapshot = await docRef.get();
      const users = [];

      snapshot.forEach((user) => {
        const userDetail = user.data();

        users.push({
          id: user.id,
          ...userDetail,
        });
      });

      return { status: true, data: users };
    } catch {}
  }

  async register(credentials) {
    const userSchema = Joi.object({
      email: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      role: Joi.string().required(),
    });

    const validate = userSchema.validate(credentials, {
      abortEarly: false,
    });

    if (validate.error) {
      return false;
    }

    const { email, password, firstName, lastName, role } = credentials;
    try {
      const user = await auth().createUser({
        email,
        password,
      });

      const uid = user.uid;
      let authorization = "";

      if (role === "Administrator") {
        authorization = "Admin";
      }
      if (role === "Social Development Worker") {
        authorization = "Full-Update";
      }
      if (role === "Teacher") {
        authorization = "Partial-Update";
      }
      await firestore().collection("users").doc(uid).set({
        firstName: firstName,
        lastName: lastName,
        auth: authorization,
        role: role,
        isActive: true,
      });

      await auth().setCustomUserClaims(uid, {
        firstName: firstName,
        lastName: lastName,
      });
      return true;
    } catch (err) {
      return { msg: err.message };
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

  async updateRole(newRole, id, accInfo) {
    let authorization = "";

    if (newRole === "Administrator") {
      authorization = "Admin";
    }
    if (newRole === "Social Development Worker") {
      authorization = "Full-Update";
    }
    if (newRole === "Teacher") {
      authorization = "Partial-Update";
    }

    const update = {
      role: newRole,
      auth: authorization,
    };
    try {
      const accRef = firestore().collection("users").doc(id);
      accRef.set(update, { merge: true });

      return { success: true };
    } catch (err) {
      return { success: false, message: err };
    }
  }
}

export default new userModel();
