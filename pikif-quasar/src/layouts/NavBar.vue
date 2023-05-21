<template>
  <div class="">
    <q-layout view="lHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-navBar">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

          <q-toolbar-title class="font-semibold">{{
            route.name
          }}</q-toolbar-title>

          <button class="inline-flex text-base">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section @click="settingsPage"
                    >Settings</q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section @click="logout">Log Out</q-item-section>
                </q-item>
                <q-separator />
              </q-list>
            </q-menu>
            {{ userName }}
            <svg
              class="w-5 h-5 ml-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </q-toolbar>
      </q-header>

      <q-drawer
        class="bg-sideBar"
        :mini="drawer"
        show-if-above
        :mini-width="100"
      >
        <q-scroll-area style="height: calc(100% - 150px)">
          <q-list padding class="ml-2">
            <q-item clickable v-ripple @click="router.push('/')">
              <q-item-section avatar>
                <div
                  class="hover:bg-secondaryDarker transition-all ease-in-out cursor-pointer"
                >
                  <div class="flex flex-row items-center space-x-4">
                    <q-icon
                      name="las la-home"
                      size="43px"
                      :class="
                        route.name === 'Home' ? 'text-btnGreen' : 'text-white'
                      "
                    ></q-icon>
                  </div>
                </div>
              </q-item-section>

              <q-item-section
                class="text-btnGreen text-lg font-semibold"
                :class="route.name === 'Home' ? 'text-btnGreen' : 'text-white'"
              >
                Home
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="router.push('/addStudent')">
              <q-item-section avatar>
                <div
                  class="hover:bg-secondaryDarker transition-all ease-in-out cursor-pointer"
                >
                  <div class="flex flex-row items-center space-x-4">
                    <q-icon
                      name="las la-user-plus"
                      size="43px"
                      :class="
                        route.name === 'Add Student'
                          ? 'text-btnGreen'
                          : 'text-white'
                      "
                    ></q-icon>
                  </div>
                </div>
              </q-item-section>

              <q-item-section
                class="text-lg font-semibold"
                :class="
                  route.name === 'Add Student' ? 'text-btnGreen' : 'text-white'
                "
              >
                Add Student
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              @click="router.push('/account-settings')"
            >
              <q-item-section avatar>
                <div
                  class="hover:bg-secondaryDarker transition-all ease-in-out cursor-pointer"
                >
                  <div class="flex flex-row items-center space-x-4">
                    <q-icon
                      name="las la-cog"
                      size="43px"
                      :class="
                        route.name === 'Account Settings'
                          ? 'text-btnGreen'
                          : 'text-white'
                      "
                    ></q-icon>
                  </div>
                </div>
              </q-item-section>

              <q-item-section
                class="text-lg font-semibold"
                :class="
                  route.name === 'Account Settings'
                    ? 'text-btnGreen'
                    : 'text-white'
                "
              >
                Account Settings
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              @click="router.push('/account-settings')"
            >
              <q-item-section avatar>
                <div
                  class="hover:bg-secondaryDarker transition-all ease-in-out cursor-pointer"
                >
                  <div class="flex flex-row items-center space-x-4">
                    <q-icon
                      name="las la-file-signature"
                      size="43px"
                      :class="
                        route.name === 'Audit Log'
                          ? 'text-btnGreen'
                          : 'text-white'
                      "
                    ></q-icon>
                  </div>
                </div>
              </q-item-section>

              <q-item-section
                class="text-lg font-semibold"
                :class="
                  route.name === 'Audit Log' ? 'text-btnGreen' : 'text-white'
                "
              >
                Audit Log
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container class="bg-slate-100">
        <q-page>
          <router-view :userName="userName"></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>

  <!-- old code here -->
  <!-- <q-layout view="hHh lpR fFf" class="w-[100vw] h-full bg-slate-100">
    <q-header class="bg-navBar text-white flex w-full h-[7%]">
      <q-toolbar class="flex items-center justify-center">
        <q-btn dense flat round icon="menu" @click="drawerState" />

        <q-toolbar-title class="text-white">
          {{ route.name }}
        </q-toolbar-title>
        <button class="inline-flex">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section @click="settingsPage">Settings</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section @click="logout">Log Out</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </q-menu>
          {{ userName }}
          <svg
            class="w-5 h-5 ml-1"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </q-toolbar>
    </q-header>

    <div class="flex flex-row w-full h-full">
      <div class="flex-row mt-16" :class="classWidth">
        <div class="h-full bg-navBar" :class="classWidth">
          <a @click="router.push('/')">
            <div
              class="hover:bg-secondaryDarker p-4 px-6 transition-all ease-in-out cursor-pointer"
            >
              <div class="flex flex-row items-center space-x-4">
                <q-icon
                  name="las la-home"
                  size="32px"
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

          <a @click="router.push('/addStudent')">
            <div
              class="hover:bg-secondaryDarker p-4 px-6 transition-all ease-in-out cursor-pointer"
            >
              <div class="flex flex-row items-center space-x-4">
                <q-icon
                  name="las la-user-plus"
                  size="32px"
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

          <a @click="router.push('/account-settings')">
            <div
              class="hover:bg-secondaryDarker p-4 px-6 transition-all ease-in-out cursor-pointer"
            >
              <div class="flex flex-row items-center space-x-4">
                <q-icon
                  name="las la-user-cog"
                  size="32px"
                  class="text-white"
                ></q-icon>
                <span
                  class="text-lg font-semibold text-white"
                  v-if="leftDrawerOpen"
                  >Account Settings</span
                >
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="flex flex-col mt-16 items-center" :class="contentWidth">
        <router-view :userName="userName"></router-view>
      </div>
    </div>
  </q-layout> -->
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

import store from "../store";

export default {
  setup() {
    const width = ref("w-[17vw]");
    const contentWidth = ref("w-[83vw]");
    const leftDrawerOpen = ref(true);

    const route = useRoute();
    const router = useRouter();
    const store2 = useStore();

    const name = ref("");
    const nameHolder = ref("");

    onMounted(async () => {
      nameHolder.value = await store.getters.getFirstName;
    });

    watch(
      () => nameHolder.value,
      (username) => {
        name.value = username;
      }
    );

    const drawerState = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
      if (leftDrawerOpen.value) {
        width.value = "w-[17vw]";
        contentWidth.value = "w-[83vw]";
      } else {
        width.value = "";
        contentWidth.value = "flex-1";
      }
    };

    const logout = async () => {
      try {
        await store2.dispatch("logout");
        router.push("/login");
      } catch (err) {
        console.log(err);
      }
    };

    const settingsPage = async () => {
      router.push("/account-settings");
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
      contentWidth,
      router,
      logout,
      settingsPage,
      drawer: ref(false),
    };
  },
};
</script>
