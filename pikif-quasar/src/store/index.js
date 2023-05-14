import { createStore } from "vuex";
import { auth } from "../firebase.js";
import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { testCall } from "src/services/services.js";

const store = createStore({
  state: {
    user: null,
    fName: null,
    lName: null,
    token: null,
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
      state.user = details.newUser;
      state.fName = details.fName;
      state.lName = details.lName;
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
          context.commit("setState", response.user);

          return;
        } else {
          throw new Error("login failed");
        }
      } catch {
        throw new Error();
      }
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
      const res = await signOut(auth);
      console.log(res);

      context.commit("setUser", null);
    },
  },
});

auth.onAuthStateChanged(async (newUser) => {
  const user = await newUser.getIdTokenResult();
  const fName = user.claims.firstName;
  const lName = user.claims.lastName;

  const details = {
    newUser,
    fName,
    lName,
  };

  store.commit("setUser", details);
});

export default store;
