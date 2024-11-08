# swaglabs-cypress

# Introduction

This is a test automation project for "Sauce Demo" (https://www.saucedemo.com/ ) , built using Cypress, a JavaScript End-to-End testing framework.This website is designed for testing purposes and offers an e-commerce environment with login, product listings, and checkout flow.

### Automated the Following Test Cases

**Login with Valid Credentials**

Navigate to the login page: https://www.saucedemo.com/

Enter username: standard_user

Enter password: secret_sauce

Click the "Login" button

Verify that the login was successful by:
Checking that the URL contains /inventory

Confirming that the product list is displayed

**Add Products to the Cart and Complete a Purchase**

After logging in as standard_user:

Note and save the price, title, and description for the following products before adding them to the cart:
"Sauce Labs Backpack"

Navigate to the cart by clicking the cart icon.

Click "Checkout"

Filled in the following information:

First Name: Any name

Last Name: Any surname

Postal Code: Any postal code

Click "Continue"

Verify that the summary page shows the correct information for "Sauce Labs Backpack", including price, title, and description.

Click "Finish"

Verify that the message "Thank you for your order!" is displayed

# Prerequisites

List of software and versions required to run the project (Node.js, npm, Cypress).

Node.js >= v12 or higher

npm >= 6 or higher 
or yarn

Cypress (this project is configured to use Cypress)

# Installation

## Clone the repository
git clone https://github.com/Arpita16/swaglabs-cypress.git

## Navigate to the project directory
cd swaglabs-cypress

## Install dependency

Install Node.js-Visit the official Node.js website: https://nodejs.org.(if not installed in the system)

Install npm latest version:npm install -g npm@latest(if not installed in the system already)

IDE application(Visual Studio Code recommended)

## Check Version

node -v

npm -v

# Install Cypress

npm init -y

npm install --save-dev cypress


**Run Cypress Tests in GUI mode:**

npx cypress open->E2E Testing->Start E2E Testing in Chrome->Specs->Double click on the Specs to run one by one 

# Configuration

**Cypress configuration in cypress.json**

     module.exports = defineConfig({

          watchForFileChanges:false,     // prevent cypress from automatically re-running tests whenever it detects a file change
  
       e2e: {
    
                chromeWebSecurity:false,      //bypasses standard security policies
   
                setupNodeEvents(on, config) {
       
                                    // implement node event listeners here
  
                 },
  
           },
  
    });


