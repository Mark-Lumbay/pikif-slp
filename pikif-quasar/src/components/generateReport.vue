<template>
  <div>
    <q-dialog v-model="prompt" persistent>
      <q-card class="w-full">
        <div class="w-full h-14 bg-primaryHovBtn flex items-center px-4">
          <div class="w-[50%]">
            <p class="block text-white text-xl font-semibold">
              Generate Report
            </p>
          </div>

          <div class="flex justify-end w-[50%]">
            <button @click="closeModal">
              <q-icon
                name="las la-times-circle"
                class="text-white hover:text-primaryRed"
                size="34px"
              >
              </q-icon>
            </button>
          </div>
        </div>
        <div class="flex flex-col px-4 justify-center items-center p-6">
          <q-card-section class="q-pt-none">
            <p class="font-medium text-lg">Choose your filters</p>
            <q-btn-dropdown color="primary" :label="`Filter: ${filterStr}`">
              <q-list>
                <q-item
                  clickable
                  v-close-popup
                  @click="updateFilter('Pre-school')"
                >
                  <q-item-section>
                    <q-item-label>Pre-School</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="updateFilter('Elementary')"
                >
                  <q-item-section>
                    <q-item-label>Elementary</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="updateFilter('High School')"
                >
                  <q-item-section>
                    <q-item-label>High School</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="updateFilter('Senior High School')"
                >
                  <q-item-section>
                    <q-item-label>Senior High School</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="updateFilter('College')"
                >
                  <q-item-section>
                    <q-item-label>College</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="updateFilter('Needly Adult')"
                >
                  <q-item-section>
                    <q-item-label>Needly Adult</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="updateFilter('Needly Youth')"
                >
                  <q-item-section>
                    <q-item-label>Needly Youth</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="updateFilter('Needly Senior Citizen')"
                >
                  <q-item-section>
                    <q-item-label>Needly Senior Citizen</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="updateFilter('Survivor')"
                >
                  <q-item-section>
                    <q-item-label>Survivor</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="updateFilter('CICL')">
                  <q-item-section>
                    <q-item-label>CICL</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="updateFilter('CEDC')">
                  <q-item-section>
                    <q-item-label>CEDC</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="updateFilter('C/PWD')">
                  <q-item-section>
                    <q-item-label>C/PWD</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="updateFilter('WEDC')">
                  <q-item-section>
                    <q-item-label>WEDC</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="updateFilter('None')">
                  <q-item-section>
                    <q-item-label>None</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-card-section>

          <q-card-section class="flex flex-row space-x-4">
            <button
              flat
              label="Cancel"
              @click="exportToPdf"
              class="text-primaryRed h-12 hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-6 border border-primaryRed rounded"
            >
              <q-icon name="las la-file-pdf" size="32px"></q-icon>
              Export as PDF
            </button>
            <button
              flat
              label="Cancel"
              @click="exportToCsv"
              class="text-btnGreen h-12 hover:text-white hover:bg-btnGreen hover:border-transparent font-semibold py-2 px-6 border border-btnGreen rounded"
            >
              <q-icon name="las la-file-csv" size="32px"></q-icon>
              Export as CSV
            </button>
          </q-card-section>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
export default {
  emits: [
    "closeModal",
    "updateEmail",
    "updatePass",
    "changeFilter",
    "exportPdf",
    "exportCsv",
  ],
  props: {
    openModal: {
      type: Boolean,
      required: true,
    },

    modalType: {
      type: Number,
      required: false,
    },
  },

  setup(props, { emit }) {
    const prompt = ref(false);
    const showSortMenu = ref(false);
    const filterOption = ref("None");
    const text = ref({
      currText: "",
      newText: "",
    });

    function toggleDropDown() {
      showSortMenu.value = !showSortMenu.value;
    }

    function updateFilter(filter) {
      filterOption.value = filter;
      emit("changeFilter", filterOption.value);

      toggleDropDown();
    }

    const email = ref("");
    const showErr = ref(false);
    const sortState = computed(() => {
      return showSortMenu.value;
    });
    const formContents = ref({
      headerText: "",
      text1: "",
      text2: "",
      placeholder1: "",
      placeholder2: "",
    });

    watch(
      () => props.openModal,
      (state) => {
        prompt.value = state;
      }
    );

    watch(
      () => props.modalType,
      (mode) => {
        if (mode == 1) {
          formContents.value.headerText = "Change Your Email";
          formContents.value.text1 = "Your Current Email";
          formContents.value.text2 = "Your New Email";
          formContents.value.placeholder1 = "Enter current email";
          formContents.value.placeholder2 = "Enter new email";
        }
        if (mode == 2) {
          formContents.value.headerText = "Change Your Password";
          formContents.value.text1 = "Your Current Password";
          formContents.value.text2 = "Your New Password";
          formContents.value.placeholder1 = "Enter current password";
          formContents.value.placeholder2 = "Enter new password";
        }
      }
    );

    const filterStr = computed(() => {
      return filterOption.value;
    });
    const closeModal = () => emit("closeModal");
    const closeErr = () => (showErr.value = false);
    const exportToPdf = () => emit("exportPdf");
    const exportToCsv = () => emit("exportCsv");
    // const submitUpdate = () => {
    //   if (text.value.currText !== "" && text.value.newText !== "") {
    //     if (props.modalType === 1) {
    //       emit("updateEmail", text.value);
    //       closeModal();
    //     } else {
    //       emit("updatePass", text.value);
    //       closeModal();
    //     }

    //     text.value.currText = "";
    //     text.value.newText = "";
    //   } else {
    //     showErr.value = true;
    //   }
    // };

    return {
      prompt,
      closeModal,
      text,
      email,
      formContents,
      showErr,
      closeErr,
      showSortMenu,
      sortState,
      toggleDropDown,
      filterOption,
      updateFilter,
      exportToPdf,
      exportToCsv,
      filterStr,
    };
  },
};
</script>
