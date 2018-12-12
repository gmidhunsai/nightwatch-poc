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
      }
    }
  };