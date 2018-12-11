/*
 * New Releases - Movies page functionality
 */
const commands = {  
    validateHeader: function() {
        this.waitForElementVisible('@pageHeader', 3000)
            .assert.containsText('@pageHeader', 'New Movies')
    }
  };
  
  
  module.exports = {
    commands: [commands],
    elements: 
    {
      pageHeader: 'h1.h1'
    }
  };