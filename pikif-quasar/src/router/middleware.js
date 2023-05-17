import store from "../store";
import { auth } from "../firebase.js";
let user = store.getters.getState;

function getAuthState() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((newUser) => {
      console.log("CALLED");
      console.log(newUser);
      if (!newUser) {
        resolve(newUser);
      } else {
        resolve(newUser.getIdTokenResult());
      }
    });
  });
}

async function runCheck() {
  user = await getAuthState();
  if (!user) {
    user = await getAuthState();
  } else {
    const userDetails = {
      fName: user.claims.firstName,
      lName: user.claims.lastName,
      user: user,
      email: user.claims.email,
      uid: user.claims.user_id,
    };

    console.log(user);
    store.dispatch("storeUser", userDetails);
  }
}

export default async function middleware(to, from, next) {
  if (!to.meta.requiresAuth) {
    return next();
  } else {
    await runCheck();
    if (to.meta.requiresAuth && !user) {
      return next("/login");
    } else {
      return next();
    }
  }
}
