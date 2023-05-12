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
      <AddClient @client-info-submit="saveClientInfo"></AddClient>
    </div>

    <div v-if="currPage === 1">
      <AddInformant
        @informant-info-submit="saveInformantInfo"
        @go-back="prevPage"
      ></AddInformant>
    </div>

    <div v-if="currPage === 2">
      <AddFindings
        @client-findings-submit="saveClientFindings"
        @go-back="prevPage"
      ></AddFindings>
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
import AddFindings from "src/components/AddFindings.vue";
import AddInformant from "src/components/AddInformant.vue";
import { ref, reactive } from "vue";

export default {
  components: {
    AddClient,
    AddFindings,
    AddInformant,
  },
  setup() {
    // Variables
    const currPage = ref(0);
    const data = reactive({
      clientInfo: null,
      informantInfo: null,
      clientFindings: null,
    });

    // Functions
    const nextPage = () => {
      currPage.value++;
    };

    const prevPage = () => {
      currPage.value--;
    };

    const saveClientInfo = (info) => {
      data.clientInfo = info;
      console.log(data);
      nextPage();
    };

    const saveInformantInfo = (info) => {
      data.informantInfo = info;
      console.log(data);

      nextPage();
    };

    const saveClientFindings = (info) => {
      data.clientFindings = info;
      console.log(data);

      nextPage();
    };

    return {
      currPage,
      nextPage,
      prevPage,
      saveClientInfo,
      saveInformantInfo,
      saveClientFindings,
    };
  },
};
</script>
