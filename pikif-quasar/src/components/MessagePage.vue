<template>
  <div>
    <div class="flex w-full mb-6"></div>
    <div class="flex flex-row">
      <div class="w-full h-full">
        <div
          class="flex flex-col items-center -mx-3 mb-4 w-full justify-center mt-6 space-y-4"
        >
          <q-icon :name="getIcon" class="text-btnGreen" size="128px"></q-icon>
          <p class="block tracking-wide text-gray-700 font-bold mb-2 text-4xl">
            {{ msgBody }}
          </p>
        </div>

        <div class="flex w-full flex-row justify-center space-x-4 mt-6">
          <button
            class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
            @click.prevent="router.go()"
          >
            Add More
          </button>
          <button
            class="bg-primaryBlue mb-2 w-[12vw] hover:bg-secondaryBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
            @click.prevent="router.push('/')"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, defineEmits } from "vue";
import { useRouter } from "vue-router";
export default {
  emits: ["reset-page"],
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    // Variables
    const msgType = ref(props.message.messageType);
    const msgBody = ref(props.message.messageBody);
    const router = useRouter();

    // Computed Properties
    const getIcon = computed(() => {
      return msgType.value == "success"
        ? "las la-check-circle"
        : "las la-exclamation-circle";
    });

    // Functions
    const addMore = () => {
      emit("reset-page");
    };

    return {
      msgType,
      msgBody,
      router,
      getIcon,
      addMore,
    };
  },
};
</script>
