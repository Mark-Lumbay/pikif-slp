<template>
  <div class="flex justify-center items-center">
    <div class="w-[88%] flex mt-8">
      <q-table
        bordered
        title="Accounts Management"
        :rows="rows"
        :columns="columns"
        row-key="id"
        :pagination="initialPagination"
        class="w-full"
      >
        <template v-slot:body-cell-role="props">
          <q-td key="id" :props="props" class="">
            <q-select
              filled
              v-model="props.row.role"
              :options="roleRef"
              @update:model-value="changeRole(props.row.role, props.row.id)"
            />
          </q-td>
        </template>

        <template v-slot:body-cell-isActive="props">
          <q-td key="id" :props="props" @row-click="viewRow" class="">
            <q-toggle
              v-model="props.row.isActive"
              @update:model-value="
                () => changeAccStatus(props.row.isActive, props.row.id)
              "
            />
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getAccessLvl, updateRole, updateStatus } from "../services/services";

export default {
  setup() {
    const rows = ref([]);
    const selectedRole = ref("");
    const accStatus = ["Active", "Inactive"];
    const roleRef = ref([
      "Teacher",
      "Social Development Worker",
      "Administrator",
    ]);
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
        name: "isActive",
        label: "Account Status",
        selected: (row) => row.isActive,
        field: (row) => row.isActive,
        format: (val) => `${val}`,
        align: "left",
        sortable: false,
      },
      {
        name: "role",
        label: "Role",
        selected: (row) => row.role,
        field: (row) => row.role,
        format: (val) => `${val}`,
        align: "left",
        sortable: false,
      },
    ];

    const changeAccStatus = async (newStatus, id) => {
      await updateStatus(newStatus, id);
    };

    const changeRole = async (newRole, id) => {
      await updateRole(newRole, id);
    };

    onMounted(async () => {
      rows.value = await getAccessLvl();
    });

    return {
      rows,
      columns,
      roleRef,
      selectedRole,
      changeRole,
      accStatus,
      changeAccStatus,
    };
  },
};
</script>
