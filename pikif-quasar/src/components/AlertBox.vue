<template>
  <div>
    <q-dialog v-model="alert" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Notice</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          You lack the access previliges to perform this action. If you think
          that this is a mistake, please contact an administrator.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" @click="toggle" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, watch, defineEmits } from "vue";
export default {
  emits: ["toggleAlert"],
  props: {
    showAlert: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const alert = ref(false);

    watch(
      () => props.showAlert,
      (state) => {
        alert.value = state;
      }
    );

    const toggle = () => emit("toggleAlert");

    return {
      alert,
      toggle,
    };
  },
};
</script>
