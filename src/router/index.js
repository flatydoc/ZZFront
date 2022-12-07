import * as VueRouter from "vue-router";

import HomePage from "../views/HomePage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ContactsPage from "../views/ContactsPage.vue";
import ImportPage from "../views/ImportPage.vue";
import SupplyChainPage from "../views/SupplyChainPage.vue";
import TradePromotionPage from "../views/TradePromotionPage.vue";
import LogisticsServicesPage from "../views/LogisticsServicesPage.vue";
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
    path: "/import-export",
    name: "import-export",
    component: ImportPage,
    meta: {
      layoutClass: "import-export",
      name: "Import / Export",
    },
  },
  {
    path: "/supply-chain-optimization",
    name: "supply-chain-optimization",
    component: SupplyChainPage,
    meta: {
      layoutClass: "supply-chain-optimization",
      name: "Supply chain optimization",
    },
  },
  {
    path: "/trade-promotion-optimization",
    name: "trade-promotion-optimization",
    component: TradePromotionPage,
    meta: {
      layoutClass: "trade-promotion-optimization",
      name: "Trade promotion optimization",
    },
  },
  {
    path: "/value-added-logistics-services",
    name: "value-added-logistics-services",
    component: LogisticsServicesPage,
    meta: {
      layoutClass: "value-added-logistics-services",
      name: "Value-added logistics services",
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
