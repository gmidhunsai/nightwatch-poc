/*
 * Movies - On Demand -> Checkout page -> Confirmation functionality
 */
const commands = {  
    validateHeader: function() {
        this.waitForElementVisible('@pageHeader', 10000)
            .assert.containsText('@pageHeader', 'Thank You')
    }
  };
  
  
  module.exports = {
    commands: [commands],
    elements: 
    {
      pageHeader: 
      {
        selector: "//header/h1",
        locateStrategy: 'xpath'
      }
    }
  };