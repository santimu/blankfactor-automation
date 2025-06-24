Feature: BlankFactor Automation Test

  Background:
    Given I visit the BlankFactor website

  Scenario: Navigate and interact with Retirement and Wealth page
    When I accept the cookie policy if present
    And I navigate to the Retirement and Wealth section
    And I hover over the third tile under "Powering innovation in retirement services"
    And I scroll to the bottom and click on Let's get started
    Then I should be on the contact page with the correct URL and title
    And I print the page title in the logs
