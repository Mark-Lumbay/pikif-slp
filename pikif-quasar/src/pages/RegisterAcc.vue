<template>
  <div
    class="w-screen h-screen bg-slate-300 bg-opacity-10 flex flex-row justify-center items-center"
    v-if="confirmModal"
  >
    <div
      class="w-[65vh] h-[45vh] flex flex-col justify-center items-center bg-white rounded shadow p-4"
    >
      <div class="mb-4">
        <q-icon
          name="las la-check-circle"
          size="64px"
          class="text-green-500"
        ></q-icon>
      </div>

      <div class="mb-6 flex flex-col items-center justify-center space-y-2">
        <p class="text-xl font-bold">Success!</p>
        <p class="text-lg">Account has been created!</p>
      </div>

      <button
        class="rounded p-4 bg-green-500 text-white text-lg font-semibold hover:bg-green-400 transition-colors ease-in-out"
        @click.prevent="router.push('/login')"
      >
        Go to Login
      </button>
    </div>
  </div>
  <div class="w-full h-[100vh] grid grid-cols-12" v-if="!confirmModal">
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
              <label class="block font-semibold" for="email">Password </label>
              <div
                class="flex flex-row shadow appearance-none border rounded h-14 py-2 px-3 w-full"
              >
                <input
                  class="flex flex-1 h-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  :type="typeField"
                  placeholder="Enter Password"
                  v-model="password"
                />
                <q-icon
                  class="flex h-full justify-center items-center las la-eye cursor-pointer"
                  @click.prevent="toggleField"
                ></q-icon>
              </div>
            </div>

            <div
              class="mb-5 w-full bg-red-500 p-2 text-white font-semibold rounded"
              v-if="passModal"
              @click.prevent="clearErr"
            >
              <h3 class="text-sm">
                Password must be at least 8 characters long and must have
                uppercase, lowercase, and numbers.
              </h3>
            </div>

            <div class="mb-5 space-y-2">
              <label class="block font-semibold" for="email"
                >Confirm Password</label
              >
              <div
                class="flex flex-row shadow appearance-none border rounded h-14 py-2 px-3 w-full"
              >
                <input
                  class="flex flex-1 h-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  :type="typeField"
                  placeholder="Re-enter Password"
                  v-model="confirmPass"
                />
                <q-icon
                  class="flex h-full justify-center items-center las la-eye cursor-pointer"
                  @click.prevent="toggleField"
                ></q-icon>
              </div>
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

            <div
              class="mb-5 w-full bg-red-500 p-2 text-white font-semibold rounded"
              v-if="duplicateEmail"
              @click.prevent="closeDup"
            >
              <h3 class="text-sm">Email is already used</h3>
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
                @click.prevent="goLogin"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <AlertBox
    :show-alert="showAlert"
    @toggle-alert="toggleAlert"
    :message-obj="textDetails"
  ></AlertBox>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { register } from "../services/services";
import { auth } from "../firebase.js";
import { fetchSignInMethodsForEmail } from "@firebase/auth";
import AlertBox from "src/components/AlertBox.vue";

export default {
  components: { AlertBox },
  setup() {
    const router = useRouter();
    const store = useStore();

    const fName = ref("");
    const lName = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPass = ref("");

    const duplicateEmail = ref(false);

    const passErr = ref(false);
    const confirmModal = ref(false);
    const fieldsErr = ref(false);
    const err = ref(false);
    const passModal = ref(false);
    const errModals = [fieldsErr, err, passModal];
    const showAlert = ref(false);
    const passField = ref(0);

    const closeDup = () => (duplicateEmail.value = false);
    const toggleField = () => {
      if (passField.value === 0) {
        passField.value = 1;
        return;
      }
      passField.value = 0;
    };

    const typeField = computed(() => {
      if (passField.value === 0) {
        return "password";
      } else {
        return "text";
      }
    });

    const textDetails = ref({
      type: 1,
      header: "Error",
      bodyText: "Email is already in use",
    });

    const goLogin = () => router.push("/login");

    const toggleAlert = () => {
      showAlert.value = !showAlert.value;
    };

    const reg = async () => {
      if (!fName.value || !lName.value || !email.value || !password.value) {
        fieldsErr.value = true;
        return;
      }
      if (password.value != confirmPass.value) {
        err.value = true;
        return;
      }
      passCheck(password.value);
      if (passErr.value) {
        passModal.value = true;
        return;
      }
      const emailCheck = await fetchSignInMethodsForEmail(auth, email.value);
      if (emailCheck.length) {
        duplicateEmail.value = true;
        return;
      }
      const creds = {
        email: email.value,
        firstName: fName.value,
        lastName: lName.value,
        password: password.value,
        role: "Teacher",
      };

      const regReq = await register(creds);
      if (regReq.success) {
        confirmModal.value = true;
      } else {
      }
    };
    const clearErr = () => {
      for (const modal of errModals) {
        if (modal.value) modal.value = false;
      }
    };
    const passCheck = (pass) => {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*_]{8,}$/;
      const result = passwordRegex.test(pass);
      if (!result) {
        passErr.value = true;
      } else {
        passErr.value = false;
      }
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
      passModal,
      router,
      confirmModal,
      textDetails,
      showAlert,
      toggleAlert,
      goLogin,
      passField,
      typeField,
      toggleField,
      duplicateEmail,
      closeDup,
    };
  },
};
</script>
