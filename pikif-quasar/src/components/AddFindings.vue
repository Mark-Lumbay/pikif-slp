<template>
  <div>
    <div class="flex w-full mb-6"></div>
    <div class="flex flex-row w-full h-full">
      <div class="flex w-full mb-6">
        <form class="flex w-full">
          <div class="flex flex-wrap -mx-3 mb-4 w-full justify-center mt-6">
            <p
              class="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg"
            >
              Findings
            </p>
          </div>

          <div class="flex w-full -mx-3 mb-4 border-gray-300 rounded h-1/2">
            <q-input
              class="flex-1 border py-2 px-4 text-lg"
              type="textarea"
              label="Enter Findings Here..."
              rows="4"
              v-model="clientFindingsInfo.findings"
            ></q-input>
          </div>
        </form>
      </div>

      <div
        class="mb-5 w-full bg-red-500 p-2 text-white font-semibold rounded"
        @click.prevent="clearErr"
        v-if="lackingErr"
      >
        <h3 class="text-sm">Please fill all the fields</h3>
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

      <div class="flex w-full justify-end" v-if="readOnly && !editMode">
        <button
          class="bg-primaryBtn mb-2 w-[12vw] hover:bg-primaryHovBtn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="setupEditMode"
        >
          Edit
        </button>
      </div>

      <div class="flex w-full justify-end space-x-4 mt-4" v-if="editMode">
        <button
          class="bg-primaryRed mb-2 w-[12vw] hover:bg-primaryRedHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="setupCancelEdit"
        >
          Cancel
        </button>

        <button
          class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="submitPersonInfo"
        >
          Update
        </button>
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
  emits: ["clientFindingsSubmit", "goBack"],
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

    onMounted(async () => {
      if (props.withProp) {
        let data = await store.dispatch("getClientInfo", route.params.id);

        if (!data) {
          const data = await getOneStudent(route.params.id);
          clientFindingsInfo.value.id = route.params.id;
          clientFindingsInfo.value.findings = data.initialFindings.findings;
          setupViewOnly();
        } else {
          clientFindingsInfo.value.id = route.params.id;
          clientFindingsInfo.value.findings = data.initialFindings.findings;
          setupViewOnly();
        }
      }
    });

    const clientFindingsInfo = ref({
      findings: "",
    });

    const submitClientFindings = () => {
      if (clientFindingsInfo.value.findings.trim() == "") {
        lackingErr.value = true;
      } else {
        emit("clientFindingsSubmit", clientFindingsInfo.value);
      }
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
    };

    const setupEditMode = () => {
      textField.value = false;
      editMode.value = true;
    };

    const setupCancelEdit = () => {
      textField.value = true;
      editMode.value = false;
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
    };
  },
};
</script>
