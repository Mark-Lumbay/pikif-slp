import store from "../store";
import { auth } from "../firebase.js";

let user = store.getters.getState;
auth.onAuthStateChanged((newUser) => {
  user = newUser;
});

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function middleware(to, from, next) {
  await delay();

  if (to.meta.requiresAuth && !user) {
    return next("/login");
  } else {
    return next();
  }
}
