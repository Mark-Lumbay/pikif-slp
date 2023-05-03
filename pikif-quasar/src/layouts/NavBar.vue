<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primaryBlue text-white" height-hint="108">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawerState" />

        <q-toolbar-title class="text-white">
          {{ route.name }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <div class="flex flex-row mt-12 w-[30vh]">
      <div class="flex flex-col h-screen bg-secondaryBlue" :class="classWidth">
        <a href="/home">
          <div
            class="hover:bg-secondaryDarker p-4 px-6 transition-all ease-in-out cursor-pointer"
          >
            <div class="flex flex-row items-center space-x-4">
              <q-icon
                name="las la-home"
                size="35px"
                class="text-white"
              ></q-icon>
              <span
                class="text-lg font-semibold text-white"
                v-if="leftDrawerOpen"
                >Home</span
              >
            </div>
          </div>
        </a>

        <a href="/addStudent">
          <div
            class="hover:bg-secondaryDarker p-4 px-6 transition-all ease-in-out cursor-pointer"
          >
            <div class="flex flex-row items-center space-x-4">
              <q-icon
                name="las la-user-plus"
                size="35px"
                class="text-white"
              ></q-icon>
              <span
                class="text-lg font-semibold text-white"
                v-if="leftDrawerOpen"
                >Add Student</span
              >
            </div>
          </div>
        </a>

        <a href="/genReport">
          <div
            class="hover:bg-secondaryDarker p-4 px-6 transition-all ease-in-out cursor-pointer"
          >
            <div class="flex flex-row items-center space-x-4">
              <q-icon
                name="las la-clipboard-list"
                size="35px"
                class="text-white"
              ></q-icon>
              <span
                class="text-lg font-semibold text-white"
                v-if="leftDrawerOpen"
                >Generate Report</span
              >
            </div>
          </div>
        </a>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const width = ref("w-[30vh]");
    const leftDrawerOpen = ref(true);
    const route = useRoute();

    const drawerState = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
      if (leftDrawerOpen.value) {
        width.value = "w-[30vh]";
      } else {
        width.value = "";
      }
    };

    const classWidth = computed(() => {
      return width.value;
    });

    return {
      leftDrawerOpen,
      drawerState,
      classWidth,
      route,
    };
  },
};
</script>
