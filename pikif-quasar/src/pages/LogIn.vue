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

  <AlertBox
    :show-alert="inactiveAlert"
    @toggle-alert="toggleInactive"
    :message-obj="inactiveMsg"
  ></AlertBox>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { resetPass } from "../services/services";
import { auth } from "../firebase.js";
import ForgetPassword from "src/components/ForgetPassword.vue";
import store from "../store/index";
import AlertBox from "src/components/AlertBox.vue";

export default {
  components: { ForgetPassword, AlertBox },
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const router = useRouter();

    const incorrect = ref(false);
    const resetModal = ref(false);
    const authErr = ref(false);
    const passField = ref(0);

    const inactiveAlert = ref(false);
    const inactiveMsg = ref({
      type: 0,
      header: "Notice",
      bodyText:
        "Your account was deactivated. Please contact an administrator if you think this is a mistake.",
    });

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

    // onMounted(() => {
    //   authErr.value = store.getters.getAuthErr;
    //   console.log(authErr.value);
    // });

    watch(
      () => authErr.value,
      (auth) => {
        console.log(auth);
      }
    );

    const toggleInactive = () => (inactiveAlert.value = !inactiveAlert.value);
    const closeResetModal = () => (resetModal.value = false);
    const showResetModal = () => (resetModal.value = true);
    const loginUser = async () => {
      try {
        const loginReq = await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });

        if (loginReq.status) {
          console.log(loginReq);
          if (!loginReq.active) {
            console.log(loginReq.active);
            // inactiveAlert.value = true;
            return;
          } else {
            router.push("/");
          }
        } else {
          incorrect.value = true;
        }
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
      inactiveAlert,
      toggleInactive,
      inactiveMsg,
      toggleField,
      typeField,
    };
  },
};
</script>
