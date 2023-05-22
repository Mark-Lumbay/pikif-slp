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
import { ref, watch, onMounted } from "vue";
import { getAudit } from "../services/services";

export default {
  setup() {
    const rows = ref([]);

    onMounted(async () => {
      rows.value = await getAudit();
    });

    const columns = [
      {
        name: "uid",
        label: "User ID",
        field: (row) => row.uid,
        format: (val) => `${val}`,
        align: "center",
        sortable: false,
      },
      {
        name: "name",
        label: "Account Name",
        field: (row) => row.name,
        format: (val) => `${val}`,
        align: "center",
        sortable: false,
      },
      {
        name: "email",
        label: "Email",
        field: (row) => row.email,
        format: (val) => `${val}`,
        align: "center",
        sortable: false,
      },
      {
        name: "action",
        label: "Action Performed",
        field: (row) => row.action,
        format: (val) => `${val}`,
        align: "center",
        sortable: false,
      },
      {
        name: "timestamp",
        label: "Timestamp",
        field: (row) => row.timestamp,
        format: (val) => `${val}`,
        align: "center",
        sortable: false,
      },
    ];

    return {
      initialPagination: {
        sortBy: "name",
        descending: false,
        page: 1,
        rowsPerPage: 10,
      },
      columns,
      rows,
    };
  },
};
</script>
