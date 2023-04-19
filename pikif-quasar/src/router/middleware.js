import store from "../store";

export default function middleware(to, from, next) {
  const loggedIn = store.getters.getState;
  if (to.meta.requiresAuth && !loggedIn) {
    console.log("nope");
    next("/login");
  } else {
    console.log("passed");
    return next();
  }
}
