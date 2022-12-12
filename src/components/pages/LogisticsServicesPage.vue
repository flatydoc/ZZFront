<template>
  <div class="wrapper">
    <h2 class="title">VALUE-ADDED LOGISTICS SERVICES</h2>

    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Organization of distribution centers</h3>
      </div>
      <div class="chapter__block-right">
        <p>
          Nowadays, speed and the ability to lower the cost of managing business
          operations that are mostly dependent on external sources are crucial
          to corporate success. One such example is the supply and distribution
          logistics business process, which is being increasingly successfully
          implemented by outsourcing organizations.
        </p>
        <p>
          Value-added logistics is a type of logistics that focuses on the
          management of distribution hubs that are placed near consumer
          marketplaces. It allows you to raise the product's customer value and
          improve customer interaction. Customers are willing to pay extra for
          personalized delivery services and, if required, to return low-quality
          products, so we, as logistics service providers, are also added-value
          generators.
        </p>
      </div>
    </section>
    <img src="../../assets/logistics_page_2.png" />
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Logistics benefits with ZZ Group</h3>
        <ul class="chapter-list">
          <li>
            Decreasing the costs of transporting and selling products to end
            customers.
          </li>
          <li>
            The ability to build a flexible raw material portfolio, especially
            those for non-standard orders or delivery terms (piece supplies,
            organization of just-in-time deliveries).
          </li>
          <li>Infrastructure for transportation and warehousing is leased.</li>
          <li>
            Increasing control over product and goods logistics, warehousing,
            and clearing operations.
          </li>
          <li>
            Dropshipping. We can use the social media and online stores to
            market things from a certain vendor or set of merchants on our own
            behalf.
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
        <h3 class="chapter-title">Why ZZ Group</h3>
      </div>
      <div class="chapter__block-right">
        <p>
          We deliver manufacturing components from the production point to the
          client's location, taking care of all paperwork, transportation, and
          customs clearance.
        </p>
        <p>
          ZZ Group handles all aspects of packing, labeling, storage, and
          transportation of raw materials and goods, allowing business
          management to concentrate on the product.
        </p>
      </div>
    </section>

    <section class="footer">
      <h4 class="footer-title">Find out more about the service</h4>
      <p class="footer-subtitle">
        ZZ Group will provide you with the comprehensive service you require.
      </p>
      <Button
        @click="open('/contacts')"
        label="Book a free consultation"
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
