<template>
  <div>
    <div class="flex w-full mb-6"></div>
    <div class="flex flex-row w-[65vw] h-full">
      <div class="flex w-full mb-6" v-if="!addNewFindingsMode && iterateMode">
        <form
          v-for="(item, index) in clientFindingsInfo"
          :key="index"
          class="flex w-full"
        >
          <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-6">
            <p
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg"
            >
              Findings
            </p>
          </div>

          <!-- loop here -->
          <div class="w-full md:w-1/6 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              :for="'grid-date-' + index"
            >
              Date
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="date"
              :disabled="textField"
              id="'grid-date-' + index"
              v-model="clientFindingsInfo[index].date"
            />
          </div>

          <div class="flex w-full border-gray-300 rounded h-1/2 mt-8 px-3">
            <q-input
              class="flex-1 border py-2 px-4 text-lg"
              type="textarea"
              label="Enter Findings Here..."
              rows="4"
              v-model="clientFindingsInfo[index].findings"
              :disable="textField"
            ></q-input>
          </div>
        </form>
      </div>

      <!-- Non iterable divs -->
      <div class="flex w-full mb-6" v-if="!addNewFindingsMode && !iterateMode">
        <form class="flex w-full">
          <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-6">
            <p
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg"
            >
              Findings
            </p>
          </div>

          <!-- loop here -->
          <div class="w-full md:w-1/6 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              :for="'grid-date-' + index"
            >
              Date
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="date"
              :disabled="textField"
              v-model="newClientFindings.date"
            />
          </div>

          <div class="flex w-full border-gray-300 rounded h-1/2 mt-8 px-3">
            <q-input
              class="flex-1 border py-2 px-4 text-lg"
              type="textarea"
              label="Enter Findings Here..."
              rows="4"
              :disable="textField"
              v-model="newClientFindings.findings"
            ></q-input>
          </div>
        </form>
      </div>

      <div class="flex w-full justify-end space-x-4" v-if="!readOnly">
        <button
          class="bg-primaryRed mb-2 w-[12vw] hover:bg-primaryRedHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="backBtn"
        >
          Back
        </button>
        <button
          class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="submitClientFindings"
        >
          Next
        </button>
      </div>

      <div
        class="flex w-full mt-6 px-3"
        v-if="readOnly && !editMode && !addNewFindingsMode"
      >
        <div class="w-[50%] flex justify-start space-x-4 mt-6">
          <button
            flat
            label="Cancel"
            class="text-primaryRed h-12 hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-6 border border-primaryRed rounded"
            @click="exportPdf"
          >
            <q-icon name="las la-file-pdf" size="32px"></q-icon>
            Export as PDF
          </button>
          <button
            flat
            label="Cancel"
            class="text-btnGreen h-12 hover:text-white hover:bg-btnGreen hover:border-transparent font-semibold py-2 px-6 border border-btnGreen rounded"
            @click="epxortCsv"
          >
            <q-icon name="las la-file-csv" size="32px"></q-icon>
            Export as CSV
          </button>
        </div>

        <div class="flex w-[50%] justify-end">
          <button
            class="bg-primaryBtn mb-2 w-[12vw] hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
            @click.prevent="setupEditMode"
            :class="disableClass"
          >
            Edit
          </button>
        </div>
      </div>

      <div class="flex w-full mb-6" v-if="addNewFindingsMode">
        <form class="flex w-full">
          <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-6">
            <p
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg"
            >
              Add New Findings
            </p>
          </div>

          <!-- To Modify -->
          <div class="w-full md:w-1/6 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-date"
            >
              Date
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-date"
              type="date"
              v-model="newClientFindings.date"
            />
          </div>

          <div class="flex w-full border-gray-300 rounded h-1/2 mt-8 px-3">
            <q-input
              class="flex-1 border py-2 px-4 text-lg"
              type="textarea"
              label="Enter Findings Here..."
              rows="4"
              v-model="newClientFindings.findings"
            ></q-input>
          </div>
        </form>
      </div>

      <div
        class="flex w-full justify-end px-3"
        v-if="readOnly && !editMode && !addNewFindingsMode"
      >
        <button
          class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="setupAddNewFindings"
        >
          Add New Findings
        </button>
      </div>

      <div
        class="flex w-full justify-end space-x-4 px-3"
        v-if="addNewFindingsMode"
      >
        <button
          class="bg-primaryRed mb-2 w-[12vw] hover:bg-primaryRedHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="cancelNewFindings"
        >
          Cancel
        </button>
        <button
          class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="submitNewFindings"
        >
          Save New Findings
        </button>
      </div>

      <div class="flex w-full justify-end space-x-4 mt-4 px-3" v-if="editMode">
        <button
          class="bg-primaryRed mb-2 w-[12vw] hover:bg-primaryRedHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="setupCancelEdit"
        >
          Cancel
        </button>

        <button
          class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="submitClientFindings"
        >
          Update
        </button>
      </div>
      <div
        class="mb-5 w-full bg-red-500 p-2 text-white font-semibold rounded"
        @click.prevent="clearErr"
        v-if="lackingErr"
      >
        <h3 class="text-sm">Please fill all the fields</h3>
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
import { ref, defineEmits, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { getOneStudent } from "../services/services";
import store from "../store";
import AlertBox from "src/components/AlertBox.vue";

import jsPDF from "jspdf";
import { applyPlugin } from "jspdf-autotable";
applyPlugin(jsPDF);

export default {
  emits: [
    "clientFindingsSubmit",
    "goBack",
    "clientFindingsUpdate",
    "newClientFindings",
    "exportPdf",
    "exportCsv",
  ],
  props: {
    withProp: {
      type: Object,
      required: false,
    },
  },
  components: {
    AlertBox,
  },
  setup(props, { emit }) {
    const storeFunc = useStore();
    const route = useRoute();
    const lackingErr = ref(false);
    const readOnly = ref(false);
    const textField = ref(false);
    const editMode = ref(false);
    const updateMode = ref(false);
    const iterateMode = ref(false);
    const addNewFindingsMode = ref(false);
    const showAlert = ref(false);
    const authLevel = ref("");
    const exportObj = ref([]);
    const textDetails = ref({
      type: 0,
      header: "Notice",
      bodyText:
        "You lack the access previliges to perform this action. If you think that this is a mistake, please contact an administrator",
    });

    onMounted(async () => {
      authLevel.value = store.getters.getAuthLevel;

      if (props.withProp) {
        let data = await storeFunc.dispatch("getClientInfo", route.params.id);

        if (!data) {
          const data = await getOneStudent(route.params.id);
          clientFindingsInfo.value = data.initialFindings;
          originalObj = data.initialFindings;
          setupViewOnly();
        } else {
          clientFindingsInfo.value = data.initialFindings;
          originalObj = data.initialFindings;
          setupViewOnly();
        }

        // originalObj = toRawObject(originalObj);
      }
    });

    const clientFindingsInfo = ref([]);

    const newClientFindings = ref({
      date: "",
      findings: "",
    });
    let originalObj = [];

    const disableClass = computed(() => {
      return authLevel.value === "Partial-Update" ? "disabled" : "";
    });

    const toggleAlert = () => {
      showAlert.value = !showAlert.value;
    };

    function toRawObject(reactiveObj) {
      let rawObj = {};
      for (let key in reactiveObj) {
        let value = reactiveObj[key];
        if (value?.value !== undefined) {
          // If it's a ref or computed ref, use the value directly
          rawObj[key] = value.value;
        } else if (typeof value === "object" && value !== null) {
          // If it's a nested object, call toRawObject recursively
          rawObj[key] = toRawObject(value);
        } else {
          // Otherwise, just copy the value
          rawObj[key] = value;
        }
      }
      return rawObj;
    }

    const submitClientFindings = () => {
      if (updateMode.value === true) {
        const raw = toRawObject(originalObj);
        const origObj = JSON.stringify(raw);
        const newObj = JSON.stringify(clientFindingsInfo.value);

        if (origObj !== newObj) {
          emit("clientFindingsUpdate", clientFindingsInfo.value);
        }
      } else {
        if (
          newClientFindings.value.findings.trim() == "" ||
          newClientFindings.value.date === ""
        ) {
          lackingErr.value = true;
        }
        emit("clientFindingsSubmit", newClientFindings.value);
      }

      setupViewOnly();
    };

    const submitNewFindings = () => {
      if (
        newClientFindings.value.findings.trim() == "" ||
        newClientFindings.value.date === ""
      ) {
        lackingErr.value = true;
      } else {
        emit("newClientFindings", newClientFindings.value);
      }

      setupViewOnly();
    };

    const clearErr = () => {
      lackingErr.value = false;
    };

    const backBtn = () => {
      emit("goBack");
    };

    const exportPdf = () => {
      emit("exportPdf");
    };

    const epxortCsv = () => {
      emit("exportCsv");
    };

    const setupViewOnly = () => {
      textField.value = true;
      readOnly.value = true;
      updateMode.value = false;
      editMode.value = false;
      iterateMode.value = true;
      addNewFindingsMode.value = false;
    };

    const setupEditMode = () => {
      if (authLevel.value !== "Admin" && authLevel.value !== "Full-Update") {
        toggleAlert();
      } else {
        textField.value = false;
        editMode.value = true;
        updateMode.value = true;
      }
    };

    const setupCancelEdit = () => {
      textField.value = true;
      editMode.value = false;
      updateMode.value = false;
    };

    const setupAddNewFindings = () => {
      addNewFindingsMode.value = true;
    };

    const cancelNewFindings = () => {
      addNewFindingsMode.value = false;
    };

    return {
      clientFindingsInfo,
      submitClientFindings,
      lackingErr,
      clearErr,
      backBtn,
      setupEditMode,
      setupCancelEdit,
      readOnly,
      textField,
      editMode,
      iterateMode,
      addNewFindingsMode,
      setupAddNewFindings,
      newClientFindings,
      cancelNewFindings,
      submitNewFindings,
      toggleAlert,
      showAlert,
      AlertBox,
      disableClass,
      textDetails,
      epxortCsv,
      exportPdf,
    };
  },
};
</script>
