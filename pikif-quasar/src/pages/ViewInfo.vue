<template>
  <div
    class="w-[90%] flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white"
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

    <div class="flex w-full justify-end space-x-4 mt-4 px-3">
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
</template>

<script>
import AddClient from "src/components/AddClient.vue";
import AddInformant from "src/components/AddInformant.vue";
import AddFindings from "src/components/AddFindings.vue";
import MessagePage from "src/components/MessagePage.vue";

import { useStore } from "vuex";
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { updateInfo, addFindings } from "src/services/services";

export default {
  components: {
    AddClient,
    AddInformant,
    AddFindings,
    MessagePage,
  },

  setup() {
    const prop = true;
    const route = useRoute();
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
    const id = route.params.id;

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
    };
  },
};
</script>
