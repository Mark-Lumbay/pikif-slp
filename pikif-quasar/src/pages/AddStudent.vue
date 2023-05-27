<template>
  <div
    class="fixed inset-0 left-0 top-0 z-[1055] bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full"
    v-if="duplicate"
  >
    <div class="flex w-full h-full justify-center items-center">
      <div
        class="relative mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
      >
        <div class="mt-3 text-center">
          <div
            class="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-primaryRed"
          >
            <q-icon
              name="las la-times-circle"
              size="48px"
              class="text-white"
            ></q-icon>
          </div>
          <h3 class="text-lg leading-6 font-medium text-gray-900 mt-4">
            Error
          </h3>
          <div class="px-7 py-3">
            <p class="text-sm text-gray-500">User already exists</p>
          </div>
          <div class="items-center px-4 py-3">
            <button
              class="px-4 py-2 bg-primaryRed text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-primaryRedHover focus:outline-none focus:ring-2 focus:ring-green-300"
              @click="closeErr"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-6 h-[94vh] flex items-center justify-center">
    <div class="flex">
      <!-- Add here -->

      <!-- Ends here -->
      <div
        class="w-full flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white"
      >
        <q-toolbar v-if="currPage != 3">
          <q-breadcrumbs
            style="font-size: 16px"
            class="outline outline-1 px-4 py-2 rounded-full bg-primaryDark"
          >
            <template v-slot:separator>
              <q-icon
                size="1.5em"
                name="chevron_right"
                :class="'text-lightGray'"
              />
            </template>

            <q-breadcrumbs-el
              :class="
                currPage === 0 ? 'text-btnGreen font-semibold' : 'text-white'
              "
              class="transition-all ease-in-out"
            >
              <q-icon
                class="text-lg mr-2"
                size="24px"
                name="las la-user-plus"
              ></q-icon>
              Personal Information
            </q-breadcrumbs-el>

            <q-breadcrumbs-el
              class="transition-all ease-in-out"
              :class="
                currPage === 1 ? 'text-btnGreen font-semibold' : 'text-gray-300'
              "
            >
              <q-icon
                class="text-lg mr-2"
                size="24px"
                name="las la-user-friends"
              ></q-icon>
              Informant Information
            </q-breadcrumbs-el>

            <q-breadcrumbs-el
              class="transition-all ease-in-out"
              :class="
                currPage === 2 ? 'text-btnGreen font-semibold' : 'text-white'
              "
            >
              <q-icon
                class="text-lg mr-2"
                size="24px"
                name="lar la-chart-bar"
              ></q-icon>
              Findings
            </q-breadcrumbs-el>
          </q-breadcrumbs>
        </q-toolbar>
        <KeepAlive>
          <component
            :is="getCurrentComponent"
            @client-info-submit="saveClientInfo"
            v-if="currPage === 0"
          ></component>
        </KeepAlive>

        <KeepAlive>
          <component
            :is="getCurrentComponent"
            @informant-info-submit="saveInformantInfo"
            @go-back="prevPage"
            v-if="currPage === 1"
          ></component>
        </KeepAlive>

        <KeepAlive>
          <component
            :is="getCurrentComponent"
            @client-findings-submit="saveClientFindings"
            @go-back="prevPage"
            v-if="currPage === 2"
          ></component>
        </KeepAlive>
        <MessagePage
          :message="message"
          v-if="currPage === 3"
          @reset-page="resetPage"
        ></MessagePage>
      </div>
    </div>
  </div>
</template>

<script>
import AddClient from "src/components/AddClient.vue";
import AddFindings from "src/components/AddFindings.vue";
import AddInformant from "src/components/AddInformant.vue";
import MessagePage from "src/components/MessagePage.vue";

import { ref, reactive, computed } from "vue";
import { addStudent } from "../services/services";
import { useRouter } from "vue-router";
import { checkUserExists } from "../services/services";

export default {
  props: {
    clientInfo: {
      type: Object,
      required: false,
    },
  },
  components: {
    AddClient,
    AddFindings,
    AddInformant,
    MessagePage,
  },
  setup(props) {
    // Variables
    const router = useRouter();
    const duplicate = ref(false);
    console.log(props.clientInfo);

    const message = ref({
      messageType: "",
      messageBody: "",
    });

    const currPage = ref(0);
    const data = reactive({
      clientInfo: null,
      informantInfo: null,
      initialFindings: [],
    });

    // Functions
    const closeErr = () => {
      duplicate.value = false;
    };

    const nextPage = () => {
      currPage.value++;
    };

    const prevPage = () => {
      currPage.value--;
    };

    const resetPage = () => {
      router.go();
    };

    const saveClientInfo = async (info) => {
      data.clientInfo = info;
      const userData = {
        firstName: info.firstName,
        lastName: info.lastName,
      };

      const result = await checkUserExists(userData);
      if (result) {
        duplicate.value = true;
      } else {
        nextPage();
      }
      console.log(data);
    };

    const saveInformantInfo = (info) => {
      data.informantInfo = info;
      console.log(data);

      nextPage();
    };

    const saveClientFindings = (info) => {
      data.initialFindings.push(info);
      console.log(data);

      addStudentInfo();
    };

    const addStudentInfo = async () => {
      const res = await addStudent(data);
      if (res.success) {
        message.value.messageType = "success";
        message.value.messageBody = "Successfully added a student!";
        nextPage();
      } else {
        message.value.messageType = "failed";
        message.value.messageBody = `Operation failed ${res.message}`;
      }
    };

    const getCurrentComponent = computed(() => {
      switch (currPage.value) {
        case 0:
          return "AddClient";
        case 1:
          return "AddInformant";
        case 2:
          return "AddFindings";
        default:
          return null;
      }
    });

    return {
      currPage,
      nextPage,
      prevPage,
      saveClientInfo,
      saveInformantInfo,
      saveClientFindings,
      getCurrentComponent,
      message,
      resetPage,
      duplicate,
      closeErr,
    };
  },
};
</script>
