<template>
  <div>
    <AddClient :clientInfo="clientInfo"></AddClient>
  </div>
</template>

<script>
import AddClient from "src/components/AddClient.vue";

// import store from "src/store/index";
import { useStore } from "vuex";
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
    const dataObj = ref({});
    const store = useStore();
    const router = useRouter();

    onMounted(async () => {
      const data = await store.dispatch("getData", router.params.id);
      dataObj.value = [...data];
      console.log(dataObj.value);

      console.log(router.params.id);
    });

    return {
      dataObj,
    };
  },
};
</script>
