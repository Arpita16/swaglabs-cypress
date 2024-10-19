const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  e2e: {
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
