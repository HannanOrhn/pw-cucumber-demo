@testHannan
Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link
  
  Scenario: Login should be success
    And User enter the username as "username1"
    And User enter the password as "password1"
    When User click on the login 
    Then Login should be success

  Scenario: Login should not be success
    Given User enter the username as "username2"
    Given User enter the password as "password2"
    When User click on the login button
    But Login should fail