<template>
  <div class="px-6 py-8 flex items-center justify-center h-full">
    <div
      class="flex flex-col shadow-md rounded-xl p-8 space-x-4 bg-white mt-8"
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
      class="flex flex-col shadow-md rounded-xl p-8 space-x-4 bg-white mt-8"
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
      class="flex flex-col shadow-md rounded-xl p-8 space-x-4 bg-white mt-8"
      v-if="!showMsg"
    >
      <div>
        <AddFindings
          :withProp="prop"
          @client-findings-update="saveUpdatedClientFindings"
          @new-client-findings="addNewFindings"
          @export-pdf="exportToPDFBasic"
          @export-csv="exportToCSV"
        ></AddFindings>
      </div>

      <div class="flex justify-end space-x-4 mt-4 px-3" v-if="hasUpdate">
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
import { exportFile } from "quasar";

import jsPDF from "jspdf";
import { applyPlugin } from "jspdf-autotable";
applyPlugin(jsPDF);
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
    const exportObj = ref([]);

    onMounted(async () => {
      const data = await getOneStudent(route.params.id);
      studentData.value.id = route.params.id;
      studentData.value.clientInfo = data.clientInfo;
      studentData.value.informantInfo = data.informantInfo;
      studentData.value.initialFindings = data.initialFindings;

      exportObj.value.clientName = `${data.clientInfo.firstName} ${data.clientInfo.middleName} ${data.clientInfo.lastName}`;
      exportObj.value.findings = data.initialFindings.map(
        (item) => item.findings
      );
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
    };

    const saveUpdatedInformantInfo = (info) => {
      data.informantInfo = info;
    };

    const saveUpdatedClientFindings = (info) => {
      data.initialFindings = info;
    };

    const addNewFindings = async (info) => {
      newFindings.clientFindings = info;
      const addFindingsReq = await addFindings(newFindings.clientFindings, id);
    };

    const exportToPDFBasic = () => {
      const doc = new jsPDF("landscape");
      const headers = ["Client Name", "Findings"];

      const data = [[exportObj.value.clientName, exportObj.value.findings]];

      doc.autoTable({
        head: [headers],
        body: data,
      });
      doc.save("Export.pdf");
    };

    const exportToCSV = () => {
      const headers = ["Client Name", "Findings"];

      const data = [[exportObj.value.clientName, exportObj.value.findings]];

      const csvContent = `${headers.join(",")}\n${data
        .map((row) => row.join(","))
        .join("\n")}`;

      exportFile("Export.csv", csvContent, "text/csv");
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
