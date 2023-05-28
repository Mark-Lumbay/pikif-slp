import store from "../store";
import { auth } from "../firebase.js";
import { getUserAuth } from "src/services/services.js";
import { getUserStatus } from "../services/services";
import { useRouter } from "vue-router";

let user = store.getters.getState;
const router = useRouter();

function getAuthState() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((newUser) => {
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
    const status = await getUserStatus(user.claims.user_id);
    const token = user.token;
    store.dispatch("storeUserToken", token);

    const userDetails = {
      fName: user.claims.firstName,
      lName: user.claims.lastName,
      user: user,
      email: user.claims.email,
      uid: user.claims.user_id,
      isActive: status.data,
    };

    store.dispatch("storeUser", userDetails);

    const authLevel = await getUserAuth(userDetails.uid);
    store.dispatch("storeAuthLevel", authLevel.data.auth);
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
