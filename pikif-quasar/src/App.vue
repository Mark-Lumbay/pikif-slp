<template>
  <router-view />
</template>

<script setup>
import { getAuth } from "firebase/auth";
import store from "./store";

const auth = getAuth();

// auth.onAuthStateChanged((newUser) => {
//   console.log(newUser);
//   store.commit("setUser", newUser);
// });
</script>
