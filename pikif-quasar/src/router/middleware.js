import store from "../store";
import { auth } from "../firebase.js";

let user = store.getters.getState;
auth.onAuthStateChanged((newUser) => {
  user = newUser;
  console.log("New User Logged In!");
});

export default async function middleware(to, from, next) {
  if (to.meta.requiresAuth && !user) {
    return next("/login");
  } else {
    console.log("YAWA KA");
    return next();
  }
}
