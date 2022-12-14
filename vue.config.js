const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/ZZFront" : "/",

  pluginOptions: {
    i18n: {
      locale: "az",
      fallbackLocale: "az",
      localeDir: "i18n",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
});
