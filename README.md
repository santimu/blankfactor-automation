# BlankFactor Website Automation Test

This repository contains an automated test suite for the BlankFactor website, developed using Cypress and Cucumber (Gherkin) for behavior-driven development (BDD). The project aims to demonstrate robust web automation practices, including the use of Page Object Model (POM) and clear, readable test scenarios.

## 🚀 Technologies Used

* **Cypress:** A fast, easy, and reliable testing for anything that runs in a browser.
* **Cucumber (Gherkin):** For writing human-readable test scenarios (feature files) that describe the application's behavior.
    * `@badeball/cypress-cucumber-preprocessor`: Integrates Cucumber with Cypress.
* **ESBuild:** A fast JavaScript bundler, used here as a preprocessor for Cypress tests.
    * `@bahmutov/cypress-esbuild-preprocessor`: Provides ESBuild integration for Cypress.
* **Node.js & npm:** Runtime environment and package manager.

## ✨ Features Tested

The automation suite covers the following key user flows on the BlankFactor website:

1.  **Cookie Policy Acceptance:** Automatically accepts the cookie consent banner if it appears.
2.  **Navigation to "Retirement and Wealth" Section:** Navigates to a specific section within the website's main menu, involving a hover action on "Industries" and a click on "Retirement and Wealth".
3.  **Interaction with "Powering Innovation" Tiles:** Attempts to hover over specific interactive elements (tiles) within the "Powering innovation in retirement services" section.
4.  **"Let's Get Started" Button Interaction:** Scrolls to the bottom of the page and clicks the "Let's get started" button to navigate to the contact page.
5.  **Contact Page Verification:** Asserts that the navigation leads to the correct contact page URL and title.
6.  **Page Title Logging:** Demonstrates logging information to the Cypress command output.

## 📦 Project Structure
├── cypress/
│   ├── e2e/
│   │   ├── blankfactor.feature     # Gherkin feature file defining test scenarios
│   │   └── blankfactor.cy.js        # Step definitions for the feature file
│   └── pages/
│       └── blankFactorPage.js     # Page Object Model (POM) for element selectors and actions
├── cypress.config.js              # Cypress configuration file
├── package.json                   # Project dependencies and scripts
└── README.md                      # This file

## ⚙️ Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone <your-repository-url>
    cd blankfactor-cypress-tests
    ```

2.  **Install Dependencies:**
    Navigate to the project root directory (`blankfactor-cypress-tests`) and install all required Node.js packages.
    ```bash
    npm install
    ```
    *Note: This will install Cypress, Cucumber preprocessor, ESBuild preprocessor, and their dependencies as listed in `package.json`.*

## ▶️ How to Run Tests

You can run the tests in two modes:

1.  **Cypress Open Mode (Interactive):**
    This opens the Cypress Test Runner UI, allowing you to select and run individual tests, view the application under test, and debug interactively.
    ```bash
    npm run cypress:open
    ```
    * From the Cypress UI, select `E2E Testing` and then choose `blankfactor.feature` to run the tests.

2.  **Cypress Run Mode (Headless):**
    This runs all tests in a headless browser (without opening the UI) and provides results in your terminal. This is ideal for CI/CD pipelines.
    ```bash
    npm run cypress:run
    ```

## ⚠️ Known Issues / Considerations

During development, certain interaction challenges were addressed:

* **`TypeError: createEsbuildPlugin is not a function`**: This error in `cypress.config.js` indicated an issue with the ESBuild preprocessor import. It was resolved by ensuring the correct `require` syntax and performing a clean `npm install`.
* **`cy.trigger() can only be called on a single element`**: The "Industries" navigation link sometimes resulted in multiple elements being found (e.g., desktop vs. mobile menus). This was handled by refining the selector to target only visible elements using `.filter(':visible').first()`.
* **`cy.trigger() failed because ... has CSS pointer-events: none`**: The tiles under "Powering innovation in retirement services" had `pointer-events: none`, preventing direct hover interaction. `force: true` was used for `trigger('mouseover')` to bypass this CSS property and allow the test to proceed, suggesting the actual user interaction might differ or require specific page state.
* **`cy.click() failed because ... is being covered by another element: <img>`**: The "Let's get started" button was sometimes obscured by an image. This was mitigated by adding a `cy.wait()` after `scrollIntoView()` to allow the page to settle, or could be forced with `click({ force: true })` if necessary.
* **`Expected to find content ... but never did`**: Timing issues where elements were not yet present in the DOM were addressed by ensuring appropriate waits (`cy.wait()`) or by increasing `defaultCommandTimeout` in `cypress.config.js`.
* **`Tooltipster's "hide" method on an uninitialized element`**: Uncaught exceptions from the application's JavaScript (Tooltipster library) were observed. These can be ignored by configuring Cypress to not fail on uncaught exceptions if they don't block the test flow.

## Credits

This `README.md` file was collaboratively generated with the assistance of a large language model.

---
