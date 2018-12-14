/*
 * Movies - On Demand page functionality
 */
const commands = {  
    validateHeader: function() {
        this.waitForElementVisible('@pageHeader', 3000)
            .assert.containsText('@pageHeader', 'Movies')
    },
    validateCurrentWindow: function() {
        this.assert.containsText('@currentFocus', 'On Demand')
    },
    clickMovieListing: function() {
      this.waitForElementVisible('@listingItem', 10000)
      return this.click('@listingItem')
    }
  };
  
  
  module.exports = {
    commands: [commands],
    elements: 
    {
      pageHeader: 'h1.h1',
      currentFocus: 
      {
        selector: "//a[@class='rb-page-route__subnav__link ws:nowrap active']",
        locateStrategy: 'xpath'
      },
      listingItem:
      {
        selector: "//div[@class='rb-browse-title'][2]",
        locateStrategy: 'xpath'
      }
    }
  };