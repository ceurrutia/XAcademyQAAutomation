const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //listeners que tenga
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,         //No sobreescribe archivo
      html: false,               //Un solo json
      json: true,
      reportFilename: "[name].json" //crea uno para cada
    }
  }
});

