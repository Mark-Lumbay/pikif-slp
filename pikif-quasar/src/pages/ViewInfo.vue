<template>
  <div
    class="w-[90%] flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white"
  >
    <div>
      <AddClient :withProp="prop"></AddClient>
    </div>
  </div>

  <div
    class="w-[90%] flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white mt-8"
  >
    <div>
      <AddInformant :withProp="prop"></AddInformant>
    </div>
  </div>
</template>

<script>
import AddClient from "src/components/AddClient.vue";
import AddInformant from "src/components/AddInformant.vue";
import { useStore } from "vuex";
import { onBeforeMount, ref, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    AddClient,
    AddInformant,
  },

  setup() {
    const prop = true;
    const store = useStore();
    const route = useRoute();

    // onMounted(async () => {
    //   data.value = await store.dispatch("getClientInfo", route.params.id);
    // });

    return {
      prop,
    };
  },
};
</script>
