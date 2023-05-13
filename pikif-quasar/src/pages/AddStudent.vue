<template>
  <div class="w-full flex flex-col shadow-md rounded-xl p-4 space-x-4 bg-white">
    <q-toolbar>
      <q-breadcrumbs active-color="black" style="font-size: 16px">
        <q-breadcrumbs-el label="Personal Information" icon="home" />
        <q-breadcrumbs-el label="Informant Information" icon="widgets" />
        <q-breadcrumbs-el label="Findings" />
      </q-breadcrumbs>
    </q-toolbar>
    <KeepAlive>
      <component
        :is="getCurrentComponent"
        @client-info-submit="saveClientInfo"
        v-if="currPage === 0"
      ></component>
    </KeepAlive>

    <KeepAlive>
      <component
        :is="getCurrentComponent"
        @informant-info-submit="saveInformantInfo"
        @go-back="prevPage"
        v-if="currPage === 1"
      ></component>
    </KeepAlive>

    <KeepAlive>
      <component
        :is="getCurrentComponent"
        @client-findings-submit="saveClientFindings"
        @go-back="prevPage"
        v-if="currPage === 2"
      ></component>
    </KeepAlive>
  </div>
</template>

<script>
import AddClient from "src/components/AddClient.vue";
import AddFindings from "src/components/AddFindings.vue";
import AddInformant from "src/components/AddInformant.vue";
import { ref, reactive, computed } from "vue";
import { addStudent } from "../services/services";

export default {
  components: {
    AddClient,
    AddFindings,
    AddInformant,
  },
  setup() {
    // Variables
    const clientInfo = ref({});
    const informantInfo = ref({});
    const clientFindings = ref({});

    const currPage = ref(0);
    const data = reactive({
      clientInfo: null,
      informantInfo: null,
      initialFindings: null,
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
      clientInfo.value = info;
      console.log(data);
      nextPage();
    };

    const saveInformantInfo = (info) => {
      data.informantInfo = info;
      informantInfo.value = info;
      console.log(data);

      nextPage();
    };

    const saveClientFindings = (info) => {
      data.initialFindings = info;
      initialFindings.value = findings;
      console.log(data);

      nextPage();
      addStudentInfo();
    };

    const addStudentInfo = async () => {
      const res = await addStudent(data);
      if (res.success) {
        console.log("Added Data!");
      } else {
        console.log(`Something went wrong! ${res.message}`);
      }
    };

    const getCurrentComponent = computed(() => {
      switch (currPage.value) {
        case 0:
          return "AddClient";
        case 1:
          return "AddInformant";
        case 2:
          return "AddFindings";
        default:
          return null;
      }
    });

    return {
      currPage,
      nextPage,
      prevPage,
      saveClientInfo,
      saveInformantInfo,
      saveClientFindings,
      clientInfo,
      informantInfo,
      clientFindings,
      getCurrentComponent,
    };
  },
};
</script>
