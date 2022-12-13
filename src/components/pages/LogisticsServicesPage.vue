<template>
  <div class="wrapper">
    <h2 class="title">{{ $t("logistics_page.title") }}</h2>

    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">
          {{ $t("logistics_page.1_section.title") }}
        </h3>
      </div>
      <div class="chapter__block-right">
        <p>
          {{ $t("logistics_page.1_section.paragraphs.1") }}
        </p>
        <p>
          {{ $t("logistics_page.1_section.paragraphs.2") }}
        </p>
      </div>
    </section>
    <img src="../../assets/logistics_page_2.png" />
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">
          {{ $t("logistics_page.2_section.title") }}
        </h3>
        <ul class="chapter-list">
          <li>
            {{ $t("logistics_page.2_section.list.1") }}
          </li>
          <li>
            {{ $t("logistics_page.2_section.list.2") }}
          </li>
          <li>{{ $t("logistics_page.2_section.list.3") }}</li>
          <li>
            {{ $t("logistics_page.2_section.list.4") }}
          </li>
          <li>
            {{ $t("logistics_page.2_section.list.5") }}
          </li>
        </ul>
      </div>
      <div class="chapter__block-right">
        <img
          class="chapter-img"
          alt="Global Concern"
          src="../../assets/logistics_page_1.png"
        />
      </div>
    </section>
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">
          {{ $t("logistics_page.3_section.title") }}
        </h3>
      </div>
      <div class="chapter__block-right">
        <p>
          {{ $t("logistics_page.3_section.paragraphs.1") }}
        </p>
        <p>
          {{ $t("logistics_page.3_section.paragraphs.2") }}
        </p>
      </div>
    </section>

    <section class="footer">
      <h4 class="footer-title">{{ $t("footer.title") }}</h4>
      <p class="footer-subtitle">
        {{ $t("footer.desc") }}
      </p>
      <Button
        @click="open('/contacts')"
        :label="$t('footer.button')"
        class="p-button-rounded footer-button"
      />
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
    ScrollTop,
    Button,
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
  font-weight: 500;

  background-image: linear-gradient(
      360deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.8)
    ),
    url(../../assets/logistics_page_bg.jpg);
  background-size: cover;
  background-position: bottom;
  .title {
    text-align: center;
    font-size: 80px;
    font-weight: 700;
    color: #212121;
  }

  img {
    width: 100%;
    max-height: 600px;
  }

  .chapter {
    display: flex;

    margin: 80px 0;

    &-title {
      margin-bottom: 30px;
      font-size: 48px;
      font-weight: 700;
      color: #212121;
    }

    &__block-left {
      width: 40%;
      margin-right: 30px;
    }

    &__block-right {
      width: 60%;

      p {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &-img {
      width: 100%;
      max-width: 800px;
      height: 400px;
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
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 300px;
    margin: 0 -120px -80px -120px;

    background-image: linear-gradient(
        360deg,
        rgba(44, 152, 240, 1),
        rgba(44, 152, 240, 0.4)
      ),
      url(../../assets/footer.jpg);
    background-size: cover;

    text-align: center;
    color: #fff;

    &-title {
      font-size: 48px;
      font-weight: 700;
    }

    &-subtitle {
      margin: 20px 0;
      font-size: 16px;
      font-weight: 700;
    }

    &-button {
      padding: 10px 20px;

      background-color: transparent;

      font-weight: 500;

      &:hover {
        background-color: rgba(255, 255, 255, 0.7);
        color: #000;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .wrapper {
    .chapter {
      margin: 60px 0;

      &-title {
        font-size: 36px;
      }
      &-img {
        height: auto;
      }
    }
    .footer {
      margin: 0 -120px -40px -120px;
      &-title {
        font-size: 36px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    .title {
      font-size: 64px;
    }
    .chapter {
      display: block;
      margin: 40px 0;

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
    .footer {
      margin: 0 -80px -40px -80px;
    }
  }
}

@media screen and (max-width: 576px) {
  .wrapper {
    .title {
      font-size: 48px;
    }

    .footer {
      padding: 0 20px;
      margin: 0 -40px -20px -40px;

      &-title {
        font-size: 24px;
      }

      &-subtitle {
        font-size: 12px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .wrapper {
    .chapter {
      p {
        font-size: 14px;
      }
    }
    .title {
      font-size: 36px;
    }
    .footer {
      margin: 0 -20px -20px -20px;

      &-button {
        width: 100%;
      }
    }
  }
}
</style>
