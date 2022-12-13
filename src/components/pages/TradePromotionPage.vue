<template>
  <div class="wrapper">
    <h2 class="title">TRADE PROMOTION OPTIMIZATION</h2>
    <section class="chapter">
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
        class="chapter__block-left"
      >
        <h3 class="chapter-title">Value</h3>
        <p>
          Participating in exhibitions helps you to encounter a large number of
          valued potential clients in one location at a specified time. You will
          establish the groundwork for extending your network of contacts and
          sales by selecting the suitable exhibition for the product you are
          showing and carefully organizing everything you do.
        </p>
      </div>
      <div class="chapter__block-right">
        <p>
          If a company is visible on a big platform, participation in the
          largest shows helps to boost its reputation. Exhibitions are an
          excellent way to gain immediate feedback on a product. An exhibition
          is a terrific place to check it out if you're not sure what
          characteristics the original product will have or if you haven't
          mass-produced it yet and want to see if potential purchasers will
          appreciate it.
        </p>
        <p>
          You can meet sales representatives, founders, investors, and speakers
          at exhibitions with whom you can collaborate.
        </p>
        <p>
          You can observe competitors at an exhibition to see how they position
          their brands, what colors they use to design their exhibits, how their
          reps appear, and how they entice potential buyers.
        </p>
      </div>
    </section>
    <img src="../../assets/promotion_page_1.jpg" />
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Challenge</h3>
        <p>
          Preparing for an exhibition takes a lot of time and effort. If the
          exhibition is held in another country, you will need to arrange for
          visas, find a place to stay, select staff who will attend, prepare a
          presentation, speech, stand design, employee attire, business cards,
          brochures, and booklets. When you start doing all of this, you
          question if it's really essential.
        </p>
      </div>
      <div class="chapter__block-right">
        <p>
          Participating in a variety of events stands to reason. Buyers,
          sellers, and investors want to interact, receive information, make
          judgments, and conclude agreements in today's digital world. The best
          ways to do this are through exhibitions and events.
        </p>
        <p>
          This is something that visitors to exhibitions are always in the mood
          for. They attend a certain event with the intent of gaining expertise
          and reviewing ideas. Investors can come to look for investment
          opportunities. As a result, exhibitions are regarded as tremendously
          important events. Managers spend a lot of time developing contact
          qualifications during the usual sales cycle. These stages are omitted
          at exhibitions, though, because spectators are interested. This
          manner, you can be certain that you have captured your audience's
          attention.
        </p>
      </div>
    </section>
    <img src="../../assets/promotion_page_2.png" />
    <section class="chapter">
      <div class="chapter__block-left">
        <h3 class="chapter-title">Solution</h3>
      </div>
      <div class="chapter__block-right">
        <p>
          Many businesses still cannot afford to participate in an expo or other
          type of event, owing to a lack of funds. They must pay not only the
          entrance fees, but also all associated expenditures such as travel,
          visas, lodging, stand design, printing of all handouts, and the wages
          of managers or corporate representatives. ZZ BEST TRADE GROUP MMC
          decided to provide special conditions to assist diverse enterprises
          and start-ups in attending trade shows. We promise to split the cost
          of exposition stands and to provide promoters, speakers, marketers,
          and designers to help with the creation of promotional materials. At
          the same time, ZZ BEST TRADE GROUP MMC gives comprehensive
          participation metrics and advice.
        </p>
      </div>
    </section>
    <section class="footer">
      <h4 class="footer-title">Find out more about the service</h4>
      <p class="footer-subtitle">
        ZZ BEST TRADE GROUP MMC will provide you with the comprehensive service
        you require.
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
    url(../../assets/promotion_page_bg.jpg);
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
