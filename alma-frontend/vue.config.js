module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
    name: "VacunasGT ALMA",
    themeColor: "",
    msTileColor: "",
    workboxPluginMode: "GenerateSW",
    appleMobileWebAppCache: "yes",
  },
};
