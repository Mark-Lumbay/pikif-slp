<template>
  <div class="flex space-y-6 py-12 items-center">
    <div class="flex px-16 space-y-6">
      <div
        class="flex w-full h-[10vh] bg-white shadow-md sm:rounded-lg items-center px-6"
      >
        <div class="flex w-[50%]">
          <p class="font-medium text-3xl">Welcome back, {{ getName }}!</p>
        </div>
        <div class="flex w-[50%] justify-end">
          <p class="text-xl font-medium">{{ today }}</p>
        </div>

        <div class="flex"></div>
      </div>

      <div
        class="relative overflow-x-auto shadow-md sm:rounded-lg flex-1 h-[70vh] p-6 bg-white"
      >
        <div class="flex w-full h-[5vh] items-center mb-4">
          <div class="w-[50%] flex">
            <form @submit.prevent="searchStudent">
              <div class="border bg-slate-200 px-2 rounded">
                <q-icon
                  class="las la-search text-gray-500"
                  size="32px"
                ></q-icon>
                <input
                  type="text"
                  placeholder="Search student"
                  class="w-80 h-10 bg-slate-200 p-3 rounded-l text-gray-700 focus:outline-none focus:shadow-outline"
                  v-model="search"
                />
              </div>
            </form>
          </div>

          <div class="w-[50%] flex flex-row justify-end space-x-3">
            <div class="flex">
              <button
                class="transition-colors ease-in-out text-btnGreen h-12 hover:text-white hover:bg-btnGreen hover:border-transparent font-semibold py-2 px-4 border border-btnGreen rounded"
                @click.prevent="showModal"
              >
                <q-icon name="las la-print" size="32px"></q-icon>
                Generate Report
              </button>
            </div>

            <q-btn-dropdown
              :label="`Filter: ${filterStr}`"
              class="transition-colors ease-in-out text-white h-12 hover:text-white bg-primaryBtn hover:bg-primaryHovBtn hover:border-transparent font-semibold py-2 px-4 border border-primaryBtn rounded"
            >
              <q-list>
                <q-item clickable v-close-popup @click="changeFilter(true)">
                  <q-item-section>
                    <q-item-label>Active</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="changeFilter(false)">
                  <q-item-section>
                    <q-item-label>Inactive</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="changeFilter('Pre-school')"
                >
                  <q-item-section>
                    <q-item-label>Pre-School</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="changeFilter('Elementary')"
                >
                  <q-item-section>
                    <q-item-label>Elementary</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="changeFilter('High School')"
                >
                  <q-item-section>
                    <q-item-label>High School</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="changeFilter('Senior High School')"
                >
                  <q-item-section>
                    <q-item-label>Senior High School</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="changeFilter('College')"
                >
                  <q-item-section>
                    <q-item-label>College</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="changeFilter('Needly Adult')"
                >
                  <q-item-section>
                    <q-item-label>Needly Adult</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="changeFilter('Needly Youth')"
                >
                  <q-item-section>
                    <q-item-label>Needly Youth</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="changeFilter('Needly Senior Citizen')"
                >
                  <q-item-section>
                    <q-item-label>Needly Senior Citizen</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="changeFilter('Survivor')"
                >
                  <q-item-section>
                    <q-item-label>Survivor</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="changeFilter('CICL')">
                  <q-item-section>
                    <q-item-label>CICL</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="changeFilter('CEDC')">
                  <q-item-section>
                    <q-item-label>CEDC</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="changeFilter('C/PWD')">
                  <q-item-section>
                    <q-item-label>C/PWD</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="changeFilter('WEDC')">
                  <q-item-section>
                    <q-item-label>WEDC</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="changeFilter('None')">
                  <q-item-section>
                    <q-item-label>None</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="flex h-[88%]">
          <q-table
            bordered
            title="Students"
            :rows="returnFiltered"
            :columns="columns"
            row-key="id"
            :pagination="initialPagination"
            class="w-full"
            @row-click="viewRow"
          >
            <template v-slot:body-cell-actions="props">
              <q-td key="id" :props="props" @row-click="viewRow" class="">
                <q-toggle
                  v-model="props.row.status"
                  :disable="ableToggle"
                  @update:model-value="
                    () => {
                      if (authLevel !== 'Partial-Update') {
                        changeStatus(props.key);
                        return;
                      } else {
                        toggleAlert();
                      }
                    }
                  "
                />
              </q-td>
            </template>

            <template v-slot:body-cell-status="props">
              <q-td
                key="id"
                :props="props"
                @row-click="viewRow"
                :class="getStatusColor(props.row.status)"
                class="text-center font-semibold"
              >
                <q-icon
                  name="lar la-circle"
                  class="rounded-full"
                  size="24px"
                  :class="
                    props.row.status === true ? 'bg-btnGreen' : 'bg-primaryRed'
                  "
                ></q-icon>
              </q-td>
              <!-- Other columns... -->
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </div>
  <generateReport
    :open-modal="openModal"
    @change-filter="updateFil"
    @close-modal="closeModal"
    @export-pdf="exportToPDFBasic"
    @export-csv="exportToCSV"
  ></generateReport>

  <AlertBox
    :show-alert="showAlert"
    @toggle-alert="toggleAlert"
    :message-obj="textDetails"
  ></AlertBox>
</template>

<script>
import { computed, ref, onMounted, watch } from "vue";
import { loadDashboard, toggleActive } from "../services/services";
import { useRoute, useRouter } from "vue-router";
import store from "../store";
// import { jsPDF } from "jspdf";
// import { autoTable } from "jspdf-autotable";
// import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";
import { applyPlugin } from "jspdf-autotable";
applyPlugin(jsPDF);
import { useStore } from "vuex";
import generateReport from "src/components/generateReport.vue";
import { exportFile, useQuasar } from "quasar";
import AlertBox from "src/components/AlertBox.vue";

export default {
  props: {
    userName: {
      type: String,
    },
  },
  components: {
    generateReport,
    AlertBox,
  },
  setup(props) {
    const rows = ref([]);
    const route = useRoute();
    const router = useRouter();
    const firstName = ref("");
    const nameHolder = ref("");
    const openModal = ref(false);
    const modalType = ref(0);
    const store2 = useStore();
    const authLevel = ref("");
    const showAlert = ref(false);
    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const textDetails = ref({
      type: 0,
      header: "Notice",
      bodyText:
        "You lack the access previliges to perform this action. If you think that this is a mistake, please contact an administrator",
    });

    //MGA MODAL
    const closeModal = () => {
      openModal.value = false;
    };
    const showModal = () => {
      openModal.value = true;
    };
    const toggleAlert = () => {
      showAlert.value = !showAlert.value;
    };

    watch(
      () => nameHolder.value,
      (username) => {
        firstName.value = username;
      }
    );

    onMounted(async () => {
      rows.value = await getData();
      nameHolder.value = await store.getters.getFirstName;
      authLevel.value = store.getters.getAuthLevel;
      filterTable();
    });

    const getName = computed(() => {
      return firstName.value;
    });

    const ableToggle = computed(() => {
      if (authLevel.value === "Partial-Update") {
        return true;
      } else {
        return false;
      }
    });

    const getStatusColor = (status) => {
      return status === true ? "text-btnGreen" : "text-primaryRed";
    };

    const showSortMenu = ref(false);
    const filterOption = ref("None");
    const filteredArr = ref([]);
    const search = ref("");
    const selectedRow = ref([]);
    const options = [
      true,
      false,
      "Pre-school",
      "Elementary",
      "High School",
      "Senior High School",
      "College",
      "Survivor",
      "Needly Youth",
      "Needly Adult",
      "Needly Senior Citizen",
      "CICL",
      "CEDC",
      "WEDC",
      "C/PWD",
      "None",
    ];
    const columns = [
      {
        name: "actions",
        label: "Actions",
        field: (row) => "",
        format: (val) => `${val}`,
        align: "center",
        sortable: false,
        "q-table-column": "name",
      },
      {
        name: "status",
        label: "Status",
        field: (row) => row.status,
        format: (val) => `${val}`,
        sortable: true,
        align: "center",
      },
      {
        name: "fullName",
        label: "Name",
        field: (row) => row.fullName,
        format: (val) => `${val}`,
        align: "left",
        sortable: true,
      },
      {
        name: "age",
        label: "Age",
        field: "age",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "sex",
        label: "Sex",
        field: (row) => row.sex,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "category",
        label: "Category",
        field: (row) => row.category,
        format: (val) => `${val}`,
      },
      {
        name: "educAttn",
        label: "Educational Attainment",
        field: (row) => row.educAttn,
        format: (val) => `${val}`,
        sortable: true,
      },

      {
        name: "condition",
        label: "Housing Condition",
        field: (row) =>
          row.condition === "Others" ? row.conditionOthers : row.condition,
        format: (val) => `${val}`,
        sortable: false,
      },
      {
        name: "roof",
        label: "Roof Material",
        field: (row) =>
          row.materials.roof === "Others"
            ? row.materials.roofOthers
            : row.materials.roof,
        format: (val) => `${val}`,
        sortable: false,
      },
      {
        name: "wall",
        label: "Wall Material",
        field: (row) =>
          row.materials.wall === "Others"
            ? row.materials.wallOthers
            : row.materials.wall,
        format: (val) => `${val}`,
        sortable: false,
      },
      {
        name: "floor",
        label: "Floor Material",
        field: (row) =>
          row.materials.floor === "Others"
            ? row.materials.floorOthers
            : row.materials.floor,
        format: (val) => `${val}`,
        sortable: false,
      },
      {
        name: "findings",
        label: "Client Findings",
        field: (row) => row.findings.map((item) => item.findings).join(", "),
        format: (val) => `${val}`,
        sortable: false,
      },
    ];

    const rowDesign = computed(() => {
      return (index) => {
        return index % 2 === 0 ? "bg-gray-100" : "bg-white";
      };
    });

    const changeStatus = async (id) => {
      try {
        const req = await toggleActive(id);
      } catch (err) {}
    };

    function searchStudent() {
      filterTable(true);
    }

    async function getData() {
      const data = await loadDashboard();
      return data;
    }

    function toggleDropDown() {
      showSortMenu.value = !showSortMenu.value;
    }

    function changeFilter(filter) {
      filterOption.value = filter;
      filterTable();
      toggleDropDown();
    }

    function updateFil(newFilter) {
      filterOption.value = newFilter;
      filterTable();
    }

    function viewRow(evt, row) {
      const id = row.id;
      router.push({
        name: "View Student Info",
        params: { id: id },
      });
    }

    const toggleStatus = (docID) => {};

    function filterTable(isSearch = false) {
      if (isSearch == true) {
        const tempResults = [];
        for (const row of rows.value) {
          if (row.fullName.includes(search.value)) {
            tempResults.push(row);
          }
        }

        filteredArr.value = tempResults;
        return filteredArr;
      } else {
        for (const option of options) {
          if (filterStr.value === "None") {
            filteredArr.value = rows.value;
            return filteredArr.value;
          }
          if (filterStr.value === option) {
            filteredArr.value = rows.value.filter(
              (row) =>
                row.educAttn == filterStr.value ||
                row.category == filterStr.value ||
                row.status == filterStr.value
            );
            return filteredArr.value;
          }
        }
      }
    }

    const flattenObject = (obj, prefix = "") => {
      const flattened = {};

      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          const newKey = prefix ? `${prefix}.${key}` : key;

          if (typeof value === "object" && value !== null) {
            Object.assign(flattened, flattenObject(value, newKey));
          } else {
            flattened[newKey] = value;
          }
        }
      }

      return flattened;
    };

    const exportToPDFBasic = () => {
      const docu = new jsPDF("landscape");
      // const data = filteredArr.value;

      const headers = [
        "Full Name",
        "Age",
        "Sex",
        "Category",
        "Educational Level",
        "Status",
        "Housing Condition",
        "Roof Material",
        "Wall Material",
        "Floor Material",
        "Findings",
      ];

      const data = filteredArr.value.map((row) => [
        row.fullName,
        row.age,
        row.sex,
        row.category,
        row.educAttn,
        row.status == true ? "Active" : "Inactive",
        row.condition === "Others" ? row.conditionOthers : row.condition,
        row.roof === "Others" ? row.materials.roofOthers : row.materials.roof,
        row.wall === "Others" ? row.materials.wallOthers : row.materials.wall,
        row.floor === "Others"
          ? row.materials.floorOthers
          : row.materials.floor,
        row.findings.map((item) => item.findings).join(", "),
      ]);

      docu.autoTable({
        head: [headers],
        body: data,
      });
      docu.save("Export.pdf");
    };

    function wrapCsvValue(val, formatFn, row) {
      let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

      formatted =
        formatted === void 0 || formatted === null ? "" : String(formatted);

      formatted = formatted.split('"').join('""');
      return `"${formatted}"`;
    }

    const exportToCSV = () => {
      const content = [columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          filteredArr.value.map((row) =>
            columns
              .map((col) =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format,
                  row
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      exportFile("table-export.csv", content, "text/csv");
    };

    const returnFiltered = computed(() => {
      return filteredArr.value;
    });
    const sortState = computed(() => {
      return showSortMenu.value;
    });
    const filterStr = computed(() => {
      return filterOption.value;
    });
    return {
      initialPagination: {
        sortBy: "name",
        descending: false,
        page: 1,
        rowsPerPage: 5,
        // rowsNumber: xx if getting data from a server
      },
      // GenerateReport,
      AlertBox,
      props,
      toggleDropDown,
      sortState,
      rows,
      columns,
      filterOption,
      changeFilter,
      filterTable,
      filterStr,
      search,
      searchStudent,
      returnFiltered,
      selectedRow,
      viewRow,
      firstName,
      getName,
      openModal,
      showModal,
      closeModal,
      rowDesign,
      exportToPDFBasic,
      exportToCSV,
      updateFil,
      toggleStatus,
      getStatusColor,
      changeStatus,
      authLevel,
      showAlert,
      toggleAlert,
      textDetails,
      today,
      ableToggle,
    };
  },
};
</script>
