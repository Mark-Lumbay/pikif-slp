<template>
  <NavBar></NavBar>
  <div class="w-screen h-screen flex flex-col"></div>
</template>

<script>
import "./assets/tailwind.css";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style></style>
