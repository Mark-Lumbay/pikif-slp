<template>
  <div class="w-full h-[100vh] grid grid-cols-12">
    <div class="col-span-4 h-full">
      <div
        class="h-full bg-[url('src/assets/bg.png')] bg-center bg-no-repeat bg-cover"
      ></div>
    </div>

    <div class="col-span-8 h-full">
      <div class="w-full h-[20%] flex">
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

            <div
              class="mb-5 w-full bg-red-500 p-2 text-white font-semibold rounded"
              v-if="incorrect"
              @click.prevent="closeModal"
            >
              <h3 class="text-sm">Email or password is incorrect</h3>
            </div>

            <div class="mb-2 space-y-2 mt-4 w-full text-right">
              <a class="text-s underline" @click.prevent="showResetModal"
                >Forgot Password?</a
              >
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
                @click.prevent="router.push('/register')"
              >
                Sign Up
              </button>
            </div>

            <div
              class="mb-5 w-full bg-red-500 p-2 text-white font-semibold rounded"
              v-if="incorrect"
              @click.prevent="closeModal"
            >
              <h3 class="text-sm">
                Account with the same email already exists
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <ForgetPassword
    :open-modal="resetModal"
    @close-modal="closeResetModal"
    @reset-pass="forgetPass"
  ></ForgetPassword>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { resetPass } from "../services/services";
import { auth } from "../firebase.js";
import ForgetPassword from "src/components/ForgetPassword.vue";

export default {
  components: { ForgetPassword },
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const router = useRouter();

    const incorrect = ref(false);
    const resetModal = ref(false);

    const closeResetModal = () => (resetModal.value = false);
    const showResetModal = () => (resetModal.value = true);
    const loginUser = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        incorrect.value = true;
      }
    };

    const closeModal = () => {
      incorrect.value = false;
    };

    const forgetPass = async (email) => {
      try {
        await resetPass(email);
      } catch (err) {
        console.log(err.message);
      }
    };

    return {
      loginUser,
      email,
      password,
      router,
      incorrect,
      closeModal,
      forgetPass,
      closeResetModal,
      showResetModal,
      resetModal,
    };
  },
};
</script>
