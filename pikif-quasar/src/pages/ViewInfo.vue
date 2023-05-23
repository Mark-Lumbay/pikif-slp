<template>
  <div class="px-6 py-8 flex items-center justify-center h-full">
    <div
      class="w-[90%] flex flex-col shadow-md rounded-xl p-8 space-x-4 bg-white"
      v-if="!showMsg"
    >
      <div class="w-full flex justify-center items-center">
        <h1 class="text-2xl font-bold">Generate Report</h1>
      </div>

      <div class="w-full flex justify-center items-center space-x-4 mt-6">
        <button
          flat
          label="Cancel"
          class="text-primaryRed h-12 hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-6 border border-primaryRed rounded"
          @click="exportToPDFBasic"
        >
          <q-icon name="las la-file-pdf" size="32px"></q-icon>
          Export as PDF
        </button>
        <button
          flat
          label="Cancel"
          class="text-btnGreen h-12 hover:text-white hover:bg-btnGreen hover:border-transparent font-semibold py-2 px-6 border border-btnGreen rounded"
          @click="exportToCSV"
        >
          <q-icon name="las la-file-csv" size="32px"></q-icon>
          Export as CSV
        </button>
      </div>
    </div>

    <div
      class="w-[90%] flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white mt-8"
      v-if="!showMsg"
    >
      <div>
        <AddClient
          :withProp="prop"
          @client-info-update="saveUpdatedClientInfo"
        ></AddClient>
      </div>
    </div>

    <div
      class="w-[90%] flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white mt-8"
      v-if="!showMsg"
    >
      <div>
        <AddInformant
          :withProp="prop"
          @informant-info-update="saveUpdatedInformantInfo"
        ></AddInformant>
      </div>
    </div>

    <div
      class="w-[90%] flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white mt-8"
      v-if="!showMsg"
    >
      <div>
        <AddFindings
          :withProp="prop"
          @client-findings-update="saveUpdatedClientFindings"
          @new-client-findings="addNewFindings"
        ></AddFindings>
      </div>

      <div class="flex w-full justify-end space-x-4 mt-4 px-3" v-if="hasUpdate">
        <button
          class="bg-primaryRed mb-2 w-[12vw] hover:bg-primaryRedHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
          @click.prevent="updateData"
        >
          Save Update
        </button>
      </div>
    </div>

    <div
      class="w-[90%] flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white"
      v-if="showMsg"
    >
      <MessagePage :message="message"></MessagePage>
    </div>
  </div>
</template>

<script>
import AddClient from "src/components/AddClient.vue";
import AddInformant from "src/components/AddInformant.vue";
import AddFindings from "src/components/AddFindings.vue";
import MessagePage from "src/components/MessagePage.vue";

import { useStore } from "vuex";
import { ref, reactive, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { updateInfo, addFindings } from "src/services/services";
import { getOneStudent } from "../services/services";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import store from "../store/index";

export default {
  components: {
    AddClient,
    AddInformant,
    AddFindings,
    MessagePage,
  },

  setup() {
    const route = useRoute();
    const id = route.params.id;
    const studentData = ref([]);

    onMounted(async () => {
      const data = await getOneStudent(route.params.id);
      studentData.value.id = route.params.id;
      studentData.value.clientInfo = data.clientInfo;
      studentData.value.informantInfo = data.informantInfo;
      studentData.value.initialFindings = data.initialFindings;
    });

    const prop = true;
    const showMsg = ref(false);
    const message = ref({
      messageType: "",
      messageBody: "",
    });

    const data = reactive({
      clientInfo: null,
      informantInfo: null,
      initialFindings: null,
    });

    const newFindings = reactive({
      clientFindings: null,
    });

    const hasUpdate = computed(() => {
      if (!data.clientInfo && !data.informantInfo && !data.initialFindings) {
        return false;
      }
      return true;
    });

    // Methods:

    const saveUpdatedClientInfo = async (info) => {
      data.clientInfo = info;
      console.log(data);
    };

    const saveUpdatedInformantInfo = (info) => {
      data.informantInfo = info;
      console.log(data);
    };

    const saveUpdatedClientFindings = (info) => {
      data.initialFindings = info;
      console.log(data);
    };

    const addNewFindings = async (info) => {
      newFindings.clientFindings = info;
      const addFindingsReq = await addFindings(newFindings.clientFindings, id);
    };

    const exportToPDFBasic = () => {
      const doc = new jsPDF();
      const data = studentData.value;
      console.log(data.clientInfo);
    };

    function wrapCsvValue(val, formatFn, row) {
      let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

      formatted =
        formatted === void 0 || formatted === null ? "" : String(formatted);

      formatted = formatted.split('"').join('""');
      return `"${formatted}"`;
    }

    const exportToCSV = () => {
      const content = [columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          filteredArr.value.map((row) =>
            columns
              .map((col) =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format,
                  row
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      exportFile("table-export.csv", content, "text/csv");
    };

    const updateData = async () => {
      const updateReq = await updateInfo(data, id);
      if (updateReq) {
        message.value.messageType = "success";
        message.value.messageBody = "User data has been updated!";
      } else {
        message.value.messageType = "failed";
        message.value.messageBody = "Update failed, encountered error";
      }
      showMsg.value = true;
    };

    return {
      prop,
      saveUpdatedClientInfo,
      saveUpdatedInformantInfo,
      saveUpdatedClientFindings,
      addNewFindings,
      updateData,
      showMsg,
      message,
      hasUpdate,
      exportToPDFBasic,
      exportToCSV,
    };
  },
};
</script>
