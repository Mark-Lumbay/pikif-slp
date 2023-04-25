import store from "../store";

export default function middleware(to, from, next) {
  const loggedIn = store.getters.getState;
  if (to.meta.requiresAuth && !loggedIn) {
    next("/login");
  } else {
    return next();
  }
}
