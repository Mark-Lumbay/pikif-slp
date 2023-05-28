<template>
  <div class="q-pa-md q-gutter-sm w-full">
    <q-dialog v-model="prompt" persistent>
      <q-card class="w-full">
        <div class="w-full h-14 bg-primaryHovBtn flex items-center px-4">
          <p class="block text-white text-xl font-semibold">
            Reset your password
          </p>
        </div>
        <div class="px-4">
          <q-card-section class="mt-4">
            <div class="text-h6">Enter Email</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              autofocus
              @keyup.enter="prompt = false"
              placeholder="Enter Email"
              v-model="email"
            />
          </q-card-section>

          <q-card-actions
            align="right"
            class="text-primary space-x-3 px-4 mb-4"
          >
            <button
              flat
              label="Cancel"
              class="text-primaryRed h-12 hover:text-white hover:bg-primaryRed hover:border-transparent font-semibold py-2 px-6 border border-primaryRed rounded"
              @click="closeModal"
            >
              Cancel
            </button>
            <button
              flat
              label="Confirm"
              class="text-btnGreen h-12 hover:text-white hover:bg-btnGreenHover hover:border-transparent font-semibold py-2 px-6 border border-btnGreen rounded"
              @click="resetReq"
            >
              Confirm
            </button>
          </q-card-actions>

          <div
            class="px-4 py-2 rounded mb-6 bg-primaryRed"
            v-if="showErr"
            @click="clearErr"
          >
            <p class="text-sm text-white font-semibold">
              All fields are required
            </p>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, defineEmits, watch } from "vue";
export default {
  emits: ["resetPass", "closeModal"],
  props: {
    openModal: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const prompt = ref(false);
    const email = ref("");

    const showErr = ref(false);

    watch(
      () => props.openModal,
      (state) => {
        prompt.value = state;
      }
    );

    const resetReq = () => {
      if (email.value.trim() === "") {
        showErr.value = true;
      } else {
        emit("resetPass", email.value);
        closeModal();
      }
    };

    const closeModal = () => emit("closeModal");
    const clearErr = () => (showErr.value = false);

    return {
      prompt,
      email,
      showErr,
      resetReq,
      closeModal,
      clearErr,
    };
  },
};
</script>
