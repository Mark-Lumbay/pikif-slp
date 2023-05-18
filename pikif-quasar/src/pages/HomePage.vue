<template>
  <div class="flex space-y-4 p-6">
    <div
      class="flex w-full h-[10vh] bg-white shadow-md sm:rounded-lg items-center px-6"
    >
      <div class="flex w-[50%]">
        <p class="font-semibold text-2xl">Welcome back, {{ getName }}!</p>
      </div>
      <div class="flex w-[50%] justify-end">
        <p class="text-xl">Monday, May 8, 2023</p>
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
              <q-icon class="las la-search text-gray-500" size="32px"></q-icon>
              <input
                type="text"
                placeholder="Search student"
                class="w-80 h-10 bg-slate-200 p-3 rounded-l text-gray-700 focus:outline-none focus:shadow-outline"
                v-model="search"
              />
            </div>
          </form>
        </div>

        <div class="w-[50%] flex justify-end">
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                @click="toggleDropDown"
              >
                Filter: {{ filterOption }}
              </button>
            </div>

            <div
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
              v-if="sortState"
            >
              <div class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  @click="changeFilter('Needly Adult')"
                  >Needly Adult
                </a>
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  @click="changeFilter('Survivor')"
                  >Survivor
                </a>
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  @click="changeFilter('Needly Youth')"
                  >Needly Youth
                </a>
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  @click="changeFilter('Needly Senior Citizen')"
                  >Needly Senior Citizen
                </a>
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  @click="changeFilter('CICL')"
                  >CICL
                </a>

                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  @click="changeFilter('CEDC')"
                  >CEDC
                </a>

                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  @click="changeFilter('C/PWD')"
                  >C/PWD
                </a>

                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  @click="changeFilter('WEDC')"
                  >WEDC
                </a>
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  @click="changeFilter('None')"
                  >None
                </a>
              </div>
            </div>
          </div>
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
          class="flex-1"
          @row-click="viewRow"
        />
      </div>
    </div>

    <!-- /generate report modal -->
    <div class="shadow-md sm:rounded-lg flex-3 p-6 bg-white ml-6">
      <div class="flex flex-row items-center mx-10">
        <q-icon
          name="las la-print"
          size="200px"
          class="text-black mx-20 my-6"
        ></q-icon>
      </div>
      <div>
        <button
          class="px-4 py-2 bg-primaryRed text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-primaryRedHover focus:outline-none focus:ring-2 focus:ring-green-300"
          @click.prevent="showModal"
        >
          Generate Report
        </button>
      </div>
    </div>
  </div>
  <GenerateReport
    :open-modal="openModal"
    @change-filter="updateFil"
    @close-modal="closeModal"
    @export-pdf="exportToPDFBasic"
    @export-csv="exportToCSV"
  ></GenerateReport>
</template>

<script>
import { computed, ref, onMounted, watch } from "vue";
import { loadDashboard } from "../services/services";
import { useRoute, useRouter } from "vue-router";
import store from "../store";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { useStore } from "vuex";
import GenerateReport from "src/components/GenerateReport.vue";
import { exportFile, useQuasar } from "quasar";

export default {
  props: {
    userName: {
      type: String,
    },
  },
  components: {
    GenerateReport,
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
    //MGA MODAL
    const closeModal = () => {
      openModal.value = false;
    };
    const showModal = () => {
      openModal.value = true;
    };
    watch(
      () => nameHolder.value,
      (username) => {
        firstName.value = username;
        console.log(username);
        console.log(firstName.value);
      }
    );
    onMounted(async () => {
      rows.value = await getData();
      nameHolder.value = await store.getters.getFirstName;
      filterTable();
    });
    const getName = computed(() => {
      return firstName.value;
    });
    const showSortMenu = ref(false);
    const filterOption = ref("None");
    const filteredArr = ref([]);
    const search = ref("");
    const selectedRow = ref([]);
    const options = [
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
        name: "status",
        label: "Status",
        field: (row) => row.status,
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
        name: "walls",
        label: "Wall Material",
        field: (row) =>
          row.materials.walls === "Others"
            ? row.materials.wallOthers
            : row.materials.walls,
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

    // const csvCols = [
    //   {
    //     name: "active",
    //     label: "Client Active Status",
    //     field: (row) => row.clientInfo.active,
    //     format: (val) => `${val}`,
    //     align: "left",
    //     sortable: true,
    //   },

    //   {
    //     name: "interviewDate",
    //     label: "Client Interview Date",
    //     field: (row) => row.clientInfo.interviewDate,
    //     format: (val) => `${val}`,
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     name: "Client firstName",
    //     label: "Client First Name",
    //     field: (row) => row.clientInfo.firstName,
    //     format: (val) => `${val}`,
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     name: "middleName",
    //     label: "Client Middle Name",
    //     field: (row) => row.clientInfo.middleName,
    //     format: (val) => `${val}`,
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     name: "lastName",
    //     label: "Client Last Name",
    //     field: (row) => row.clientInfo.lastName,
    //     format: (val) => `${val}`,
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     name: "status",
    //     label: "Client Status",
    //     field: (row) => row.clientInfo.status,
    //     format: (val) => `${val}`,
    //     sortable: true,
    //   },
    //   {
    //     name: "age",
    //     label: "Client Age",
    //     field: (row) => row.clientInfo.age,
    //     sortable: true,
    //   },
    //   {
    //     name: "sex",
    //     label: "Client Sex",
    //     field: (row) => row.clientInfo.sex,
    //     format: (val) => `${val}`,
    //     sortable: true,
    //   },
    //   {
    //     name: "address",
    //     label: "Client Address",
    //     field: (row) => row.clientInfo.address,
    //     format: (val) => `${val}`,
    //     sortable: true,
    //   },
    //   {
    //     name: "birthDate",
    //     label: "Client Birth Date",
    //     field: (row) => row.clientInfo.birthDate,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "birthPlace",
    //     label: "Client Birth Place",
    //     field: (row) => row.clientInfo.birthPlace,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "religion",
    //     label: "Client Religion",
    //     field: (row) => row.clientInfo.religion,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "contactNum",
    //     label: "Client Contact Number",
    //     field: (row) => row.clientInfo.contactNum,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "educAttn",
    //     label: "Client Educational Attainment",
    //     field: (row) => row.clientInfo.educAttn,
    //     format: (val) => `${val}`,
    //     sortable: true,
    //   },
    //   {
    //     name: "category",
    //     label: "Client Category",
    //     field: (row) => row.clientInfo.category,
    //     format: (val) => `${val}`,
    //     sortable: true,
    //   },
    //   {
    //     name: "condition",
    //     label: "Client Housing Condition",
    //     field: (row) =>
    //       row.clientInfo.condition === "Others"
    //         ? row.clientInfo.conditionOthers
    //         : row.clientInfo.condition,
    //     format: (val) => `${val}`,
    //     sortable: false,
    //   },
    //   {
    //     name: "materials.roof",
    //     label: "Client Roof Material",
    //     field: (row) =>
    //       row.clientInfo.materials.roof === "Others"
    //         ? row.clientInfo.materials.roofOthers
    //         : row.clientInfo.materials.roof,
    //     format: (val) => `${val}`,
    //     sortable: false,
    //   },
    //   {
    //     name: "materials.walls",
    //     label: "Client Wall Material",
    //     field: (row) =>
    //       row.clientInfo.materials.walls === "Others"
    //         ? row.clientInfo.materials.wallOthers
    //         : row.clientInfo.materials.walls,
    //     format: (val) => `${val}`,
    //     sortable: false,
    //   },
    //   {
    //     name: "materials.floor",
    //     label: "Client Floor Material",
    //     field: (row) =>
    //       row.clientInfo.materials.floor === "Others"
    //         ? row.clientInfo.materials.floorOthers
    //         : row.clientInfo.materials.floor,
    //     format: (val) => `${val}`,
    //     sortable: false,
    //   },
    //   {
    //     name: "appliances",
    //     label: "Client Appliances",
    //     field: (row) => row.clientInfo.appliances,
    //     format: (val) => `${val}`,
    //     sortable: true,
    //   },

    //   {
    //     name: "active",
    //     label: "Informant Active Status",
    //     field: (row) => row.informantInfo.active,
    //     format: (val) => `${val}`,
    //     align: "left",
    //     sortable: true,
    //   },

    //   {
    //     name: "interviewDate",
    //     label: "Informant Interview Date",
    //     field: (row) => row.informantInfo.interviewDate,
    //     format: (val) => `${val}`,
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     name: "Client firstName",
    //     label: "Informant First Name",
    //     field: (row) => row.informantInfo.firstName,
    //     format: (val) => `${val}`,
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     name: "middleName",
    //     label: "Informant Middle Name",
    //     field: (row) => row.informantInfo.middleName,
    //     format: (val) => `${val}`,
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     name: "lastName",
    //     label: "Informant Last Name",
    //     field: (row) => row.informantInfo.lastName,
    //     format: (val) => `${val}`,
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     name: "status",
    //     label: "Informant Status",
    //     field: (row) => row.informantInfo.status,
    //     format: (val) => `${val}`,
    //     sortable: true,
    //   },
    //   {
    //     name: "age",
    //     label: "Informant Age",
    //     field: (row) => row.informantInfo.age,
    //     sortable: true,
    //   },
    //   {
    //     name: "sex",
    //     label: "Informant Sex",
    //     field: (row) => row.informantInfo.sex,
    //     format: (val) => `${val}`,
    //     sortable: true,
    //   },
    //   {
    //     name: "address",
    //     label: "Informant Address",
    //     field: (row) => row.informantInfo.address,
    //     format: (val) => `${val}`,
    //     sortable: true,
    //   },
    //   {
    //     name: "birthDate",
    //     label: "Informant Birth Date",
    //     field: (row) => row.informantInfo.birthDate,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "birthPlace",
    //     label: "Informant Birth Place",
    //     field: (row) => row.informantInfo.birthPlace,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "religion",
    //     label: "Informant Religion",
    //     field: (row) => row.informantInfo.religion,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "contactNum",
    //     label: "Informant Contact Number",
    //     field: (row) => row.informantInfo.contactNum,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "occupation",
    //     label: "Informant Occupation",
    //     field: (row) =>
    //       row.informantInfo.occupation === "Others"
    //         ? row.informantInfo.occupationOthers
    //         : row.informantInfo.occupation,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "type",
    //     label: "Informant Income Type",
    //     field: (row) => row.informantInfo.income.type,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "amount",
    //     label: "Informant Income Amount",
    //     field: (row) => row.informantInfo.income.amount,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "employment",
    //     label: "Informant Employment",
    //     field: (row) => row.informantInfo.employment,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "employmentStat",
    //     label: "Informant Employment Status",
    //     field: (row) => row.informantInfo.employmentStat,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "employerName",
    //     label: "Informant Employer Name",
    //     field: (row) => row.informantInfo.employerName,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "workAdd",
    //     label: "Informant Work Address",
    //     field: (row) => row.informantInfo.workAdd,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "educAttn",
    //     label: "Informant Educational Level",
    //     field: (row) => row.informantInfo.educAttn,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "assistance",
    //     label: "Informant Government Assistance",
    //     field: (row) => row.informantInfo.assistance,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "otherInc",
    //     label: "Other Income Sources",
    //     field: (row) =>
    //       row.informantInfo.otherInc === "Others"
    //         ? row.informantInfo.otherIncOthers
    //         : row.informantInfo.otherInc,
    //     format: (val) => `${val}`,
    //   },
    //   {
    //     name: "monthlyInc",
    //     label: "Monthly Income",
    //     field: (row) => row.informantInfo.monthlyInc,
    //     format: (val) => `${val}`,
    //   },
    // ];

    const rowDesign = computed(() => {
      return (index) => {
        return index % 2 === 0 ? "bg-gray-100" : "bg-white";
      };
    });
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
      console.log(id);
      router.push({
        name: "View Student Info",
        params: { id: id },
      });
    }
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
            console.log(filteredArr.value);
            return filteredArr.value;
          }
          if (filterStr.value === option) {
            filteredArr.value = rows.value.filter(
              (row) => row.category == filterStr.value
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
      const doc = new jsPDF();
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
        row.status,
        row.condition === "Others" ? row.conditionOthers : row.condition,
        row.roof === "Others" ? row.materials.roofOthers : row.materials.roof,
        row.walls === "Others" ? row.materials.wallOthers : row.materials.walls,
        row.floor === "Others"
          ? row.materials.floorOthers
          : row.materials.floor,
        row.findings.map((item) => item.findings).join(", "),
      ]);

      doc.autoTable({
        head: [headers],
        body: data,
      });
      doc.save("Export.pdf");
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
      GenerateReport,
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
    };
  },
};
</script>
