const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false, // Para permitir visitar Google sin problemas
    viewportWidth: 1280,
    viewportHeight: 720
  },
});
