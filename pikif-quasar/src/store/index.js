import { createStore } from "vuex";
import { auth } from "../firebase.js";
import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getUserAuth } from "src/services/services.js";

const store = createStore({
  state: {
    user: null,
    fName: null,
    lName: null,
    auth: null,
    token: null,
    email: null,
    uid: null,
    studentData: [],
    indivStudData: [],
  },

  getters: {
    getToken: (state) => {
      return state.token;
    },

    getState: (state) => {
      return state.user;
    },

    getFirstName: (state) => {
      return state.fName;
    },

    getUID: (state) => {
      return state.uid;
    },

    getBasicDetails: (state) => {
      const dataObj = {
        firstName: state.fName,
        lastName: state.lName,
        email: state.email,
        uid: state.uid,
      };
      return dataObj;
    },

    getData: (state) => {
      return state.studentData;
    },

    getOneUser: (state) => {
      const data = this.getters.getData;
      const info = data.find((item) => item.id === id);
      return info;
    },
  },

  mutations: {
    setUser(state, details) {
      if (details) {
        state.user = details.newUser;
        state.fName = details.fName;
        state.lName = details.lName;
        state.email = details.email;
        state.uid = details.uid;
      } else {
        state.user = details;
        state.fName = details;
        state.lName = details;
        state.email = details;
        state.uid = details;
      }
    },

    setUserToken(state, token) {
      state.token = token;
    },

    setUserData(state, info) {
      state.studentData = info;
    },

    setIndivData(state, info) {
      state.indivStudData = info;
    },

    setAuth(state, authLevel) {
      state.auth = authLevel;
    },
  },
  actions: {
    async login(context, { email, password }) {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (response) {
          const token = await response.user.getIdToken(true);
          const authLevel = await getUserAuth(response.user.uid);

          context.commit("setUserToken", token);
          context.commit("setAuth", authLevel.data.auth);

          return;
        } else {
          throw new Error("login failed");
        }
      } catch {
        throw new Error();
      }
    },

    async storeUser(context, details) {
      context.commit("setUser", details);
    },

    storeData(context, data) {
      context.commit("setUserData", data);
    },

    storeIndivData(context, data) {
      context.commit("setIndivData", data);
    },

    getClientInfo(context, id) {
      const data = this.getters.getData;
      const info = data.find((item) => item.id === id);
      return info;
    },

    async logout(context) {
      try {
        const res = await signOut(auth);
        context.commit("setUser", null);
      } catch (err) {
        return err;
      }
    },
  },
});

auth.onAuthStateChanged(async (newUser) => {
  try {
    const user = await newUser.getIdTokenResult();
    const token = await newUser.getIdToken(true);
    const authLevel = await getUserAuth(user.claims.user_id);

    const fName = user.claims.firstName;
    const lName = user.claims.lastName;

    const details = {
      newUser,
      fName,
      lName,
      email: user.claims.email,
      uid: user.claims.user_id,
    };

    store.commit("setUser", details);
    store.commit("setUserToken", token);
    store.commit("setAuth", authLevel.data.auth);
  } catch (err) {
    console.log(err);
    return err;
  }
});

export default store;
