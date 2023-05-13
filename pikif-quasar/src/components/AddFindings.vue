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

      <div class="flex w-full justify-end space-x-4">
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
    </div>
  </div>
</template>

<script>
import { ref, defineEmits } from "vue";

export default {
  emits: ["clientFindingsSubmit", "goBack"],

  setup(_, { emit }) {
    const lackingErr = ref(false);
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

    return {
      clientFindingsInfo,
      submitClientFindings,
      lackingErr,
      clearErr,
      backBtn,
    };
  },
};
</script>
