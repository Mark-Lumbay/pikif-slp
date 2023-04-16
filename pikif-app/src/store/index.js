import { createStore } from "vuex";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const store = createStore({
  state: {
    user: null,
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
      } else {
        throw new Error("login failed");
      }
    },

    async logout(context) {
      await signOut(auth);

      context.commit("setUser", null);
    },
  },
});

export default store;
