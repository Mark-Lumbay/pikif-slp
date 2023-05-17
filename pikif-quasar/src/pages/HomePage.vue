<template>
  <generateReport
    :open-modal="openModal"
    @close-modal="closeModal"
    :modal-type="modalType"
  ></generateReport>
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
      class="relative overflow-x-auto shadow-md sm:rounded-lg w-[55vw] h-[70vh] p-6 bg-white"
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
          flat
          bordered
          title="Students"
          :rows="returnFiltered"
          :columns="columns"
          row-key="id"
          :pagination="initialPagination"
          class="flex-1"
          @row-click="viewRow"
        >
          <template v-slot:body-cell-button="props">
            <!-- Accessing the provided props -->
            <q-td :props="props">
              <!-- Content for the cell -->
              <q-btn icon="edit" dense round flat />
            </q-td>
          </template>
        </q-table>
      </div>
    </div>

    <!-- /generate report modal -->
    <div class="shadow-md sm:rounded-lg flex-1 p-6 bg-white ml-4">
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
    <!-- /generate report modal -->
  </div>
</template>

<script>
import { computed, ref, onMounted, watch } from "vue";
import { loadDashboard } from "../services/services";
import { useRoute, useRouter } from "vue-router";
import generateReport from "src/components/generateReport.vue";
import store from "../store";

export default {
  props: {
    userName: {
      type: String,
    },
    components: {
      generateReport,
    },
  },

  setup(props) {
    const rows = ref([]);
    const route = useRoute();
    const router = useRouter();
    const firstName = ref("");
    const nameHolder = ref("");
    const openModal = ref(false);
    const modalType = ref(0);

    //MGA MODAL
    const closeModal = () => {
      openModal.value = false;
    };
    const showModal = (type) => {
      modalType.value = type;
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
    ];

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
      generateReport,
      showModal,
      closeModal,
    };
  },
};
</script>
