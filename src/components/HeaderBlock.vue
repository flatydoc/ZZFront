<template>
  <div>
    <header class="header">
      <router-link class="nav__item logo" to="/">
        <img class="logo-img" src="../assets/logo.svg" />
        <p>BEST TRADE GROUP MMC</p>
      </router-link>
      <nav class="nav">
        <router-link class="nav__item" to="/products">Products</router-link>
        <router-link class="nav__item" to="/services">Services</router-link>
        <router-link class="nav__item" to="/contacts">Contacts</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
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
    }
  }

  .nav {
    display: flex;

    .router-link-active {
      color: var(--primary-color);
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
    }
  }
}
</style>
