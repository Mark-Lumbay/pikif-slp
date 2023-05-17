<template>
  <FormsModal
    :open-modal="openModal"
    @close-modal="closeModal"
    :modal-type="modalType"
    @update-email="updateEmail"
    @update-pass="updatePassword"
  ></FormsModal>

  <div
    class="w-[70%] flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white"
  >
    <div class="flex flex-row">
      <div class="w-full h-full">
        <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-6">
          <p class="block tracking-wide text-gray-700 font-bold mb-2 text-2xl">
            Account Settings
          </p>
        </div>

        <form>
          <div class="flex flex-wrap w-full px-6 mt-6 mb-1">
            <div class="w-[50%]">
              <p
                class="block tracking-wide text-gray-700 font-bold mb-2 text-lg"
              >
                Personal Information
              </p>
            </div>

            <div class="flex justify-end w-[50%] space-x-3">
              <button
                class="text-primaryRed hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-4 border border-primaryRed rounded"
                v-if="!editMode"
                @click.prevent="enableEdit"
              >
                Edit
              </button>

              <button
                class="text-primaryRed hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-4 border border-primaryRed rounded"
                v-if="editMode"
                @click.prevent="cancelEdit"
              >
                Cancel
              </button>

              <button
                class="text-btnGreen hover:text-white hover:bg-btnGreen hover:border-transparent font-semibold py-2 px-4 border border-btnGreen rounded"
                v-if="editMode"
                @click.prevent="updateBasicInfo"
              >
                Save
              </button>
            </div>
          </div>

          <div class="flex w-full mb-4 px-6">
            <div class="w-full md:w-1/2 pr-4 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="First Name"
                v-model="getData.firstName"
                :disabled="!editMode"
              />
            </div>
            <div class="w-full md:w-1/2 pl-4">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
                v-model="getData.lastName"
                :disabled="!editMode"
              />
            </div>
          </div>

          <!-- Email and Password -->

          <div class="flex flex-wrap w-full px-6 mt-6 mb-1">
            <div class="w-full">
              <p
                class="block tracking-wide text-gray-700 font-bold mb-2 text-lg"
              >
                Credentials
              </p>
            </div>
          </div>

          <div class="flex w-full mb-4 px-6">
            <div class="w-[50%] flex flex-row pr-4 mb-6 md:mb-0">
              <div class="flex flex-col w-[50%]">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-email"
                >
                  Email
                </label>
                <p>{{ getEmail }}</p>
              </div>
              <div class="flex justify-end w-[50%]">
                <button
                  class="text-primaryRed h-12 hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-6 border border-primaryRed rounded"
                  @click.prevent="showModal(1)"
                >
                  Change
                </button>
              </div>
            </div>

            <div class="w-[50%] flex flex-row pl-4 mb-6 md:mb-0">
              <div class="flex flex-col w-[50%]">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-email"
                >
                  Password
                </label>
              </div>
              <div class="flex justify-end w-[50%]">
                <button
                  class="text-primaryRed h-12 hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-6 border border-primaryRed rounded"
                  @click.prevent="showModal(2)"
                >
                  Change
                </button>
              </div>
            </div>

            <div
              class="mt-7 w-full p-2 text-white font-semibold rounded"
              :class="style"
              @click.prevent="clearBanner"
              v-if="bannerState"
            >
              <h3 class="text-sm">{{ bannerMsg }}</h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import FormsModal from "src/components/FormsModal.vue";
import {
  getUserDetails,
  updateUserDetails,
  updateUserEmail,
  updateUserPassword,
} from "../services/services";

export default {
  components: {
    FormsModal,
  },
  setup() {
    // Mode Variables
    const editMode = ref(false);
    const readOnly = ref(true);
    const openModal = ref(false);
    const formContents = ref({
      headerText: "",
      text1: "",
      text2: "",
      placeholder1: "",
      placeholder2: "",
    });

    // Vue variables
    const store = useStore();
    const router = useRouter();

    // User Variables
    const userEmail = ref("");
    const actualEmail = ref("");
    const tempFName = ref("");
    const tempLName = ref("");
    const tempAuth = ref("");
    const tempUid = ref("");
    const uid = ref("");
    const userData = ref({
      firstName: "",
      lastName: "",
      authorization: "read only",
    });

    // Other Variables
    const bannerMsg = ref("");
    const bannerState = ref(false);
    const bannerStyle = ref("");
    const modalType = ref(0);

    watch(
      [tempFName, tempLName, userEmail, tempUid],
      ([newFName, newLName, newEmail, newUid]) => {
        userData.value.firstName = newFName;
        userData.value.lastName = newLName;
        actualEmail.value = newEmail;
        uid.value = newUid;
      }
    );

    onMounted(async () => {
      const basicDetails = await store.getters.getBasicDetails;
      console.log(await store.getters.getState);

      tempFName.value = basicDetails.firstName;
      tempLName.value = basicDetails.lastName;
      tempAuth.value = basicDetails.auth;
      tempUid.value = basicDetails.uid;
      userEmail.value = basicDetails.email;
    });

    const getData = computed(() => {
      return userData.value;
    });

    const getEmail = computed(() => {
      return actualEmail.value;
    });

    const closeModal = () => {
      openModal.value = false;
    };
    const showModal = (type) => {
      modalType.value = type;
      openModal.value = true;
    };

    const enableEdit = () => (editMode.value = true);
    const cancelEdit = () => {
      editMode.value = false;
    };

    const clearBanner = () => (bannerState.value = false);
    const style = computed(() => {
      return bannerStyle.value;
    });

    const updateBasicInfo = async () => {
      if (userData.value.firstName != "" && userData.value.lastName != "") {
        console.log(uid.value);
        await updateUserDetails(userData.value, uid.value);
        cancelEdit();

        bannerMsg.value = "Update Completed";
        bannerState.value = true;
        bannerStyle.value = "bg-btnGreen";
      } else {
        cancelEdit();
        bannerMsg.value = "Invalid Input";
        bannerState.value = true;
        bannerStyle.value = "bg-primaryRed";
      }
    };

    const updateEmail = async (data) => {
      const result = await updateUserEmail(data, uid.value);
      if (!result.data.data.success) {
        bannerMsg.value = "Incorrect current email";
        bannerState.value = true;
        bannerStyle.value = "bg-primaryRed";
      } else {
        bannerMsg.value = "Email updated!";
        bannerState.value = true;
        bannerStyle.value = "bg-btnGreen";
      }
    };

    const updatePassword = async (data) => {
      const result = await updateUserPassword(data, uid.value);
      if (!result) {
        bannerMsg.value = "Error in updating password!";
        bannerState.value = true;
        bannerStyle.value = "bg-primaryRed";
      } else {
        bannerMsg.value = "Password! updated!";
        bannerState.value = true;
        bannerStyle.value = "bg-btnGreen";
      }
    };

    return {
      editMode,
      readOnly,
      FormsModal,
      openModal,
      closeModal,
      showModal,
      userData,
      enableEdit,
      cancelEdit,
      updateBasicInfo,
      bannerMsg,
      bannerState,
      clearBanner,
      style,
      formContents,
      modalType,
      updateEmail,
      updatePassword,
      getData,
      getEmail,
    };
  },
};
</script>
