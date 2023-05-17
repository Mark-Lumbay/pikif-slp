const routes = [
  {
    path: "/",
    meta: {
      requiresAuth: true,
    },
    component: () => import("layouts/NavBar.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("pages/HomePage.vue"),
      },
    ],
  },

  {
    path: "/addStudent",
    meta: {
      requiresAuth: true,
    },
    component: () => import("layouts/NavBar.vue"),
    children: [
      {
        path: "/addStudent",
        name: "Add Student",
        component: () => import("pages/AddStudent.vue"),
      },
    ],
  },
  {
    path: "/test",
    meta: {
      requiresAuth: false,
    },
    component: () => import("layouts/NavBar.vue"),
    children: [
      {
        path: "/test",
        name: "test",
        component: () => import("pages/TestPage.vue"),
      },
    ],
  },

  {
    path: "/viewInfo/:id",
    meta: {
      requiresAuth: true,
    },
    component: () => import("layouts/NavBar.vue"),
    children: [
      {
        path: "/viewInfo/:id",
        name: "View Student Info",
        component: () => import("pages/ViewInfo.vue"),
      },
    ],
  },

  {
    path: "/account-settings",
    meta: {
      requiresAuth: true,
    },

    component: () => import("layouts/NavBar.vue"),
    children: [
      {
        path: "/account-settings",
        name: "Account Settings",
        component: () => import("pages/AccSettings.vue"),
      },
    ],
  },

  {
    path: "/login",
    children: [{ path: "", component: () => import("pages/LogIn.vue") }],
  },

  {
    path: "/register",

    children: [{ path: "", component: () => import("pages/RegisterAcc.vue") }],
  },

  // Removed path since base path will be loading home page
  // {
  //   path: "/home",
  //   name: "home",
  //   meta: {
  //     requiresAuth: true,
  //   },
  //   component: () => import("layouts/NavBar.vue"),
  //   children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
