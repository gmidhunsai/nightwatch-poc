/*
 * Movies - On Demand -> Checkout page functionality
 */
const commands = {  
    validateHeader: function() {
        this.waitForElementVisible('@pageHeader', 10000)
            .assert.containsText('@pageHeader', 'Checkout')
    },
    validateSectionText: function() {
      this.waitForElementVisible('@sectionTitle', 10000)
          .assert.containsText('@sectionTitle', 'Your On Demand Pick')
    },
    validateSummaryText: function() {
      this.waitForElementVisible('@summaryText', 10000)
          .assert.containsText('@summaryText', 'Your Summary')
    },
    verifyAgeCheckBox: function() {
      this.moveToElement('@checkoutButton',1,1)
        .waitForElementVisible('@ageVerifyCheckBox', 10000)
        .click('@ageVerifyCheckBox')
    },
    checkoutPayment: function() {
      this.waitForElementVisible('@checkoutButton', 10000)
        .click('@checkoutButton')
    }
  };
  
  
  module.exports = {
    commands: [commands],
    elements: 
    {
      pageHeader: 'h1.h1',
      sectionTitle: 
      {
        selector: "//section/h2",
        locateStrategy: 'xpath'
      },
      summaryText:
      {
        selector: "//header/h2[@data-test-id='rb-panel-heading']",
        locateStrategy: 'xpath'
      },
      ageVerifyCheckBox: 'svg.rb-checkbox',
      checkoutButton:
      {
        selector: '//button[@data-test-id="checkout-button"]',
        locateStrategy: 'xpath'
      }
    }
  };