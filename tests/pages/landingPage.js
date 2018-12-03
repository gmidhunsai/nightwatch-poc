// Post Login page functionalities
const commands = {  
 
    validateSignIn: function () {
      this.waitForElementVisible('@signInHeader', 3000)
      return this.assert.containsText('@signInHeader', 'Hi PZS!')
    },

    clickSettings: function() {
      return this.url(this.launchUrl + 'account/')
    }
  };
  
  
  module.exports = {
    commands: [commands],
    elements: 
    {
      signInHeader: 'div.rb-header__greeting',
      settingsButton: 'a.rb-sub-nav__link c:white'
    }
  };