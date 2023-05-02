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
    token: null,
    loggedIn: false,
  },

  getters: {
    getToken: (state) => {
      return state.token;
    },

    getState: (state) => {
      return state.user;
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setState(state, payload) {
      // state.user = payload;
      state.loggedIn = true;
    },

    setUserToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login(context, { email, password }) {
      try {
        auth.onAuthStateChanged((newUser) => {
          context.commit("setUser", newUser);
          console.log("New User Logged In!");
        });
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

    async logout(context) {
      const res = await signOut(auth);
      console.log(res);

      context.commit("setUser", null);
    },

    async checkToken({ state }) {
      try {
        const token = state.token;
        const result = await testCall(token);

        console.log(`Verified! ${result}`);
      } catch {
        console.log("Token Verification failure");
      }
    },
  },
});

export default store;
