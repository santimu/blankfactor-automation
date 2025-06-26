// blankfactor.cy.js
// Cucumber step definitions for BlankFactor site

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BlankFactorPage from "../pages/blankFactorPage";
import RetirementAndWealthPage from "../pages/retirementAndWealthPage";
import LetsGetStartedPage from "../pages/letsGetStartedPage";


// --- Given ---
Given("I visit the BlankFactor website", () => {
  BlankFactorPage.visit();
});

// --- When ---
When("I accept the cookie policy if present", () => {
  BlankFactorPage.acceptCookiePolicy();
});

When("I navigate to the Retirement and Wealth section", () => {
  BlankFactorPage.navigateToRetirementAndWealth();
});

When(
  'I hover over the third tile under "Powering innovation in retirement services" and verify card text',
  () => {
    RetirementAndWealthPage.hoverOverThirdTileUnderPoweringInnovation();
  }
);

When("I scroll to the bottom and click on Let's get started", () => {
  RetirementAndWealthPage.scrollToBottomAndClickLetsGetStarted();
});

// --- Then ---
Then("I should be on the contact page with the correct URL and title", () => {
  LetsGetStartedPage.verifyContactPageUrlAndTitle();
});

Then("I print the page title in the logs", () => {
  LetsGetStartedPage.printPageTitle();
});
