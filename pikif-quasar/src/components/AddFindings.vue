<template>
  <div>
    <div class="flex w-full mb-6"></div>
    <div class="flex flex-row w-full h-full">
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
        class="flex w-full justify-end mt-6 px-3"
        v-if="readOnly && !editMode && !addNewFindingsMode"
      >
        <button
          class="bg-primaryBtn mb-2 w-[12vw] hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="setupEditMode"
        >
          Edit
        </button>
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
</template>

<script>
import { ref, defineEmits, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { getOneStudent } from "../services/services";

export default {
  emits: [
    "clientFindingsSubmit",
    "goBack",
    "clientFindingsUpdate",
    "newClientFindings",
  ],
  props: {
    withProp: {
      type: Object,
      required: false,
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const route = useRoute();
    const lackingErr = ref(false);
    const readOnly = ref(false);
    const textField = ref(false);
    const editMode = ref(false);
    const updateMode = ref(false);
    const iterateMode = ref(false);
    const addNewFindingsMode = ref(false);

    onMounted(async () => {
      if (props.withProp) {
        let data = await store.dispatch("getClientInfo", route.params.id);

        if (!data) {
          const data = await getOneStudent(route.params.id);
          clientFindingsInfo.value = data.initialFindings;
          setupViewOnly();
        } else {
          clientFindingsInfo.value = data.initialFindings;
          setupViewOnly();
        }
      }
    });

    const clientFindingsInfo = ref([]);

    const newClientFindings = ref({
      date: "",
      findings: "",
    });

    const submitClientFindings = () => {
      if (updateMode.value == true) {
        // if (
        //   clientFindingsInfo.value.findings.trim() == "" ||
        //   clientFindingsInfo.value.date === ""
        // ) {
        //   lackingErr.value = true;
        // } else {
        // }
        emit("clientFindingsUpdate", clientFindingsInfo.value);
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

    const setupViewOnly = () => {
      textField.value = true;
      readOnly.value = true;
      updateMode.value = false;
      editMode.value = false;
      iterateMode.value = true;
    };

    const setupEditMode = () => {
      textField.value = false;
      editMode.value = true;
      updateMode.value = true;
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
    };
  },
};
</script>
