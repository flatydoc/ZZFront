<template>
  <div class="wrapper">
    <section class="info">
      <h1 class="title">
        ZZ <br />
        GROUP
      </h1>
      <p class="subtitle">BEST TRADE GROUP MMC</p>
      <p class="desc">
        Our services will assist you in trading your products in UAE. Our goods
        are produced in our own full-cycle manufacturing facilities in China.
      </p>
      <Button label="Contact us" class="p-button-rounded button" />
    </section>
    <section class="slider"></section>
  </div>
</template>

<script>
import Button from "primevue/button";
export default {
  data() {
    return {};
  },
  components: {
    Button,
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  padding: 0;

  .info {
    padding: 80px 120px 80px 120px;
    width: 55%;
    .title {
      font-size: 120px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .subtitle {
      color: rgba(33, 33, 33, 0.6);
      font-size: 36px;
      font-weight: 400;
      margin-bottom: 20px;
    }

    .desc {
      font-size: 16px;
      line-height: 20px;
      color: black;
    }
  }

  .slider {
    width: 45%;
    display: block;

    background-image: url(../../assets/homepage_bg.jpg);
    background-size: cover;
  }
}
</style>
