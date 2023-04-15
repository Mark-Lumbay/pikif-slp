<template>
  <div class="w-full h-full justify-center items-center flex">
    <div class="outline-2">
      <form class="" @submit.prevent="loginUser">
        <div class="mb-2 space-y-2">
          <label class="block font-semibold" for="email">Email</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            placeholder="Enter Email"
            v-model="email"
          />
        </div>

        <div class="mb-2 space-y-2">
          <label class="block font-semibold" for="email">Password</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            placeholder="Enter Password"
            v-model="password"
          />
        </div>

        <div class="mb-2 space-y-2 mt-4">
          <a href="#" class="text-xs underline">Forgot Password?</a>
        </div>

        <div class="mb-2 space-y-2 mt-8">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-all ease-in-out"
            @click.prevent="loginUser"
          >
            Login
          </button>
        </div>
      </form>
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
        console.log("You are logged in!");
      } catch {
        console.log("You were not able to login");
        console.log(email, password);
      }
    };

    return { loginUser, email, password };
  },
};
</script>
