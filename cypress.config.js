const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://gallery-app.vivifyideas.com/",
    env: {
      existingUserEmail: "draganaa@gmail.com",
      validPassword: "pokusavam100"
    }
  },
});
