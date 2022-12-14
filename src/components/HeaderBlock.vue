<template>
  <div>
    <header class="header">
      <router-link @click="active = false" class="nav__item logo" to="/">
        <img
          class="logo-img"
          src="../assets/logo.svg"
          alt="ZZ BEST TRADE GROUP MMC logo"
        />
        <p class="logo-name">BEST TRADE GROUP MMC</p>
      </router-link>
      <nav class="nav">
        <router-link @click="active = false" class="nav__item" to="/products">{{
          $t("nav.products")
        }}</router-link>
        <p
          @click="tabMenuHandler"
          class="nav__item dropdown"
          :style="[active ? activeStyle : '']"
        >
          {{ $t("nav.services") }}
          <i v-if="!active" class="pi pi-angle-down dropdown-icon"></i>
          <i v-else-if="active" class="pi pi-angle-up dropdown-icon"></i>
        </p>
        <router-link @click="active = false" class="nav__item" to="/contacts">{{
          $t("nav.contacts")
        }}</router-link>
        <div class="lang" @click="switchLang">
          <img :src="selectedImg" />
        </div>
      </nav>
    </header>
    <div class="tabmenu" :style="[active ? showStyle : hiddenStyle]">
      <router-link
        @click="tabMenuHandler"
        class="nav__item"
        to="/import-export"
        >{{ $t("nav.import") }}</router-link
      >
      <router-link
        @click="tabMenuHandler"
        class="nav__item"
        to="/supply-chain-optimization"
        >{{ $t("nav.supply") }}</router-link
      >
      <router-link
        @click="tabMenuHandler"
        class="nav__item"
        to="/trade-promotion-optimization"
        >{{ $t("nav.trade") }}</router-link
      >
      <router-link
        @click="tabMenuHandler"
        class="nav__item"
        to="/value-added-logistics-services"
        >{{ $t("nav.logistics") }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: this.$i18n.locale === "en" ? "../assets/gb.svg" : "../assets/az.svg",
      active: false,
      activeStyle: {
        color: "#2196F3",
      },
      showStyle: {
        opacity: 1,
        transform: "translateY(240px)",
      },
      hiddenStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    tabMenuHandler() {
      !this.active ? (this.active = true) : (this.active = false);
    },
    switchLang() {
      this.$i18n.locale === "en"
        ? (this.$i18n.locale = "az")
        : (this.$i18n.locale = "en");
    },
  },
  computed: {
    selectedImg() {
      if (this.$i18n.locale === "en") {
        return require(`../assets/gb.svg`);
      }
      return require(`../assets/az.svg`);
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.tabmenu {
  position: absolute;
  top: -160px;
  width: 100%;
  z-index: 1;

  display: flex;
  justify-content: flex-end;

  background-color: #fff;

  border-top: 1px solid rgb(239, 239, 239);
  box-shadow: 0px 7px 13px -11px rgba(34, 60, 80, 0.63);

  transition: all 0.5s ease-in-out;

  .nav__item {
    display: inline-flex;
    align-items: center;

    padding: 0 20px;
    height: 30px;

    border-bottom: 2px solid transparent;

    font-size: 14px;
    font-weight: 500;
    color: black;

    transition: color 0.2s ease 0s;

    cursor: pointer;

    &:hover {
      color: var(--primary-color);
    }
  }
  .router-link-active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 100px;
  height: 80px;

  .logo {
    .logo-img {
      height: 48px;
      width: 48px;
    }
    p {
      font-size: 1.2em;
      font-weight: 600;

      span {
        font-size: 20px;
        color: var(--primary-color);
      }
    }
  }

  .nav {
    display: flex;
    align-items: center;

    .router-link-active {
      color: var(--primary-color);
    }

    .lang {
      display: inline-flex;
      align-items: center;

      margin: 0 10px;

      border: 1px solid #fff;
      border-radius: 4px;
      overflow: hidden;

      cursor: pointer;

      img {
        width: 24px;
        height: 18px;
      }

      &:hover {
        transform: scale(110%);
      }
    }

    &__item {
      display: inline-flex;
      align-items: center;

      padding: 0 20px;
      height: 40px;

      font-weight: 700;
      color: black;

      transition: color 0.2s ease 0s;

      cursor: pointer;

      &:hover:not(.logo, .dropdown) {
        color: var(--primary-color);
      }

      &:hover > .dropdown-icon {
        color: var(--primary-color);
        animation: bounce 2s infinite;
      }

      @keyframes bounce {
        from {
          transform: translateY(-5px);
        }
        25% {
          transform: translateY(5px);
        }
        50% {
          transform: translateY(-5px);
        }
        75% {
          transform: translateY(5px);
        }
        to {
          transform: translateY(-5px);
        }
      }

      .dropdown-icon {
        margin-left: 5px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
  .header {
    padding: 0 40px;

    .logo-name {
      display: none;
    }
  }

  .tabmenu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    .router-link-active {
      color: var(--primary-color);
      border-bottom: 2px solid transparent;
      border-right: 2px solid var(--primary-color);
    }
  }
}

@media screen and (max-width: 576px) {
  .header {
    padding: 0 20px;

    .nav__item {
      padding: 0 5px;
    }

    .nav {
      .nav__item {
        padding: 0 10px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .header {
    padding: 0 10px;

    .nav {
      .nav__item {
        padding: 0 5px;
        font-size: 10px;
      }
    }
  }
}
</style>
