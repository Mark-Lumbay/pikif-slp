<template>
  <div>
    <q-dialog v-model="prompt" persistent>
      <q-card class="w-full">
        <div class="w-full h-14 bg-primaryHovBtn flex items-center px-4">
          <p class="block text-white text-xl font-semibold">Generate Report</p>
        </div>
        <div class="flex flex-col px-4 justify-center items-center p-6">
          <q-card-section class="q-pt-none">
            <p class="font-medium text-lg">Choose your filters</p>

            <div class="text-left">
              <div class="">
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
                    @click="updateFilter('Needly Adult')"
                    >Needly Adult
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    @click="updateFilter('Survivor')"
                    >Survivor
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    @click="updateFilter('Needly Youth')"
                    >Needly Youth
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    @click="updateFilter('Needly Senior Citizen')"
                    >Needly Senior Citizen
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    @click="updateFilter('CICL')"
                    >CICL
                  </a>

                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    @click="updateFilter('CEDC')"
                    >CEDC
                  </a>

                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    @click="updateFilter('C/PWD')"
                    >C/PWD
                  </a>

                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    @click="updateFilter('WEDC')"
                    >WEDC
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    @click="updateFilter('None')"
                    >None
                  </a>
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="flex flex-col">
            <button>Export as PDF</button>
            <button>Export as CSV</button>
          </q-card-section>
        </div>

        <q-card-actions align="right" class="text-primary space-x-3 px-4 mb-4">
          <button
            flat
            label="Cancel"
            @click="closeModal"
            class="text-primaryRed h-12 hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-6 border border-primaryRed rounded"
          >
            Cancel
          </button>
          <button
            flat
            label="Cancel"
            @click="closeModal"
            class="text-btnGreen h-12 hover:text-white hover:bg-btnGreenHover hover:border-transparent font-semibold py-2 px-6 border border-btnGreen rounded"
          >
            Confirm
          </button>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
export default {
  emits: ["closeModal", "updateEmail", "updatePass", "changeFilter"],
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
        console.log(prompt.value);
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

    const closeModal = () => emit("closeModal");
    const closeErr = () => (showErr.value = false);
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
    };
  },
};
</script>
