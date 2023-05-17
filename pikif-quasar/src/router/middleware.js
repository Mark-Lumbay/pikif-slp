// import store from "../store";
// import { auth } from "../firebase.js";

// let user = store.getters.getState;

// function getAuthState() {
//   return new Promise((resolve) => {
//     auth.onAuthStateChanged((newUser) => {
//       resolve(newUser.getIdTokenResult());
//     });
//   });
// }

// async function runCheck() {
//   user = await getAuthState();
//   const userDetails = {
//     fName: user.claims.firstName,
//     lName: user.claims.lastName,
//     user: user,
//     email: user.claims.email,
//     uid: user.claims.user_id,
//   };

//   console.log(user);
//   store.dispatch("storeUser", userDetails);
// }

// export default async function middleware(to, from, next) {
//   await runCheck();
//   if (to.meta.requiresAuth && !user) {
//     return next("/login");
//   } else {
//     return next();
//   }
// }
import store from "../store";
import { auth } from "../firebase.js";

let user = store.state; // Use store.state instead of store.getters.getState

function getAuthState() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((newUser) => {
      resolve(newUser.getIdTokenResult());
    });
  });
}

async function runCheck() {
  const newUser = await getAuthState(); // Wait for the Promise to resolve
  user = newUser; // Update the user variable with the resolved value
  const userDetails = {
    fName: newUser.claims.firstName,
    lName: newUser.claims.lastName,
    user: newUser,
    email: newUser.claims.email,
    uid: newUser.claims.user_id,
  };

  console.log(newUser);
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
