import * as VueRouter from "vue-router";

import HomePage from "../views/HomePage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ContactsPage from "../views/ContactsPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import PrivacyPolicyPage from "../views/PrivacyPolicyPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      layoutClass: "home",
      name: "ZZ GROUP",
    },
  },
  {
    path: "/products",
    name: "products",
    component: ProductsPage,
    meta: {
      layoutClass: "products",
      name: "Products",
    },
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsPage,
    meta: {
      layoutClass: "contacts",
      name: "Contacts",
    },
  },
  {
    path: "/services",
    name: "services",
    component: ServicesPage,
    meta: {
      layoutClass: "services",
      name: "Services",
    },
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: PrivacyPolicyPage,
    meta: {
      layoutClass: "privacy-policy",
      name: "Privacy Policy",
    },
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.name === "ZZ GROUP") {
    document.title = to.meta.name;
  } else document.title = "ZZ GROUP - " + to.meta.name;
  next();
});

export default router;
