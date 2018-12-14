/*
 * Movies - On Demand -> Rent selection page functionality
 */
const commands = {  
    validateHeader: function() {
        this.waitForElementVisible('@titleHeader', 10000)
            .assert.visible('@titleHeader')
    },
    clickRentOnDemand: function() {
      this.waitForElementVisible('@rentOnDemandButton', 10000)
      return this.click('@rentOnDemandButton')
    },
    clickRentHDPopup: function() {
      this.waitForElementVisible('@rentHDPopupButton', 10000)
      return this.click('@rentHDPopupButton')
    }
  };
  
  
  module.exports = {
    commands: [commands],
    elements: 
    {
      titleHeader: 
      {
        selector: '//h1[@data-test-id="title_detail-name"]',
        locateStrategy: 'xpath'
      },
      rentOnDemandButton: 
      {
        selector: "//span[contains(text(),'Rent On Demand')]",
        locateStrategy: 'xpath'
      },
      rentHDPopupButton:
      {
        selector: "//span[contains(text(),'Rent HD')]",
        locateStrategy: 'xpath'
      }
    }
  };