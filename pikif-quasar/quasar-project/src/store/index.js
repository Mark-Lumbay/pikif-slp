import { createStore } from "vuex";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { testCall } from "src/services/services.js";

const store = createStore({
  state: {
    user: null,
    token: null,
  },

  getters: {
    getToken: (state) => {
      return state.token;
    },
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    setUserToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        const token = await response.user.getIdToken(true);

        context.commit("setUserToken", token);
        context.commit("setUser", response.user);

        console.log(context.state.token);
      } else {
        throw new Error("login failed");
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
