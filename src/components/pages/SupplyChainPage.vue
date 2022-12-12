<template>
  <div class="wrapper">
    <h2 class="title">SUPPLY CHAIN OPTIMIZATION</h2>
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">
          When it comes to purchasing or procurement, where does supply chain
          optimization start?
        </h3>
        <p>
          The Chartered Institute of Purchasing and Supply (CIPS) defines
          procurement as the whole set of strategic, tactical, and operational
          processes that organizations employ to maximize profits when
          delivering goods and services to third parties.
        </p>
      </div>
      <div class="chapter__block-right">
        <ul class="chapter-list">
          <li>Cost analysis and sourcing;</li>
          <li>negotiation and contract management;</li>
          <li>operational procurement (bid-to-pay process);</li>
          <li>accounts payable;</li>
          <li>
            supplier performance management are all tasks performed by the
            Procurement Specialist
          </li>
        </ul>
        <p>
          The goal of purchasing is to give organizations with the following
          benefits: supply stability, cost reduction, risk reduction, quality
          improvement, adding value to the product (service), enhancing the
          efficiency of operational business operations, and innovations. The
          purchasing process is solely concerned with coordinating the delivery
          of the appropriate items or services to the appropriate location at
          the appropriate time for the agreed upon price.
        </p>
        <p>
          From request to payment of supplier invoice, the Purchasing Specialist
          oversees the reactive transaction process. His responsibilities
          include stockpiling resources, purchasing non-stockable goods and
          services, subcontracting, and consignment inventory management.
        </p>
        <p>
          If your company has a purchasing process rather than a procurement
          process, it reflects the relative importance of procurement in the
          organization, which has an impact on employees, potential hires,
          suppliers, and the industry's impression of your procurement maturity
          level.
        </p>
        <p>
          Purchasing is the process of getting what you want when you need
          it.Procurement is all about forming long-term, mutually beneficial
          relationships with partners so that the entire supply chain can
          perform at its best; it's all about maximizing the company's worth.
        </p>
      </div>
    </section>
    <img src="../../assets/supply_page_1.jpg" />
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">
          ZZ Group supply chain optimization solution
        </h3>
      </div>
      <div class="chapter__block-right">
        <p>
          We can set up your procurement process from the ground up, tailored to
          your specific business needs and skills. This procedure will pave the
          path for long-term objectives and profit, as well as optimize your
          present supply chain.
        </p>
        <img
          class="chapter-img"
          alt="Global Concern"
          src="../../assets/supply_page_2.jpg"
        />
      </div>
    </section>
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Why Us</h3>
        <p>
          ZZ Group has extensive procurement experience as well as the ability
          to provide bespoke business solutions for non-standard demands.
        </p>
      </div>
      <div class="chapter__block-right">
        <p style="margin-bottom: 20px; font-weight: 700; font-size: 18px">
          OUR FULL PROCUREMENT SERVICE INCLUDES:
        </p>
        <ul class="chapter-list">
          <li>Integration with the world's top e-commerce platforms.</li>
          <li>
            ZZ Group's logistics solution has worked with e-commerce systems
            such as Shopify, BigCommerce, eBay, Alibaba, Alipay, 3dCart, and
            Ecwid for years. We enable customers to track logistics activities
            in real time and monitor each stage.
          </li>
          <li>
            Freight transportation and warehousing of any level of complexity.
            We enable customers to track logistics activities in real time and
            monitor each stage. Our experts are ready to assist you in arranging
            safe FTL and LTL freight transportation of even the most delicate
            and unique goods in the quickest time feasible.
          </li>
          <li>
            Stock management service. Our experts are ready to assist you in
            arranging safe FTL and LTL freight transportation of even the most
            delicate and unique goods in the quickest time feasible. ZZ Group
            professionals will assist you in developing a well-functioning
            supply chain and operational control of warehouse inventories,
            taking into consideration seasonal swings and supply and demand
            market trends.
          </li>
          <li>
            Express service delivered just-in-time. Our experts are ready to
            manage product delivery on the day of shipment or create a
            "just-in-time" supply chain.
          </li>
          <li>
            Service for reverse logistics. ZZ Group is prepared to give our
            customers with the option of returning defective products through a
            global network of warehouses. We provide a simple return policy and
            prompt replacement.
          </li>
        </ul>
      </div>
    </section>
    <section class="benefits">
      <h4 class="benefits-title">
        ZZ Group benefits for procurement services:
      </h4>
      <div class="benefits__wrapper">
        <div>
          <img src="../../assets/supply_page_3.jpg" />
          <p>
            Additional service for quality control of production by QC agents of
            Chinese manufacturers
          </p>
        </div>
        <div>
          <img src="../../assets/supply_page_4.jpeg" />
          <p>Assistance with OEM manufacturing in China</p>
        </div>
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
    url(../../assets/supply_page_bg.jpg);
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
      }
    }
    &-img {
      width: 100%;
      max-width: 800px;
      height: 400px;

      margin-top: 30px;
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

  .benefits {
    margin: 80px 0;
    &-title {
      margin-bottom: 30px;

      text-align: center;
      font-size: 48px;
      font-weight: 700;
      color: #212121;
    }

    &__wrapper {
      display: flex;

      div {
        width: 50%;
        padding: 40px;

        img {
          display: block;
          margin: 0 auto;
          width: 100%;
          max-width: 800px;
          height: auto;
          max-height: none;
        }

        p {
          margin-top: 30px;

          text-align: center;
          line-height: 150%;
        }
      }
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
    .chapter {
      margin: 40px 0;

      &-title {
        font-size: 24px;
      }
    }
    .benefits {
      margin: 40px 0;
      &-title {
        margin-bottom: 20px;

        font-size: 24px;
      }

      &__wrapper {
        display: block;

        div {
          width: 100%;
          padding: 20px;

          p {
            margin-top: 20px;
          }
        }
      }
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
      display: block;

      &-title {
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
