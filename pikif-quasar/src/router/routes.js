const routes = [
  {
    path: "/",
    children: [{ path: "", component: () => import("../App.vue") }],
  },

  {
    path: "/login",
    children: [{ path: "", component: () => import("pages/LogIn.vue") }],
  },

  {
    path: "/register",

    children: [{ path: "", component: () => import("pages/RegisterAcc.vue") }],
  },

  {
    path: "/home",
    name: "home",
    meta: {
      requiresAuth: true,
    },
    component: () => import("layouts/NavBar.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
