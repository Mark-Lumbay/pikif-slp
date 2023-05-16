<template>
  <div class="fixed inset-0 left-0 top-0 z-[1055] q-pa-md q-gutter-sm">
    <q-dialog>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="address"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

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

            <div class="flex justify-end w-[50%]">
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
                <p>lumbaymark@gmail.com</p>
              </div>
              <div class="flex justify-end w-[50%]">
                <button
                  class="text-primaryRed h-12 hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-6 border border-primaryRed rounded"
                  v-if="!editMode"
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
                  v-if="!editMode"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import store from "../store";

export default {
  setup() {
    const editMode = ref(false);
    const readOnly = ref(true);
    const userData = ref({
      firstName: "",
      lastName: "",
    });

    onMounted(() => {});

    return {
      editMode,
      readOnly,
    };
  },
};
</script>
