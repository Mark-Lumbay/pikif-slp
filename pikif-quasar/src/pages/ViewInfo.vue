<template>
  <div>
    <AddClient :clientInfo="clientInfo"></AddClient>
  </div>
</template>

<script>
import AddClient from "src/components/AddClient.vue";
import AddFindings from "src/components/AddFindings.vue";
import AddInformant from "src/components/AddInformant.vue";

import store from "src/store";
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    AddClient,
    AddFindings,
    AddInformant,
  },

  setup() {
    const router = useRouter();
    const dataObj = ref({
      clientInfo: null,
      informantInfo: null,
      initialFindings: null,
    });

    onMounted(async () => {
      console.log("Hook is mounted");
      const data = await store.getters.getData();
      for (const info of data) {
        dataObj.value.clientInfo = info.clientInfo;
        dataObj.value.informantInfo = info.informantInfo;
        dataObj.value.initialFindings = info.initialFindings;
      }

      console.log(`This is the id:${router.params.id}`);
    });

    return {
      dataObj,
    };
  },
};
</script>
