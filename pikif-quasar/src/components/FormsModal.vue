<template>
  <div class="q-pa-md q-gutter-sm w-full">
    <q-dialog v-model="prompt" persistent>
      <q-card class="w-full">
        <div class="w-full h-14 bg-primaryHovBtn flex items-center px-4">
          <p class="block text-white text-xl font-semibold">
            {{ formContents.headerText }}
          </p>
        </div>
        <div class="px-4">
          <q-card-section class="mt-4">
            <div class="text-h6">{{ formContents.text1 }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              autofocus
              @keyup.enter="prompt = false"
              :placeholder="formContents.placeholder1"
              v-model="currEmail"
            />
          </q-card-section>

          <q-card-section>
            <div class="text-h6">{{ formContents.text2 }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              autofocus
              @keyup.enter="prompt = false"
              :placeholder="formContents.placeholder2"
              v-model="newEmail"
            />
          </q-card-section>

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
import { ref, defineEmits, watch, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  emits: ["closeModal"],
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
    const currEmail = ref("");
    const newEmail = ref("");
    const store = useStore();
    const email = ref("");
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

    return {
      prompt,
      closeModal,
      currEmail,
      newEmail,
      email,
      formContents,
    };
  },
};
</script>
