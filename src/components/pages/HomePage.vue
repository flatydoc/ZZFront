<template>
  <div class="wrapper">
    <section class="head">
      <div class="info">
        <h1 class="title">
          ZZ <br />
          GROUP
        </h1>
        <p class="subtitle">BEST TRADE GROUP MMC</p>
        <p class="desc">
          Our services will assist you in trading your products in UAE. Our
          goods are produced in our own full-cycle manufacturing facilities in
          China.
        </p>
        <Button
          @click="open('/contacts')"
          label="Contact us"
          class="p-button-rounded button"
        />
      </div>
      <div class="slider"></div>
    </section>
    <section class="section services">
      <h2 class="section-title">Our services</h2>
      <div class="services-wrapper section-wrapper">
        <div @click="open('/import-export')" class="card">
          <div>
            <img
              class="card-img"
              src="../../assets/import.jpg"
              alt="IMPORT / EXPORT"
            />
          </div>
          <h3 class="card-title">IMPORT / EXPORT</h3>
          <p>
            Many enterprises have already benefited from ZZ group's assistance
            in importing and exporting their goods around the world.
          </p>
        </div>
        <div @click="open('/supply-chain-optimization')" class="card">
          <div>
            <img
              class="card-img"
              src="../../assets/supply.jpg"
              alt="SUPPLY CHAIN OPTIMIZATION"
            />
          </div>
          <h3 class="card-title">SUPPLY CHAIN OPTIMIZATION</h3>
          <p>
            ZZ Group has extensive experience with procurement processes and
            developing tailored business solutions for specific needs.
          </p>
        </div>
        <div @click="open('/trade-promotion-optimization')" class="card">
          <div>
            <img
              class="card-img"
              src="../../assets/promotion.jpg"
              alt="TRADE PROMOTION OPTIMIZATION"
            />
          </div>
          <h3 class="card-title">TRADE PROMOTION OPTIMIZATION</h3>
          <p>
            The ZZ company splits the expense of exposition stands and
            promoters, presenters, marketers, and designers.
          </p>
        </div>
        <div @click="open('/value-added-logistics-services')" class="card">
          <div>
            <img
              class="card-img"
              src="../../assets/logistics.jpg"
              alt="VALUE-ADDED LOGISTICS SERVICES"
            />
          </div>
          <h3 class="card-title">VALUE-ADDED LOGISTICS SERVICES</h3>
          <p>
            Learn more about our logistics outsourcing, warehouse management,
            and dropshipping services.
          </p>
        </div>
      </div>
    </section>
    <section class="section products">
      <h2 class="section-title">Our products</h2>
      <div class="products-wrapper section-wrapper">
        <div @click="open('/products')" class="card">
          <div>
            <img
              class="card-img"
              alt="Consumer electronics"
              src="../../assets/сonsumer_electronics.jpg"
            />
          </div>
          <p>Consumer electronics</p>
        </div>
        <div @click="open('/products')" class="card">
          <div>
            <img
              class="card-img"
              alt="Alternative energy"
              src="../../assets/alternative_energy.jpg"
            />
          </div>
          <p>Alternative energy</p>
        </div>
        <div @click="open('/products')" class="card">
          <div>
            <img
              class="card-img"
              alt="Health & Wellbeing products"
              src="../../assets/health_products.jpg"
            />
          </div>
          <p>Health & Wellbeing products</p>
        </div>
        <div @click="open('/products')" class="card">
          <div>
            <img
              class="card-img"
              alt="Industrial equipment"
              src="../../assets/industrial_equipment.jpg"
            />
          </div>
          <p>Industrial equipment</p>
        </div>
        <div @click="open('/products')" class="card">
          <div>
            <img
              class="card-img"
              alt="Souvenir products"
              src="../../assets/souvenir_products.jpg"
            />
          </div>
          <p>Souvenir products</p>
        </div>
        <div class="card more">
          <p>WISH TO KNOW MORE ABOUT THE SERVICES AND PRODUCTS WE OFFER?</p>
          <p>Let us provide you extra information on them.</p>
          <Button
            @click="open('/contacts')"
            label="Contact us"
            class="p-button-rounded button"
          />
        </div>
      </div>
    </section>
    <ScrollTop />
  </div>
</template>

<script>
import Button from "primevue/button";
import ScrollTop from "primevue/scrolltop";
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
  padding: 0;
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
        font-size: 120px;
        font-weight: 700;
      }

      .subtitle {
        margin-bottom: 30px;

        color: rgba(33, 33, 33, 0.6);
        font-size: 36px;
        font-weight: 400;
      }

      .desc {
        font-size: 16px;
        line-height: 20px;
      }
    }

    .slider {
      width: 40%;
      display: block;

      background-image: url(../../assets/slider.jpg);
      background-size: cover;
    }
  }

  .section-title {
    font-size: 48px;
    font-weight: 600;
    color: #212121;
  }

  .section {
    padding: 80px 120px 100px 120px;
    &:not(.products) {
      background-color: var(--surface-c);
    }

    .section-wrapper {
      display: grid;
      gap: 40px;

      margin-top: 20px;

      .card {
        overflow: hidden;
        cursor: pointer;

        &:hover {
          .card-img {
            transform: scale(1.1);
          }
          .card-title {
            text-decoration: underline;
          }
        }

        &-title {
          margin: 20px 0;

          font-size: 20px;
          font-weight: 600;
          color: #212121;
        }
        div {
          overflow: hidden;
        }
        &-img {
          width: 100%;
          height: auto;

          transition: transform 0.5s ease-out;
        }
      }
    }
    .services-wrapper {
      grid-template-areas:
        "1 2"
        "3 4";
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
    .products-wrapper {
      grid-template-areas:
        "1 2 3"
        "4 5 6";
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;

      p {
        margin-top: 20px;

        text-align: center;
        font-size: 16px;
        font-weight: 500;
      }

      .more {
        p {
          margin-top: 0;

          font-weight: 400;
          text-align: left;
          &:first-child {
            margin-bottom: 20px;

            font-size: 18px;
            font-weight: 900;
            line-height: 28px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  .wrapper {
    .head {
      .info {
        padding: 120px 240px;
        .title {
          font-size: 160px;
        }

        .subtitle {
          font-size: 48px;
        }

        .desc {
          font-size: 28px;
          line-height: 36px;
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
      .slider {
        display: none;
      }
      .info {
        width: 100%;
      }
    }
    .section {
      .products-wrapper {
        grid-template-areas:
          "1 2"
          "3 4"
          "5 6";
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;

        .more {
          p {
            &:first-child {
              font-size: 16px;
              line-height: 24px;
            }
          }
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

          font-size: 90px;
        }

        .subtitle {
          margin-bottom: 20px;

          font-size: 28px;
        }
      }
    }
    .section-title {
      font-size: 38px;
    }
    .section {
      padding: 40px 80px;

      .section-wrapper {
        display: block;

        .card {
          margin-bottom: 30px;
        }
      }
      .products-wrapper {
        .more {
          display: flex;
          flex-direction: column;

          align-items: center;
          p {
            text-align: center;
          }
        }
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
          font-size: 70px;
        }

        .subtitle {
          font-size: 24px;
        }

        .desc {
          font-size: 14px;
        }
      }
    }
    .section-title {
      font-size: 28px;
    }
    .section {
      padding: 20px 40px;

      .section-wrapper {
        .card {
          &-title {
            font-size: 16px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .wrapper {
    .head {
      .info {
        .title {
          font-size: 64px;
        }

        .subtitle {
          font-size: 20px;
        }
      }
    }
    .section-title {
      font-size: 22px;
    }

    .button {
      width: 100%;
    }
  }
}
</style>
