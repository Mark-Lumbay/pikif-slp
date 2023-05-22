<template>
  <div class="flex justify-center items-center">
    <div class="w-[88%] flex mt-8">
      <q-table
        bordered
        title="Audit Log"
        :rows="rows"
        :columns="columns"
        row-key="id"
        :pagination="initialPagination"
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const rows = ref([]);
    const columns = [];

    return {
      rows,
      columns,
    };
  },
};
</script>
