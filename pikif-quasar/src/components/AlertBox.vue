<template>
  <div>
    <q-dialog v-model="alert" persistent>
      <q-card>
        <q-card-section class="w-full bg-primaryYellow">
          <div class="w-full flex space-x-2">
            <q-icon name="las la-exclamation-triangle" size="35px"></q-icon>
            <p class="text-2xl font-semibold">{{ textDetails.header }}</p>
          </div>
        </q-card-section>

        <q-card-section class="text-base mt-2">
          {{ textDetails.bodyText }}
        </q-card-section>

        <q-card-actions align="right" class="mb-2 mr-2">
          <button
            class="text-primaryBtn h-12 hover:text-white hover:bg-primaryHovBtn hover:border-transparent font-semibold py-2 px-6 border border-primaryBtn rounded"
            @click="toggle"
          >
            OK
          </button>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, watch, defineEmits, onMounted } from "vue";
export default {
  emits: ["toggleAlert"],
  props: {
    showAlert: {
      type: Boolean,
      required: true,
    },
    messageObj: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const alert = ref(false);
    const alertStyle = ref("");
    const textDetails = ref({
      type: 0,
      header: "",
      bodyText: "",
    });

    watch(
      () => props.showAlert,
      (state) => {
        alert.value = state;
      }
    );

    onMounted(() => {
      textDetails.value.type = messageObj.type;
      textDetails.value.header = messageObj.header;
      textDetails.value.bodyText = messageObj.bodyText;
      alertStyle.value =
        textDetails.value.type == 0 ? "bg-primaryYellow" : "bg-primaryRed";
    });

    const toggle = () => emit("toggleAlert");

    return {
      alert,
      toggle,
      textDetails,
    };
  },
};
</script>
