<template>
  <div class="w-screen h-screen flex flex-col">
    <LogIn></LogIn>
  </div>
</template>

<script>
import "./assets/tailwind.css";
// import NavBar from "./components/NavBar.vue";
// import HomePage from "./views/HomePage.vue";
import LogIn from "./views/LogIn.vue";

export default {
  name: "App",
  components: {
    // NavBar,
    LogIn,
  },
};
</script>

<style></style>
