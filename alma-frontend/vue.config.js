module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
    name: "VacunasGT",
    themeColor: "",
    msTileColor: "",
    workboxPluginMode: "GenerateSW",
    appleMobileWebAppCache: "yes",
  },
};
