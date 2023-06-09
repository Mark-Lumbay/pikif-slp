import { createStore } from "vuex";
import { auth } from "../firebase.js";
import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getUserAuth, getUserStatus } from "src/services/services.js";

const store = createStore({
  state: {
    user: null,
    fName: null,
    lName: null,
    auth: null,
    token: null,
    email: null,
    uid: null,
    isActive: null,
    authError: false,
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

    getActiveStatus: (state) => {
      return state.isActive;
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

    getAuthLevel: (state) => {
      return state.auth;
    },

    getOneUser: (state) => {
      const data = state.studentData;
      const info = data.find((item) => item.id === id);
      return info;
    },

    getAuthErr: (state) => {
      return state.authError;
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
        state.isActive = details.isActive;
      } else {
        state.user = details;
        state.fName = details;
        state.lName = details;
        state.email = details;
        state.uid = details;
        state.isActive = details;
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

    setAuthErr(state) {
      state.authError = true;
    },

    setUserActive(state, status) {
      state.isActive = status;
    },

    removeUserToken(state) {
      state.token = null;
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

          context.commit("setUserToken", token);
          let status = await getUserStatus(response.user.uid);

          while (status === null) {
            status = await getUserStatus(response.user.uid);
          }
          if (!status.data) return { status: true, active: false };

          const authLevel = await getUserAuth(response.user.uid);

          context.commit("setUserActive", status.data);
          context.commit("setAuth", authLevel.data.auth);

          return { status: true, active: true };
        }
      } catch {
        return { status: false, active: true };
      }
    },

    async storeUserToken(context, token) {
      context.commit("setUserToken", token);
    },

    async revokeToken(context) {
      context.commit("removeUserToken");
    },

    async storeUser(context, details) {
      context.commit("setUser", details);
    },

    setAuthErr(context) {
      context.commit("setAuthErr");
    },

    storeData(context, data) {
      context.commit("setUserData", data);
    },

    storeIndivData(context, data) {
      context.commit("setIndivData", data);
    },

    storeAuthLevel(context, level) {
      store.commit("setAuth", level);
    },

    getClientInfo(context, id) {
      const data = this.getters.getData;
      const info = data.find((item) => item.id === id);
      return info;
    },

    getYourAuth(context, id) {
      const auth_level = this.getters.getAuthLevel;
      return auth_level;
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
    store.commit("setUserToken", token);

    const authLevel = await getUserAuth(user.claims.user_id);
    const status = await getUserStatus(user.claims.user_id);
    const fName = user.claims.firstName;
    const lName = user.claims.lastName;
    const details = {
      newUser,
      fName,
      lName,
      email: user.claims.email,
      uid: user.claims.user_id,
      isActive: status.data,
    };

    store.commit("setUser", details);
    store.commit("setAuth", authLevel.data.auth);
  } catch (err) {
    return err;
  }
});

export default store;
