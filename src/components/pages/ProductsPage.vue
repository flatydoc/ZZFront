<template>
  <div class="wrapper">
    <section class="head">
      <div class="info">
        <h1 class="title">
          PRODUCTS <br />
          ZZ GROUP
        </h1>
        <a class="anchor-link button" href="#consumer_electronics"
          >Consumer electronics</a
        >
        <a class="anchor-link button" href="#alternative_energy"
          >Alternative energy</a
        >
        <a class="anchor-link button" href="#health_&_wellbeing_products"
          >Health & Wellbeing products</a
        >
        <a class="anchor-link button" href="#industrial_equipment"
          >Industrial equipment</a
        >
        <a class="anchor-link button" href="#souvenir_products"
          >Souvenir products</a
        >
      </div>
      <div class="slider"></div>
    </section>
    <section class="chapter" id="consumer_electronics">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Consumer electronics</h3>
        <p>
          We're delighted to provide a diverse range of consumer electronics. We
          are able to deliver exceptional electronic goods just in time thanks
          to our own production and top-class quality control method.
        </p>
        <ul class="chapter-list">
          <li>Private data storage (flash memory devices and HDDs)</li>
          <li>Graphic and mining equipment (graphic cards for PC)</li>
          <li>Comforttracker (visit promo.comforttracker.net)</li>
        </ul>
        <Button
          @click="open('/contacts')"
          label="Get more"
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
        <h3 class="chapter-title">Alternative energy</h3>
        <p>
          For our company, we have chosen the Green Sustainable Way and are
          assisting others in doing so. We're ready to help with the
          development, installation, setup and maintenance of alternative energy
          sources:
        </p>
        <ul class="chapter-list">
          <li>Windmills</li>
          <li>Solar Panels</li>
        </ul>
        <Button
          @click="open('/contacts')"
          label="Get more"
          class="p-button-rounded button"
        />
      </div>
    </section>
    <section class="chapter" id="health_&_wellbeing_products">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Goods for health and well-being</h3>
        <p>
          The pandemic has boosted the production and distribution of health
          products. Today, most facilities around the world require the
          necessary protective equipment. We have everything you need to
          manufacture and deliver on time:
        </p>
        <ul class="chapter-list">
          <li>Medical masks (I, II, IIR)</li>
          <li>Respirators (FFP1, FFP2, FFP3)</li>
          <li>Visors and Protective Eyeglasses</li>
          <li>Medical Gowns</li>
          <li>Sanitizers and Sprayers</li>
          <li>Dental products</li>
        </ul>
        <Button
          @click="open('/contacts')"
          label="Get more"
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
        <h3 class="chapter-title">Industrial equipment</h3>
        <p>
          We've been improving our facilities for over a decade, and now we're
          ready to provide you with time-tested products to help you get your
          business up and running as quickly as possible:
        </p>
        <ul class="chapter-list">
          <li>Gas station car washes</li>
          <li>Packaging equipment</li>
          <li>Power generators</li>
          <li>Molds</li>
        </ul>
        <Button
          @click="open('/contacts')"
          label="Get more"
          class="p-button-rounded button"
        />
      </div>
    </section>
    <section class="chapter" id="souvenir_products">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Souvenir products</h3>
        <p>
          Each year, we have sought out third-party suppliers for gift ideas for
          our partners. The suppliers' experience has inspired us to start our
          own souvenir brand. Now we can offer:
        </p>
        <ul class="chapter-list">
          <li>Customized pens</li>
          <li>Customized calendars</li>
          <li>Customized flash drives</li>
          <li>Cosmetic / liquid vials</li>
          <li>Stands for stores and gas stations</li>
        </ul>
        <Button
          @click="open('/contacts')"
          label="Get more"
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
    width: 180px;
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
        font-size: 80px;
        font-weight: 700;
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
          font-size: 56px;
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
          font-size: 42px;
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
