<template>
  <div class="w-full flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white">
    <q-toolbar>
      <q-breadcrumbs active-color="black" style="font-size: 16px">
        <q-breadcrumbs-el label="Personal Information" icon="home" />
        <q-breadcrumbs-el label="Informant Information" icon="widgets" />
        <q-breadcrumbs-el label="Findings" />
      </q-breadcrumbs>
    </q-toolbar>
    <div v-if="currPage === 0">
      <AddClient @client-info-submit="submit"></AddClient>
    </div>

    <div v-if="currPage === 1">
      <AddInformant @informant-info-submit="submit"></AddInformant>
    </div>

    <div v-if="currPage === 2">
      <AddHousing></AddHousing>
    </div>

    <!-- <div class="flex justify-end">
      <button
        class="bg-btnGreen mb-2 w-[12vw] hover:bg-btnGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-14 transition-all ease-in-out"
        @click.prevent="nextPage"
      >
        Next
      </button>
    </div> -->
  </div>
</template>

<script>
import AddClient from "src/components/AddClient.vue";
import AddHousing from "src/components/AddHousing.vue";
import AddInformant from "src/components/AddInformant.vue";
import { ref, inject } from "vue";

export default {
  components: {
    AddClient,
    AddHousing,
    AddInformant,
  },
  setup() {
    // Variables
    const currPage = ref(1);
    const data = ref({});

    // Functions
    const nextPage = () => {
      currPage.value++;
    };

    const prevPage = () => {
      currPage.value--;
    };

    const submit = (info) => {
      data.value = {
        ...data.value,
        info,
      };

      console.log(data.value);
    };

    return {
      currPage,
      nextPage,
      prevPage,
      submit,
    };
  },
};
</script>
