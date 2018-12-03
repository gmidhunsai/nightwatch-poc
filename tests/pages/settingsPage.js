// Settings page functionalities
const commands = {  
 
    validateSettings: function () {
      this.waitForElementVisible('@myAccountHeader', 3000)
      return this.assert.containsText('@myAccountHeader', 'My Account')
    }
  };
  
  
  module.exports = {
    commands: [commands],
    elements: 
    {
      myAccountHeader: 'h1.h1'
    }
  };