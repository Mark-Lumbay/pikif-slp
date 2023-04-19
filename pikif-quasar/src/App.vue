<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import store from "./store";

const router = useRouter();
const loggedIn = store.getters.getState;

onMounted(() => {
  if (loggedIn) {
    router.push("/home");
  } else {
    router.push("/login");
  }
});
</script>
