<template>
  <div class="w-full h-full flex flex-row items-center justify-center">
    <div
      class="w-[55%] h-full bg-[url('../assets/bg.png')] bg-center bg-no-repeat bg-cover"
    ></div>

    <div class="w-full h-full">
      <div class="w-full h-[25%] flex">
        <div class="w-full h-full flex justify-end items-center px-6">
          <img src="../assets/logo_banner_2.jpg" />
        </div>
      </div>
      <div class="w-full px-52 py-12">
        <div class="mb-12 w-full text-center">
          <h1 class="text-4xl font-semibold">Welcome Back</h1>
        </div>
        <div class="outline-2 w-full flex justify-center">
          <form class="w-[80%]" @submit.prevent="loginUser">
            <div class="mb-6 space-y-2">
              <label class="block font-semibold" for="email">Email</label>
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Enter Email"
                v-model="email"
              />
            </div>

            <div class="mb-2 space-y-2">
              <label class="block font-semibold" for="email">Password</label>
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="password"
                placeholder="Enter Password"
                v-model="password"
              />
            </div>

            <div class="mb-2 space-y-2 mt-4 w-full text-right">
              <a href="#" class="text-s underline">Forgot Password?</a>
            </div>

            <div class="mb-2 space-y-2 mt-14">
              <button
                class="bg-primaryBtn mb-2 hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full h-14 transition-all ease-in-out"
                @click.prevent="loginUser"
              >
                Login
              </button>

              <button
                class="bg-primaryBtn mb-2 hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full h-14 transition-all ease-in-out"
                @click.prevent="test"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();

    const loginUser = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
      } catch {
        console.log("You were not able to login");
      }
    };

    const test = async () => {
      try {
        await store.dispatch("checkToken");
      } catch {
        console.log("Error in verification");
      }
    };

    return { loginUser, test, email, password };
  },
};
</script>
