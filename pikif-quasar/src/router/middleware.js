import store from "../store";
import { auth } from "../firebase.js";

let user = store.getters.getState;

function getAuthState() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((newUser) => {
      resolve(newUser.getIdTokenResult());
    });
  });
}

async function runCheck() {
  user = await getAuthState();
  const userDetails = {
    fName: user.claims.firstName,
    lName: user.claims.lastName,
    user: user,
    email: user.claims.email,
  };

  console.log(user.claims.email);
  store.dispatch("storeUser", userDetails);
}

export default async function middleware(to, from, next) {
  await runCheck();
  if (to.meta.requiresAuth && !user) {
    return next("/login");
  } else {
    return next();
  }
}
