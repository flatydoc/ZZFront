<template>
  <div class="wrapper">
    <h2 class="title">IMPORT / EXPORT</h2>
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Global Concern</h3>
      </div>
      <div class="chapter__block-right">
        <p>
          Companies use global suppliers as partners to reduce their supply
          costs, but unplanned charges, particularly those related to imports,
          can substantially harm a company's finances. According to studies, the
          difference between the predicted and actual total cost of goods,
          transportation, tariffs, and taxes ranges from 2 to 10%. In extreme
          circumstances, the disparity can increase by more than 10%. It is
          therefore sessential to understand how to cut import and export costs.
        </p>
        <img
          class="chapter-img"
          alt="Global Concern"
          src="../../assets/import_page_1.jpg"
        />
      </div>
    </section>
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Your Partner for Complex Solutions</h3>
      </div>
      <div class="chapter__block-right">
        <p>
          Many companies prefer dropshipping to avoid the multiple hassles and
          costs associated with import and export. This occurs when retailers
          take orders from clients but do not have the products in stock.
          Instead, the vendor sends the order to the manufacturer or distributor
          directly. Since the customer will get the parcel directly from another
          location, you don't have to worry about customs clearance, additional
          taxes, or other issues. However, the seller has no control over the
          quality, the timeliness of delivery, or any other details, and if
          buyers are unhappy with their products, they make a claim against the
          seller. Therefore, having the ability to promptly replace goods from
          our warehouse is essential and will have a positive impact on the
          seller's image. In addition, there's the paperwork for items,
          registrations, and numerous disclosures to be dealt with. As an
          international solutions partner, we offer a comprehensive range of
          import and export services to deliver products and value to our
          clients.
        </p>
      </div>
    </section>
    <img src="../../assets/import_page_2.jpg" />
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Why Us</h3>
      </div>
      <div class="chapter__block-right">
        <p>
          Carrying out an entire campaign to import and export products appears
          to be quite complicated since you must be aware of the regulations and
          intricacies, as well as conduct research to determine what taxes must
          be paid and what certificates must be prepared. There are now
          companies on the market that assist with import and export, as well as
          organizing delivery to a warehouse. Professionals working in such
          firms rule out the potential of making a mistake in document
          preparation or violating the law. ZZ group has already assisted
          several enterprises in effectively importing and exporting their
          products in UAE and China. Managers have set up a dependable system
          involving manufacturers, sellers, buyers, and delivery providers to
          accomplish this.
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
    url(../../assets/import_page_bg.jpg);
  background-size: cover;
  background-position: top;

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
    }
    &-img {
      width: 100%;
      max-width: 800px;
      height: 300px;
      margin-top: 30px;
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

      &-img {
        height: 200px;
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
