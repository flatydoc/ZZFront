<template>
  <div class="wrapper">
    <section class="head">
      <div class="info">
        <h2 class="title">
          {{ $t("products_page.title") }}
        </h2>
        <p class="subtitle">BEST TRADE GROUP MMC</p>
        <a class="anchor-link button" href="#consumer_electronics">{{
          $t("products_page.links.consumer_electronics")
        }}</a>
        <a class="anchor-link button" href="#alternative_energy">{{
          $t("products_page.links.alternative_energy")
        }}</a>
        <a class="anchor-link button" href="#health_&_wellbeing_products">{{
          $t("products_page.links.health_products")
        }}</a>
        <a class="anchor-link button" href="#industrial_equipment">{{
          $t("products_page.links.industrial_equipment")
        }}</a>
        <a class="anchor-link button" href="#souvenir_products">{{
          $t("products_page.links.souvenir_products")
        }}</a>
      </div>
      <div class="slider"></div>
    </section>
    <section class="chapter" id="consumer_electronics">
      <div class="chapter__block-left">
        <h3 class="chapter-title">
          {{ $t("products_page.consumer_electronics.title") }}
        </h3>
        <p>
          {{ $t("products_page.consumer_electronics.subtitle") }}
        </p>
        <ul class="chapter-list">
          <li>{{ $t("products_page.consumer_electronics.list.1") }}</li>
          <li>{{ $t("products_page.consumer_electronics.list.2") }}</li>
          <li>{{ $t("products_page.consumer_electronics.list.3") }}</li>
        </ul>
        <Button
          @click="open('/contacts')"
          :label="$t('products_page.button')"
          class="p-button-rounded button"
        />
      </div>
      <div class="chapter__block-right">
        <img class="chapter-img" src="../../assets/сonsumer_electronics.jpg" />
      </div>
    </section>
    <section class="chapter">
      <div class="chapter__block-left">
        <img class="chapter-img" src="../../assets/alternative_energy.jpg" />
      </div>
      <div class="chapter__block-right" id="alternative_energy">
        <h3 class="chapter-title">
          {{ $t("products_page.alternative_energy.title") }}
        </h3>
        <p>
          {{ $t("products_page.alternative_energy.subtitle") }}
        </p>
        <ul class="chapter-list">
          <li>{{ $t("products_page.alternative_energy.list.1") }}</li>
          <li>{{ $t("products_page.alternative_energy.list.2") }}</li>
        </ul>
        <Button
          @click="open('/contacts')"
          :label="$t('products_page.button')"
          class="p-button-rounded button"
        />
      </div>
    </section>
    <section class="chapter" id="health_&_wellbeing_products">
      <div class="chapter__block-left">
        <h3 class="chapter-title">
          {{ $t("products_page.health_products.title") }}
        </h3>
        <p>
          {{ $t("products_page.health_products.subtitle") }}
        </p>
        <ul class="chapter-list">
          <li>{{ $t("products_page.health_products.list.1") }}</li>
          <li>{{ $t("products_page.health_products.list.2") }}</li>
          <li>{{ $t("products_page.health_products.list.3") }}</li>
          <li>{{ $t("products_page.health_products.list.4") }}</li>
          <li>{{ $t("products_page.health_products.list.5") }}</li>
          <li>{{ $t("products_page.health_products.list.6") }}</li>
        </ul>
        <Button
          @click="open('/contacts')"
          :label="$t('products_page.button')"
          class="p-button-rounded button"
        />
      </div>
      <div class="chapter__block-right">
        <img class="chapter-img" src="../../assets/health_products.jpg" />
      </div>
    </section>
    <section class="chapter" id="industrial_equipment">
      <div class="chapter__block-left">
        <img class="chapter-img" src="../../assets/industrial_equipment.jpg" />
      </div>
      <div class="chapter__block-right">
        <h3 class="chapter-title">
          {{ $t("products_page.industrial_equipment.title") }}
        </h3>
        <p>
          {{ $t("products_page.industrial_equipment.subtitle") }}
        </p>
        <ul class="chapter-list">
          <li>{{ $t("products_page.industrial_equipment.list.1") }}</li>
          <li>{{ $t("products_page.industrial_equipment.list.2") }}</li>
          <li>{{ $t("products_page.industrial_equipment.list.3") }}</li>
          <li>{{ $t("products_page.industrial_equipment.list.4") }}</li>
        </ul>
        <Button
          @click="open('/contacts')"
          :label="$t('products_page.button')"
          class="p-button-rounded button"
        />
      </div>
    </section>
    <section class="chapter" id="souvenir_products">
      <div class="chapter__block-left">
        <h3 class="chapter-title">
          {{ $t("products_page.souvenir_products.title") }}
        </h3>
        <p>
          {{ $t("products_page.souvenir_products.subtitle") }}
        </p>
        <ul class="chapter-list">
          <li>{{ $t("products_page.souvenir_products.list.1") }}</li>
          <li>{{ $t("products_page.souvenir_products.list.2") }}</li>
          <li>{{ $t("products_page.souvenir_products.list.3") }}</li>
          <li>{{ $t("products_page.souvenir_products.list.4") }}</li>
          <li>{{ $t("products_page.souvenir_products.list.5") }}</li>
        </ul>
        <Button
          @click="open('/contacts')"
          :label="$t('products_page.button')"
          class="p-button-rounded button"
        />
      </div>
      <div class="chapter__block-right">
        <img class="chapter-img" src="../../assets/souvenir_products.jpg" />
      </div>
    </section>
    <ScrollTop />
  </div>
</template>

<script>
import ScrollTop from "primevue/scrolltop";
import Button from "primevue/button";
export default {
  data() {
    return {};
  },
  components: {
    Button,
    ScrollTop,
  },
  methods: {
    open(data) {
      this.$router.push(data);
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: 0 0 20px 0;
  .button {
    margin-top: 30px;
    width: 220px;
    height: 60px;

    font-weight: 700;
  }
  .head {
    display: flex;
    min-height: calc(100vh - 80px);
    .info {
      padding: 80px 120px;
      width: 60%;

      background-image: linear-gradient(
          360deg,
          rgba(255, 255, 255, 1),
          transparent
        ),
        url(../../assets/homepage_head_bg.jpg);
      background-size: cover;
      .title {
        margin-bottom: 30px;

        color: #212121;
        font-size: 72px;
        font-weight: 700;
      }

      .subtitle {
        margin-bottom: 30px;

        color: rgba(33, 33, 33, 0.6);
        font-size: 36px;
        font-weight: 400;
      }

      .anchor-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        margin-right: 10px;
        padding: 7.5px 15px;
        height: 40px;
        width: auto;

        border-radius: 15rem;
        border: 1px solid var(--primary-color);

        font-weight: 500;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--primary-color);
          color: #fff;
        }
      }
    }

    .slider {
      width: 40%;
      display: block;

      background-image: url(../../assets/products_slider.jpg);
      background-size: cover;
    }
  }
  .chapter {
    display: flex;

    padding: 80px 120px;

    p {
      margin-bottom: 20px;
      font-weight: 500;
    }

    &-title {
      margin-bottom: 30px;
      font-size: 48px;
      font-weight: 700;
      color: #212121;
    }

    &__block-left {
      width: 50%;
      margin-right: 30px;
    }

    &__block-right {
      width: 50%;
    }
    &-img {
      width: 100%;
      max-width: 800px;
      height: auto;
    }

    &-list {
      margin: 0 0 20px 20px;
      list-style-position: inside;

      li {
        margin-bottom: 5px;

        font-size: 16px;
        line-height: 150%;
      }
    }

    p {
      font-size: 16px;
      line-height: 150%;
    }

    &:nth-child(3),
    &:nth-child(5) {
      background-color: var(--surface-c);
    }
  }
}

@media screen and (min-width: 1920px) {
  .wrapper {
    .head {
      .info {
        padding: 120px 240px;
        .title {
          font-size: 120px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .wrapper {
    .head {
      min-height: 0;
      display: block;
      .info {
        width: 100%;
      }
      .slider {
        display: none;
      }
      .chapter {
        padding: 40px 120px;
        &-title {
          font-size: 36px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    .head {
      .info {
        padding: 40px 80px;
        .title {
          margin-bottom: 20px;

          font-size: 70px;
        }

        .subtitle {
          margin-bottom: 20px;

          font-size: 28px;
        }
      }
    }

    .chapter {
      display: block;
      padding: 40px 80px;
      &-title {
        font-size: 24px;
        text-align: center;
      }

      &__block-left {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
      }

      &__block-right {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .wrapper {
    .head {
      .info {
        text-align: center;
        padding: 20px 40px;
        .title {
          font-size: 52px;
        }

        .subtitle {
          font-size: 24px;
        }

        .desc {
          font-size: 14px;
        }
      }
    }
    .chapter {
      padding: 40px 40px;
    }
  }
}

@media screen and (max-width: 400px) {
  .wrapper {
    .head {
      .info {
        .title {
          font-size: 36px;
        }

        .subtitle {
          font-size: 20px;
        }

        .anchor-link {
          margin-right: 0;

          width: 100%;
        }
      }
    }

    .button {
      width: 100%;
      height: 40px;
    }
    .chapter {
      padding: 40px 20px;
    }
  }
}
</style>
