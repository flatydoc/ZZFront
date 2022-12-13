<template>
  <div class="wrapper">
    <h2 class="title">{{ $t("privacy_page.title") }}</h2>
    <p>
      {{ $t("privacy_page.paragraphs.1") }}
    </p>
    <p>
      {{ $t("privacy_page.paragraphs.2") }}
    </p>
    <p>
      {{ $t("privacy_page.paragraphs.3") }}
    </p>
    <h3 class="subtitle">{{ $t("privacy_page.1_section.title") }}</h3>
    <p>
      {{ $t("privacy_page.1_section.desc") }}
    </p>
    <h3 class="subtitle">{{ $t("privacy_page.2_section.title") }}</h3>
    <p>
      {{ $t("privacy_page.2_section.paragraphs.1") }}
    </p>
    <p>
      {{ $t("privacy_page.2_section.paragraphs.2") }}
    </p>
    <p>
      {{ $t("privacy_page.2_section.paragraphs.3") }}
    </p>
    <h3 class="subtitle">{{ $t("privacy_page.3_section.title") }}</h3>
    <p>{{ $t("privacy_page.3_section.desc") }}</p>
    <ul class="list">
      <li>{{ $t("privacy_page.3_section.list.1") }}</li>
      <li>{{ $t("privacy_page.3_section.list.2") }}</li>
      <li>{{ $t("privacy_page.3_section.list.3") }}</li>
      <li>{{ $t("privacy_page.3_section.list.4") }}</li>
      <li>{{ $t("privacy_page.3_section.list.5") }}</li>
      <li>{{ $t("privacy_page.3_section.list.6") }}</li>
      <li>{{ $t("privacy_page.3_section.list.7") }}</li>
    </ul>
    <h3 class="subtitle">{{ $t("privacy_page.4_section.title") }}</h3>
    <p>
      {{ $t("privacy_page.4_section.desc") }}
    </p>
    <h3 class="subtitle">{{ $t("privacy_page.5_section.title") }}</h3>
    <p>
      {{ $t("privacy_page.5_section.desc") }}
    </p>
    <h3 class="subtitle">{{ $t("privacy_page.6_section.title") }}</h3>
    <p>
      {{ $t("privacy_page.6_section.desc") }}
    </p>
    <h3 class="subtitle">{{ $t("privacy_page.7_section.title") }}</h3>
    <p>
      {{ $t("privacy_page.7_section.paragraphs.1") }}
    </p>
    <p>
      {{ $t("privacy_page.7_section.paragraphs.2") }}
    </p>
    <h3 class="subtitle">
      {{ $t("privacy_page.8_section.title") }}
    </h3>
    <p>
      {{ $t("privacy_page.8_section.desc") }}
    </p>
    <ul class="list">
      <li>
        {{ $t("privacy_page.8_section.list.1") }}
      </li>
      <li>
        {{ $t("privacy_page.8_section.list.2") }}
      </li>
      <li>
        {{ $t("privacy_page.8_section.list.3") }}
      </li>
      <li>
        {{ $t("privacy_page.8_section.list.4") }}
      </li>
    </ul>
    <h3 class="subtitle">{{ $t("privacy_page.9_section.title") }}</h3>
    <p>
      {{ $t("privacy_page.9_section.desc") }}
    </p>
    <ul class="list">
      <li>
        {{ $t("privacy_page.9_section.list.1") }}
      </li>
      <li>
        {{ $t("privacy_page.9_section.list.2") }}
      </li>
      <li>
        {{ $t("privacy_page.9_section.list.3") }}
      </li>
      <li>
        {{ $t("privacy_page.9_section.list.4") }}
      </li>
      <li>
        {{ $t("privacy_page.9_section.list.5") }}
      </li>
      <li>
        {{ $t("privacy_page.9_section.list.6") }}
      </li>
      <li>
        {{ $t("privacy_page.9_section.list.7") }}
      </li>
    </ul>
    <ScrollTop />
  </div>
</template>

<script>
import ScrollTop from "primevue/scrolltop";
export default {
  data() {
    return {};
  },
  components: {
    ScrollTop,
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  font-weight: 500;

  .title {
    text-align: center;
    font-size: 80px;
    font-weight: 700;
    color: #212121;
  }

  .subtitle {
    margin: 30px 0 20px 0;

    font-size: 20px;
    font-weight: 700;
    color: #212121;
  }

  p {
    margin: 20px 0;
    line-height: 150%;
  }

  .list {
    margin-left: 20px;

    list-style-position: inside;

    li {
      line-height: 25px;
    }
  }
}

@media screen and (max-width: 576px) {
  .wrapper {
    .title {
      font-size: 40px;
    }

    .subtitle {
      font-size: 18px;
    }
  }
}
</style>
