import store from "../store";
import { auth } from "../firebase.js";

let user = store.getters.getState;

function getAuthState() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((newUser) => {
      resolve(newUser);
    });
  });
}

async function runCheck() {
  user = await getAuthState();
}

export default async function middleware(to, from, next) {
  await runCheck();
  if (to.meta.requiresAuth && !user) {
    return next("/login");
  } else {
    return next();
  }
}
