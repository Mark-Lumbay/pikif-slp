<template>
  <div>
    <AddClient :clientInfo="clientInfo"></AddClient>
  </div>
</template>

<script>
import AddClient from "src/components/AddClient.vue";

import store from "src/store/index";
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    AddClient,
  },

  setup() {
    // const data = store.getters.getData();
    // for (const info of data) {
    //   dataObj.value.clientInfo = info.clientInfo;
    //   dataObj.value.informantInfo = info.informantInfo;
    //   dataObj.value.initialFindings = info.initialFindings;
    // }

    onMounted(async () => {
      const data = await store.getters.getData;
      for (const info of data) {
        dataObj.value.clientInfo = info.clientInfo;
        dataObj.value.informantInfo = info.informantInfo;
        dataObj.value.initialFindings = info.initialFindings;
      }

      console.log(dataObj.value);
    });

    const router = useRouter();
    const dataObj = ref({
      clientInfo: null,
      informantInfo: null,
      initialFindings: null,
    });

    return {
      dataObj,
    };
  },
};
</script>
