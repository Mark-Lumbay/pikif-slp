import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDaZyg6h9MnpjoEFmtgqguDMppo1DmLnx0",
  authDomain: "pikif-3470c.firebaseapp.com",
  projectId: "pikif-3470c",
  storageBucket: "pikif-3470c.appspot.com",
  messagingSenderId: "740425496813",
  appId: "1:740425496813:web:9efa2cd319d9d69fc2b4e4",
};

console.log(firebaseConfig);

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
