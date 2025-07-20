const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
    baseUrl:"https://magento.softwaretestingboard.com",
    specPattern: "**/*.{feature,cy.js}",
    //viewportHeight:550,
    //viewportWidth:550,
    //watchForFileChanges:false,
  },
});
