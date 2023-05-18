<template>
  <div>
    <q-dialog v-model="prompt" persistent>
      <q-card class="w-full">
        <div class="w-full h-14 bg-primaryHovBtn flex items-center px-4">
          <p class="block text-white text-xl font-semibold">Generate Report</p>
        </div>
        <div class="px-4">
          <q-card-section class="mt-4"> </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              autofocus
              @keyup.enter="prompt = false"
              :placeholder="formContents.placeholder2"
              v-model="text.newText"
            />
          </q-card-section>

          <q-card-section> </q-card-section>

          <q-card-section class="q-pt-none"> </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary space-x-3 px-4 mb-4"
          >
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
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  emits: ["closeModal", "updateEmail", "updatePass"],
  props: {
    openModal: {
      type: Boolean,
      required: true,
    },

    modalType: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const prompt = ref(false);
    const text = ref({
      currText: "",
      newText: "",
    });

    const email = ref("");
    const showErr = ref(false);
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
    };
  },
};
</script>
