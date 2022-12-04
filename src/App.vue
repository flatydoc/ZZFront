<template>
  <div>
    <HeaderBlock />
    <router-view class="main" />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from "./components/HeaderBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";

export default {
  name: "App",
  components: {
    HeaderBlock,
    FooterBlock,
  },
};
</script>

<style lang="scss">
@import "./css/normalize.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main {
  min-height: calc(100vh - 80px);
  padding: 80px 120px;

  box-shadow: 0px 5px 10px 2px rgba(64, 112, 148, 0.2) inset;
}

@media screen and (max-width: 1000px) {
  .main {
    padding: 50px;
  }
}
</style>
