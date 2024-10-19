# swaglabs-cypress
**Introduction**

This is a test automation project for Swag Labs, built using Cypress, a JavaScript End-to-End testing framework.

**Prerequisites**

List of software and versions required to run the project (Node.js, npm, Cypress).

Node.js >= v12 or higher

npm >= 6 or higher 
or yarn

Cypress (this project is configured to use Cypress)

**Installation**

# Clone the repository
git clone https://github.com/Arpita16/swaglabs-cypress.git

# Navigate to the project directory
cd swaglabs-cypress

# Install dependencies

Install Node.js-Visit the official Node.js website: https://nodejs.org.(if not installed in the system)

Install npm latest version:npm install -g npm@latest(if not installed in the system already)

IDE application(Visual Studio Code recommended)

# Check Versions

node -v

npm -v
# Install Cypress
npm init -y

npm install --save-dev cypress



Run Cypress Tests in GUI mode:
npx cypress open

Configuration

Cypress configuration options in cypress.json

module.exports = defineConfig({
  watchForFileChanges:false,
  e2e: {
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
       // implement node event listeners here
   },
  },
});


