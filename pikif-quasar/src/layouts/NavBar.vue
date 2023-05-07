<template>
  <q-layout view="hHh lpR fFf" class="w-[100vh]">
    <q-header class="bg-primaryBlue text-white" height-hint="108">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawerState" />

        <q-toolbar-title class="text-white">
          {{ route.name }}
        </q-toolbar-title>
        <q-btn v-bind:label="userName">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Log Out</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <div class="flex flex-row w-full">
      <div class="flex flex-row mt-12" :class="classWidth">
        <div
          class="flex flex-col h-screen bg-secondaryBlue"
          :class="classWidth"
        >
          <a href="/">
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
      <div class="flex w-[70vh] mt-12">
        <router-view></router-view>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

export default {
  setup() {
    const width = ref("w-[30vh]");
    const leftDrawerOpen = ref(true);
    const route = useRoute();
    const name = ref(store.getters.getFirstName);

    const drawerState = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
      if (leftDrawerOpen.value) {
        width.value = "w-[30vh]";
      } else {
        width.value = "";
      }
    };

    const userName = computed(() => {
      return name.value;
    });

    const classWidth = computed(() => {
      return width.value;
    });

    return {
      leftDrawerOpen,
      drawerState,
      classWidth,
      route,
      userName,
    };
  },
};
</script>
