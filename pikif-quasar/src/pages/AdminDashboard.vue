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
import { getAccessLvl } from "../services/services";

export default {
  setup() {
    const rows = ref([]);
    const columns = [
      {
        name: "id",
        label: "User ID",
        field: (row) => row.id,
        format: (val) => `${val}`,
        align: "left",
        sortable: false,
      },
      {
        name: "name",
        label: "Name",
        field: (row) => `${row.firstName} ${row.lastName}`,
        format: (val) => `${val}`,
        align: "left",
        sortable: false,
      },
      {
        name: "role",
        label: "Role",
        field: (row) => row.role,
        format: (val) => `${val}`,
        align: "left",
        sortable: false,
      },
    ];

    onMounted(async () => {
      rows.value = await getAccessLvl();
      console.log(rows.value);
    });

    return {
      rows,
      columns,
    };
  },
};
</script>
