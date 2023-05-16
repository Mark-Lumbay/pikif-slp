<template>
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
          <div class="flex flex-wrap -mx-3 w-full px-6 mt-6 mb-1">
            <div class="w-[50%]">
              <p
                class="block tracking-wide text-gray-700 font-bold mb-2 text-lg"
              >
                Personal Information
              </p>
            </div>

            <div class="flex justify-end items-center w-[50%]">
              <button
                class="text-primaryRed hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-4 border border-primaryRed rounded"
                v-if="!editMode"
              >
                Edit
              </button>

              <button
                class="text-primaryBtn hover:text-white hover:bg-btnGreen hover:border-transparent font-semibold py-2 px-4 border border-primaryBtn rounded"
                v-if="editMode"
              >
                Cancel
              </button>

              <button
                class="text-btnGreen hover:text-white hover:bg-btnGreen hover:border-transparent font-semibold py-2 px-4 border border-btnGreen rounded"
                v-if="editMode"
              >
                Save
              </button>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-4 px-6">
            <div class="w-full md:w-1/2 mb-6 md:mb-0">
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
              />
              <!-- <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> -->
            </div>
            <div class="w-full md:w-1/2 px-3">
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
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 w-full justify-start px-6 mt-6 mb-1">
            <div class="w-[50%]">
              <p
                class="block tracking-wide text-gray-700 font-bold mb-2 text-lg"
              >
                Credentials
              </p>
            </div>

            <div class="flex justify-end items-center w-[50%]">
              <button
                class="text-primaryRed hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-4 border border-primaryRed rounded"
                v-if="!editMode"
              >
                Edit
              </button>

              <button
                class="text-primaryBtn hover:text-white hover:bg-btnGreen hover:border-transparent font-semibold py-2 px-4 border border-primaryBtn rounded"
                v-if="editMode"
              >
                Cancel
              </button>

              <button
                class="text-btnGreen hover:text-white hover:bg-btnGreen hover:border-transparent font-semibold py-2 px-4 border border-btnGreen rounded"
                v-if="editMode"
              >
                Save
              </button>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-4 px-6">
            <div class="w-full md:w-1/2 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-femail"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-email"
                type="email"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const editMode = ref(false);
    const readOnly = ref(true);

    return {
      editMode,
      readOnly,
    };
  },
};
</script>
