Feature: BlankFactor Automation Test

  Background:
    Given I visit the BlankFactor website
    When I accept the cookie policy if present
    And I navigate to the Retirement and Wealth section
  
  
  Scenario: Verify text in the 3rd card
    Then I hover over the third tile under "Powering innovation in retirement services" and verify card text

  Scenario: Validate Lets get started page  
    When I scroll to the bottom and click on Let's get started
    Then I should be on the contact page with the correct URL and title
    And I print the page title in the logs
