<template>
  <div class="w-screen h-screen flex flex-col">
    <RegisterAcc></RegisterAcc>
  </div>
</template>

<script>
import "./assets/tailwind.css";
// import NavBar from "./components/NavBar.vue";
// import HomePage from "./views/HomePage.vue";
// import LogIn from "./views/LogIn.vue";
import RegisterAcc from "./views/RegisterAcc.vue";

export default {
  name: "App",
  components: {
    // NavBar,
    // LogIn,
    RegisterAcc,
  },
};
</script>

<style></style>
