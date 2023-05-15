<template>
  <div
    class="w-[90%] flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white"
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
  >
    <div>
      <AddFindings
        :withProp="prop"
        @client-findings-update="saveUpdatedClientFindings"
        @new-client-findings="addNewFindings"
      ></AddFindings>
    </div>
  </div>
</template>

<script>
import AddClient from "src/components/AddClient.vue";
import AddInformant from "src/components/AddInformant.vue";
import AddFindings from "src/components/AddFindings.vue";

import { useStore } from "vuex";
import { onBeforeMount, ref, computed, reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    AddClient,
    AddInformant,
    AddFindings,
  },

  setup() {
    const prop = true;
    const store = useStore();
    const route = useRoute();
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

    const addNewFindings = (info) => {
      newFindings.clientFindings = info;
      console.log(newFindings.clientFindings);
    };

    return {
      prop,
      saveUpdatedClientInfo,
      saveUpdatedInformantInfo,
      saveUpdatedClientFindings,
      addNewFindings,
    };
  },
};
</script>
