<template>
  <div
    class="w-full h-[80%] flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white"
    v-if="currPage === 0"
  >
    <AddClient></AddClient>
    <div class="flex justify-end">
      <button
        class="bg-btnGreen mb-2 w-[10vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
      >
        Next
      </button>
    </div>
  </div>

  <div v-if="currPage === 1">
    <AddInformant></AddInformant>
  </div>

  <div v-if="currPage === 2">
    <AddHousing></AddHousing>
  </div>
</template>

<script>
import AddClient from "src/components/AddClient.vue";
import AddHousing from "src/components/AddHousing.vue";
import AddInformant from "src/components/AddInformant.vue";
import { ref } from "vue";

export default {
  components: {
    AddClient,
    AddHousing,
    AddInformant,
  },
  setup() {
    // Variables
    const currPage = ref(0);

    // Functions
    const nextPage = () => {
      currPage.value++;
    };

    const prevPage = () => {
      currPage.value--;
    };

    return {
      currPage,
      nextPage,
      prevPage,
    };
  },
};
</script>
