<template>
  <div class="w-full h-[100vh] grid grid-cols-12">
    <div class="col-span-4 h-full">
      <div
        class="w-[35%] h-full bg-[url('src/assets/bg.png')] bg-center bg-no-repeat bg-cover fixed"
      ></div>
    </div>

    <div class="col-span-8 h-full">
      <div class="w-full h-[20%] flex">
        <div class="w-full h-full flex justify-end items-center px-6">
          <img src="../assets/logo_banner_2.jpg" />
        </div>
      </div>
      <div class="w-full px-52 mt-4">
        <div class="mb-12 w-full text-center">
          <h1 class="text-4xl font-semibold">Create an Account</h1>
        </div>
        <div class="outline-2 w-full flex justify-center">
          <form class="w-[80%]">
            <div
              class="mb-5 w-full bg-red-500 p-2 text-white font-semibold rounded"
              v-if="fieldsErr"
              @click.prevent="clearErr"
            >
              <h3 class="text-sm">Please fill all fields</h3>
            </div>

            <div class="mb-6 space-y-2">
              <label class="block font-semibold" for="email">First Name</label>
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="fName"
                placeholder="Enter First Name"
                v-model="fName"
              />
            </div>

            <div class="mb-5 space-y-2">
              <label class="block font-semibold" for="email">Last Name</label>
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="lName"
                type="text"
                placeholder="Enter Last Name"
                v-model="lName"
              />
            </div>

            <div class="mb-5 space-y-2">
              <label class="block font-semibold" for="email">Email</label>
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="text"
                placeholder="Enter Email"
                v-model="email"
              />
            </div>

            <div class="mb-5 space-y-2">
              <label class="block font-semibold" for="email">Password</label>
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="password"
                placeholder="Enter Password"
                v-model="password"
              />
            </div>

            <div class="mb-5 space-y-2">
              <label class="block font-semibold" for="email"
                >Confirm Password</label
              >
              <input
                class="shadow appearance-none border rounded h-14 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="password"
                placeholder="Re-enter Password"
                v-model="confirmPass"
              />
            </div>

            <div
              class="mb-5 w-full bg-red-500 p-2 text-white font-semibold rounded"
              v-if="err"
              @click.prevent="clearErr"
            >
              <h3 class="text-sm">
                Password does not match confirmation field
              </h3>
            </div>

            <div class="mb-2 space-y-2 mt-14">
              <button
                class="bg-primaryBtn mb-2 hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full h-14 transition-all ease-in-out"
                @click.prevent="reg"
              >
                Sign Up
              </button>

              <button
                class="bg-primaryBtn mb-2 hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full h-14 transition-all ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";
import { register } from "../services/services";
import { auth } from "../firebase.js";
import { fetchSignInMethodsForEmail } from "@firebase/auth";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const fName = ref("");
    const lName = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPass = ref("");
    const fieldsErr = ref(false);
    const err = ref(false);

    const reg = async () => {
      if (!fName.value || !lName.value || !email.value || !password.value) {
        fieldsErr.value = true;
        return;
      }

      if (password.value != confirmPass.value) {
        err.value = true;
        return;
      }

      const emailCheck = await fetchSignInMethodsForEmail(auth, email.value);
      if (emailCheck.length) {
        console.log("Email exists");
        return;
      }

      const creds = {
        email: email.value,
        firstName: fName.value,
        lastName: lName.value,
        password: password.value,
      };

      const regReq = await register(creds);
      if (regReq.success) {
        console.log("Success");
      } else {
        console.log(`Internal Server Error ${regReq.message}`);
      }
    };

    const clearErr = () => {
      const varName = fieldsErr.value ? fieldsErr : err;
      varName.value = false;
    };

    return {
      reg,
      fName,
      lName,
      email,
      password,
      confirmPass,
      fieldsErr,
      err,
      clearErr,
    };
  },
};
</script>
